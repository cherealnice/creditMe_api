import { prisma } from '../src/generated/prisma-client';
import * as bcrypt from 'bcryptjs';

function getPassword(input) {
  const salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync('password', salt);
}

async function main() {
  const roleAudioEngineer = await prisma.createRole({
    name: 'Audio Engineer',
  });

  const roleSaxophonist = await prisma.createRole({
    name: 'Saxophonist',
  });

  const userDan = await prisma.createUser({
    password: getPassword('password'),
    email: 'dcherouny@gmail.com',
    fName: 'Dan',
    lName: 'Cherouny',
    imgUrl: 'https://i.etsystatic.com/14103169/d/il/248fdc/1945465605/il_340x270.1945465605_e1f2.jpg?version=0',
    website: 'https://dancherouny.com',
    roles: {
      connect: [
        { name: 'Audio Engineer' },
        { name: 'Saxophonist' },
      ]
    },
  });

  const genreHeavyMetal = await prisma.createGenre({
    name: 'Heavy Metal',
  });

  const artistTheBeatles = await prisma.createArtist({
    name: 'The Beatles',
    website: 'https://www.thebeatles.com',
    genre: { connect: { id: genreHeavyMetal.id } },
    users: {
      connect: [
        { email: 'dcherouny@gmail.com' },
      ],
    },
  });

  const projectTheSecondBestAlbumEver = await prisma.createProject({
    name: 'The Second Best Album Ever',
    artist: { connect: { id: artistTheBeatles.id } },
  });

  const projectTheBestAlbumEver = await prisma.createProject({
    name: 'The Best Album Ever',
    artist: { connect: { id: artistTheBeatles.id } },
  });

  const creditDanTheBestAlbumEverSaxophonist = await prisma.createCredit({
    user: { connect: { id: userDan.id } },
    project: { connect: { id: projectTheBestAlbumEver.id } },
    role: { connect: { id: roleSaxophonist.id } },
  });

  const creditDanTheSecondBestAlbumEverSaxophonist = await prisma.createCredit({
    user: { connect: { id: userDan.id } },
    project: { connect: { id: projectTheSecondBestAlbumEver.id } },
    role: { connect: { id: roleSaxophonist.id } },
  });

  const creditDanTheSecondBestAlbumEverAudioEngineer = await prisma.createCredit({
    user: { connect: { id: userDan.id } },
    project: { connect: { id: projectTheSecondBestAlbumEver.id } },
    role: { connect: { id: roleAudioEngineer.id } },
  });
}

main().catch(e => console.error(e));

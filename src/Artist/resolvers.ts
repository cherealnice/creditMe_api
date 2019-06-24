import { connectIncludedData } from '../helpers';

const includedDataKeys = ['users', 'genre'];

export default {
  Query: {
    artist: (parent, args, ctx) => (
      ctx.prisma.artist(args)
    ),
    artists: (parent, args, ctx) => (
      ctx.prisma.artists()
    ),
  },
  Artist: {
    projects: ({ id }, args, ctx) => (
      ctx.prisma.artist({ id }).projects()
    ),
    users: ({ id }, args, ctx) => (
      ctx.prisma.artist({ id }).users()
    ),
    genre: ({ id }, args, ctx) => (
      ctx.prisma.artist({ id }).genre()
    ),
  },
  Mutation: {
    createArtist: (parent, { artist }, ctx) => {
      const data = connectIncludedData(
        artist,
        includedDataKeys,
        ctx.me,
      );

      return ctx.prisma.createArtist(data);
    },
    updateArtist: (parent, { id, artist }, ctx) => {
      const data = connectIncludedData(
        artist,
        includedDataKeys,
        ctx.me,
      );

      ctx.prisma.updateArtist({
        where: { id },
        data,
      });
    },
  }
};

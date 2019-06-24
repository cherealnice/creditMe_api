import { connectIncludedData } from '../helpers';

const includedDataKeys = ['user'];

export default {
  Query: {
    genre: (parent, args, ctx) => (
      ctx.prisma.genre(args)
    ),
    genres: (parent, args, ctx) => (
      ctx.prisma.genres()
    ),
  },
  Genre: {
    artists: ({ id }, args, ctx) => (
      ctx.prisma.genre({ id }).artists()
    ),
  },
  Mutation: {
    createGenre: (parent, { genre }, ctx) => {
      const data = connectIncludedData(
        genre,
        includedDataKeys,
        ctx.me,
      );

      return ctx.prisma.createGenre(data);
    },
    updateGenre: (parent, { genre, id }, ctx) => {
      const data = connectIncludedData(
        genre,
        includedDataKeys,
        ctx.me,
      );

      return ctx.prisma.createGenre({
        where: { id },
        data,
      });
    },
  },
};

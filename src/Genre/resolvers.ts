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
  }
};

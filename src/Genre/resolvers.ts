export default {
  Query: {
    genre: (parent, args, ctx) => (
      ctx.prisma.genre(args)
    ),
    genres: async (parent, args, ctx) => {
      const nodes = await ctx.prisma.genres();

      return { nodes };
    },
  },
  Genre: {
    artists: ({ id }, args, ctx) => (
      ctx.prisma.genre({ id }).artists()
    ),
  }
};

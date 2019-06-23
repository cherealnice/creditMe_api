export default {
  Query: {
    artist: (parent, args, ctx) => (
      ctx.prisma.artist(args)
    ),
    artists: async (parent, args, ctx) => {
      const nodes = await ctx.prisma.artists();

      return { nodes };
    },
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
  }
};

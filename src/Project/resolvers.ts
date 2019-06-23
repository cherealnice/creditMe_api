export default {
  Query: {
    project: (parent, args, ctx) => (
      ctx.prisma.project(args)
    ),
    projects: async (parent, args, ctx) => {
      const nodes = await ctx.prisma.projects();

      return { nodes };
    },
  },
  Project: {
    artist: ({ id }, args, ctx) => (
      ctx.prisma.project({ id }).artist()
    ),
    credits: ({ id }, args, ctx) => (
      ctx.prisma.project({ id }).credits()
    ),
  }
};

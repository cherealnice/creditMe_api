export default {
  Query: {
    credit: (parent, args, ctx) => (
      ctx.prisma.credit(args)
    ),
    credits: async (parent, args, ctx) => {
      const nodes = await ctx.prisma.credits();

      return { nodes };
    },
  },
  Credit: {
    project: ({ id }, args, ctx) => (
      ctx.prisma.credit({ id }).project()
    ),
    role: ({ id }, args, ctx) => (
      ctx.prisma.credit({ id }).role()
    ),
    user: ({ id }, args, ctx) => (
      ctx.prisma.credit({ id }).user()
    ),
  }
};

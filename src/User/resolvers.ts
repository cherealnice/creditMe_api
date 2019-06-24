export default {
  Query: {
    me: (parent, args, ctx) => ctx.me,
    user: (parent, args, ctx) => (
      ctx.prisma.user(args)
    ),
    users: async (parent, args, ctx) => {
      const nodes = await ctx.prisma.users();

      return { nodes };
    },
  },
  User: {
    credits: ({ id }, args, ctx) => (
      ctx.prisma.user({ id }).credits()
    ),
    artists: ({ id }, args, ctx) => (
      ctx.prisma.user({ id }).artists()
    ),
    roles: ({ id }, args, ctx) => (
      ctx.prisma.user({ id }).roles()
    ),
  },
};

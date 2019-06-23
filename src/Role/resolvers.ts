export default {
  Query: {
    role: (parent, args, ctx) => (
      ctx.prisma.role(args)
    ),
    roles: async (parent, args, ctx) => {
      const nodes = await ctx.prisma.roles();

      return { nodes };
    },
  },
  Role: {
    users: ({ id }, args, ctx) => (
      ctx.prisma.role({ id }).users()
    ),
  }
};

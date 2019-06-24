export default {
  Query: {
    role: (parent, args, ctx) => (
      ctx.prisma.role(args)
    ),
    roles: (parent, args, ctx) => (
      ctx.prisma.roles()
    ),
  },
  Role: {
    users: ({ id }, args, ctx) => (
      ctx.prisma.role({ id }).users()
    ),
  }
};

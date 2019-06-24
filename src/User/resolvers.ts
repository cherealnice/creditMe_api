export default {
  Query: {
    me: (parent, args, ctx) => ctx.me,
    user: (parent, args, ctx) => (
      ctx.prisma.user(args)
    ),
    users: (parent, args, ctx) => (
      ctx.prisma.users()
    ),
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

export default {
  Query: {
    credit: (parent, args, ctx) => (
      ctx.prisma.credit(args)
    ),
    credits: (parent, args, ctx) => (
      ctx.prisma.credits()
    ),
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

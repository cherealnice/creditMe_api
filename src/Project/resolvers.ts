export default {
  Query: {
    project: (parent, args, ctx) => (
      ctx.prisma.project(args)
    ),
    projects: (parent, args, ctx) => (
      ctx.prisma.projects()
    ),
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

export default {
  Query: {
    artist: (parent, args, ctx) => (
      ctx.prisma.artist(args)
    ),
    artists: (parent, args, ctx) => (
      ctx.prisma.artists()
    ),
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

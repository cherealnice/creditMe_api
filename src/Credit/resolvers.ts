import { connectIncludedData } from '../helpers';

const includedDataKeys = ['project', 'role', 'user'];

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
  },
  Mutation: {
    createCredit: (parent, { credit }, ctx) => {
      const data = connectIncludedData(
        credit,
        includedDataKeys,
        ctx.me,
      );

      return ctx.prisma.createCredit(data);
    },
    updateCredit: async (parent, { credit, id }, ctx) => {
      const data = connectIncludedData(
        credit,
        includedDataKeys,
        ctx.me,
      );

      return ctx.prisma.updateCredit({
        data,
        where: { id },
      });
    },
  }
};

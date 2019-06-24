import { connectIncludedData } from '../helpers';

const includedDataKeys = ['users'];

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
  },
  Mutation: {
    createRole: (parent, { role }, ctx) => {
      const data = connectIncludedData(
        role,
        includedDataKeys,
        ctx.me,
      );

      return ctx.prisma.createRole(role);
    },
    updateRole: (parent, { id, role }, ctx) => {
      const data = connectIncludedData(
        role,
        includedDataKeys,
        ctx.me,
      );

      return ctx.prisma.updateRole({ where: { id }, data: role });
    },
  }
};

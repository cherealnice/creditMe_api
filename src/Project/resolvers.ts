import { connectIncludedData } from '../helpers';

const includedDataKeys = ['project'];

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
  },
  Mutation: {
    createProject: (parent, { project }, ctx) => {
      const data = connectIncludedData(
        project,
        includedDataKeys,
        ctx.me,
      );

      return ctx.prisma.createProject(data);
    },
    updateProject: (parent, { id, project }, ctx) => {
      const data = connectIncludedData(
        project,
        includedDataKeys,
        ctx.me,
      );

      return ctx.prisma.createProject({
        where: { id },
        data,
      });
    }
  },
};

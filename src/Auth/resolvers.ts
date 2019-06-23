import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcryptjs';

export default {
  Mutation: {
    signup: async (parent, args, ctx, info) => {
      const salt = bcrypt.genSaltSync(10);
      const password = bcrypt.hashSync(args.password, salt);
      const user = await ctx.prisma.createUser({
        ...args,
        password,
      });

      const token = jwt.sign({ userId: user.id }, process.env.JWT_PRIVATE_KEY);

      return {
        token,
        user,
      };
    },

    login: async (parent, { email, password }, ctx, info) => {
      const user = await ctx.prisma.user({ email });

      if (!user) {
        throw new Error(`No such user found for email: ${email}`);
      }

      const isValid = await bcrypt.compare(password, user.password);

      if (!isValid) {
        throw new Error('Invalid password');
      }

      const token = jwt.sign({ userId: user.id }, process.env.JWT_PRIVATE_KEY);

      return {
        token,
        user,
      };
    },
  },
  AuthPayload: {
    user: async ({ user: { id } }, args, ctx, info) => (
      ctx.prisma.user({ id }, info)
    )
  }
};

import { isNotAuthenticated } from '../rules';

export default {
  Mutation: {
    signup: isNotAuthenticated,
    login: isNotAuthenticated,
  },
  AuthPayload: {
    user: isNotAuthenticated,
  }
};

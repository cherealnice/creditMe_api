import { isAuthenticated } from '../rules';

export default {
  Query: {
    credit: isAuthenticated,
    credits: isAuthenticated,
  },
  Credit: {
    project: isAuthenticated,
    role: isAuthenticated,
    user: isAuthenticated,
  }
};

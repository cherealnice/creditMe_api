import { isAuthenticated } from '../rules';

export default {
  Query: {
    me: isAuthenticated,
    user: isAuthenticated,
    users: isAuthenticated,
  },
  User: {
    credits: isAuthenticated,
    artists: isAuthenticated,
    roles: isAuthenticated,
  },
};

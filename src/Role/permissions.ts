import { isAuthenticated } from '../rules';

export default {
  Query: {
    role: isAuthenticated,
    roles: isAuthenticated,
  },
  Role: {
    users: isAuthenticated,
  }
};

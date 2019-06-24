import { isAuthenticated } from '../rules';

export default {
  Query: {
    project: isAuthenticated,
    projects: isAuthenticated,
  },
  Project: {
    artist: isAuthenticated,
    credits: isAuthenticated,
  }
};

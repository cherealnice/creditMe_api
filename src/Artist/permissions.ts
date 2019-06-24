import { isAuthenticated } from '../rules';

export default {
  Query: {
    artist: isAuthenticated,
    artists: isAuthenticated,
  },
  Artist: {
    projects: isAuthenticated,
    users: isAuthenticated,
    genre: isAuthenticated,
  }
};

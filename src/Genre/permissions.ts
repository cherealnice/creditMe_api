import { isAuthenticated } from '../rules';

export default {
  Query: {
    genre: isAuthenticated,
    genres: isAuthenticated,
  },
  Genre: {
    artists: isAuthenticated,
  }
};

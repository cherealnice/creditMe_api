export const isAuthenticated = (resolve, parent, args, ctx, info) => {
  if (!!ctx.me) {
    return resolve(parent, args, ctx, info);
  } else {
    throw(new Error('Not Authenticated'));
  }
};

export const isNotAuthenticated = (resolve, parent, args, ctx, info) => {
  if (!ctx.me) {
    return resolve(parent, args, ctx, info);
  } else {
    throw(new Error('You must not be logged in'));
  }
};

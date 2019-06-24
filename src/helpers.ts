export function connectIncludedData(data, refIds: string[], me: { id: string }) {
  const nextData = { ...data };

  refIds.forEach(key => {
    const idKey = `${key}Id`;
    if (nextData[idKey]) {
      if (Array.isArray(nextData[idKey])) {
        nextData[key] = nextData[idKey].map(id => ({
          connect: { id }
        }));
      } else {
        nextData[key] = { connect: { id: nextData[idKey] } };
      }
    }

    delete nextData[idKey];
  });

  if (refIds.includes('user')) {
    nextData.user = { connect: { id: me.id } };
  }

  if (refIds.includes('users')) {
    nextData.users = { connect: [{ id: me.id }] };
  }

  return nextData;
}


export const removeIds = <T extends object>(value: T) => {
  if ('_id' in value) {
    delete value._id;
  }
};

export const removeIdFromKeyArray = (keys: string[]) => {
  if (keys.indexOf('_id') >= 0) keys.splice(keys.indexOf('_id'), 1);
};

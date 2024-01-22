export const parseData = (value: FormDataEntryValue | null) => {
  if (typeof value === 'string') {
    return value;
  }
  return undefined;
};

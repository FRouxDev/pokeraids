import { isTruthyString } from '../validators/isTruthyString';

export const markRequired = (field: string | undefined): field is string => {
  return isTruthyString(field);
};

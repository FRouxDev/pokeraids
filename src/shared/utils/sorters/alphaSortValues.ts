import { removeAccents } from '$/lib/utils/removeAccent';
import type { SelectItem } from '$/shared/types/forms/select.types';

export const sortAlphaValues = (v1: SelectItem, v2: SelectItem) => {
  const supSort = 1;
  const infSort = -1;
  return removeAccents(v1.label) < removeAccents(v2.label) ? infSort : supSort;
};

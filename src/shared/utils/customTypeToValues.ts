import type { SelectItem } from '../types/forms/select.types';
import { sortAlphaValues } from './sorters/alphaSortValues';

export const customTypeListToValues = <T extends Record<string, unknown>>(
  itemsList: T[],
  labelKey: keyof T,
  valueKey: keyof T,
): SelectItem[] => {
  return itemsList
    .map((value) => {
      return {
        label: String(value[labelKey]),
        value: String(value[valueKey]),
      };
    })
    .sort(sortAlphaValues);
};

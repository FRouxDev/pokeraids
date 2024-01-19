import type { SelectItem } from '$/shared/types/forms/select.types';
import { Origin } from '$/shared/types/origin.type';
import { addEmptyValue } from './addEmptyValue';
import { sortAlphaValues } from './sorters/alphaSortValues';

export const originsToValues = (addEmpty: boolean = false): SelectItem[] => {
  const originsValues = Object.values(Origin);
  const sortedValues: SelectItem[] = originsValues
    .map((value) => {
      return {
        label: value,
        value,
      };
    })
    .sort(sortAlphaValues);

  return addEmpty ? addEmptyValue(sortedValues) : sortedValues;
};

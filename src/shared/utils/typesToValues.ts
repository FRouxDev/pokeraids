import type { SelectItem } from '../types/forms/select.types';
import { PokemonType } from '../types/pokemonType.type';
import { addEmptyValue } from './addEmptyValue';
import { sortAlphaValues } from './sorters/alphaSortValues';

export const typesToValues = (
  excludeStellar: boolean = false,
  addEmpty: boolean = false,
): SelectItem[] => {
  let typesValues = Object.values(PokemonType);
  if (excludeStellar) {
    typesValues = typesValues.filter((value) => value !== 'Stellaire');
  }

  const sortedValues: SelectItem[] = typesValues
    .map((value) => {
      return {
        label: value,
        value,
      };
    })
    .sort(sortAlphaValues);

  return addEmpty ? addEmptyValue(sortedValues) : sortedValues;
};

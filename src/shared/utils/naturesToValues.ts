import type { SelectItem } from '$/shared/types/forms/select.types';
import { PokemonNature } from '$/shared/types/pokemonNature.type';
import { addEmptyValue } from './addEmptyValue';
import { sortAlphaValues } from './sorters/alphaSortValues';

export const naturesToValues = (addEmpty: boolean = false): SelectItem[] => {
  const naturesValues = Object.values(PokemonNature);
  const sortedValues: SelectItem[] = naturesValues
    .map((value) => {
      return {
        label: value,
        value,
      };
    })
    .sort(sortAlphaValues);

  return addEmpty ? addEmptyValue(sortedValues) : sortedValues;
};

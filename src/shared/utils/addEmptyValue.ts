import type { SelectItem } from '$/shared/types/forms/select.types';

const EMPTY_ITEM: SelectItem = { label: '', value: '' };

export const addEmptyValue = (
  values: SelectItem[],
  position: 'beginning' | 'end' = 'beginning',
) => {
  return position === 'beginning' ? [EMPTY_ITEM, ...values] : [...values, EMPTY_ITEM];
};

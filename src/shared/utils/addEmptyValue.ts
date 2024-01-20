import type { SelectItem } from '$/shared/types/forms/select.types';

export const addEmptyValue = (values: SelectItem[], position: 'first' | 'last' = 'first') => {
  const emptyItem: SelectItem = { label: '', value: '' };
  return position === 'first' ? [emptyItem, ...values] : [...values, emptyItem];
};

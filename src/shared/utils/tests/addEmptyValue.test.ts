import type { SelectItem } from '$/shared/types/forms/select.types';
import { describe, expect, it } from 'vitest';
import { addEmptyValue } from '../addEmptyValue';

const EMPTY_ITEM: SelectItem = { label: '', value: '' };
const VALUES_ARRAY: SelectItem[] = [
  {
    label: 'Item 1',
    value: 'value 1',
  },
  {
    label: 'Item 2',
    value: 'value 2',
  },
  {
    label: 'Item 3',
    value: 'value 3',
  },
];

describe('addEmptyValue function', () => {
  it('should return array with a single empty item for empty array', () => {
    expect(addEmptyValue([])).to.deep.equal([EMPTY_ITEM]);
  });
  it('should return the given array with empty item at start if position is first', () => {
    expect(addEmptyValue(VALUES_ARRAY, 'first')).to.deep.equal([EMPTY_ITEM, ...VALUES_ARRAY]);
  });
  it('should return the given array with empty item at end if position is last', () => {
    expect(addEmptyValue(VALUES_ARRAY, 'last')).to.deep.equal([...VALUES_ARRAY, EMPTY_ITEM]);
  });
  it('should return the given array with empty item at start with default position', () => {
    expect(addEmptyValue(VALUES_ARRAY)).to.deep.equal([EMPTY_ITEM, ...VALUES_ARRAY]);
  });
});

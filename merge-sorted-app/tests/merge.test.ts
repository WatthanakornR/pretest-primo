import { merge } from '../src/merge';

describe('merge function', () => {
  test('should merge three sorted arrays correctly', () => {
    const col1 = [1, 3, 5];
    const col2 = [2, 4, 6];
    const col3 = [9, 7, 0]; // 0, 7, 9 when read backwards? No, "max to min". So 9, 7, 0 -> 0, 7, 9 ascending.

    // collection_3 is max to min. So [9, 7, 0] means 9 is max, 0 is min.
    // Reading from back (index length-1) gives 0, then 7, then 9.
    // Result should be 0, 1, 2, 3, 4, 5, 6, 7, 9.
    const result = merge(col1, col2, col3);
    expect(result).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 9]);
  });

  test('should handle empty arrays', () => {
    expect(merge([], [], [])).toEqual([]);
    expect(merge([1], [], [])).toEqual([1]);
    expect(merge([], [2], [])).toEqual([2]);
    expect(merge([], [], [3])).toEqual([3]);
  });

  test('should handle negative numbers', () => {
    const col1 = [-10, -5];
    const col2 = [-8, -2];
    const col3 = [0, -6]; // -6 is min, 0 is max. Sorted max to min.
    // Backwards: -6, 0.
    // Expected: -10, -8, -6, -5, -2, 0
    expect(merge(col1, col2, col3)).toEqual([-10, -8, -6, -5, -2, 0]);
  });

  test('should handle duplicates', () => {
    const col1 = [1, 1, 2];
    const col2 = [2, 3];
    const col3 = [1];
    // Expected: 1, 1, 1, 2, 2, 3
    expect(merge(col1, col2, col3)).toEqual([1, 1, 1, 2, 2, 3]);
  });
  
  test('should merge arrays of different lengths', () => {
      const col1 = [1, 2, 3, 4, 5];
      const col2 = [6, 7];
      const col3 = [8];
      expect(merge(col1, col2, col3)).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  });
});

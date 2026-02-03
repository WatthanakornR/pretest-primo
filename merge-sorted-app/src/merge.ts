export function merge(collection_1: number[], collection_2: number[], collection_3: number[]): number[] {
  const result: number[] = [];
  let i = 0; // Pointer for collection_1 (0 to max)
  let j = 0; // Pointer for collection_2 (0 to max)
  let k = collection_3.length - 1; // Pointer for collection_3 (max to 0)

  // Explicitly verifying input assumptions or handling input types is up to the caller based on the problem statement
  // verifying sorted nature is O(N) so we skip it to keep function optimal, assuming inputs are as guaranteed.

  while (i < collection_1.length || j < collection_2.length || k >= 0) {
    const val1 = i < collection_1.length ? collection_1[i] : Infinity;
    const val2 = j < collection_2.length ? collection_2[j] : Infinity;
    const val3 = k >= 0 ? collection_3[k] : Infinity;

    if (val1 <= val2 && val1 <= val3) {
      result.push(val1);
      i++;
    } else if (val2 <= val1 && val2 <= val3) {
      result.push(val2);
      j++;
    } else {
      result.push(val3);
      k--;
    }
  }

  return result;
}

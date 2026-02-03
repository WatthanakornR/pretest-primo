# Merge Sorted Array Project

This project implements a TypeScript function to merge two ascendingly sorted arrays and one descendingly sorted array into a single ascendingly sorted array.

## Setup

1.  **Prerequisites**: Ensure you have Node.js and npm installed.
2.  **Install Dependencies**:
    ```bash
    npm install
    ```

## Running Tests

To execute the unit tests using Jest:

```bash
npm test
```

## Project Structure

- `src/merge.ts`: Contains the `merge` function implementation.
- `tests/merge.test.ts`: Contains the unit tests.
- `jest.config.js`: Jest configuration.
- `tsconfig.json`: TypeScript configuration.
- `package.json`: Project manifest and scripts.

## Algorithm

The solution uses a three-pointer approach to merge the arrays in O(N) time complexity, where N is the total number of elements.

- `collection_1` and `collection_2` are iterated from the beginning (index 0).
- `collection_3` (sorted max to min) is iterated from the end (index `length - 1`) to simulate ascending order access.

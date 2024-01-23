import { NumberRange } from "../types";

/**
 * Checks if a value is within a specified range.
 * 
 * @param value - The value to check.
 * @param min - The minimum value of the range.
 * @param max - The maximum value of the range (optional).
 * @returns True if the value is within the range, false otherwise.
 */
export function checkWithinRange(value: number, min: number, max?: number) {
  return max !== undefined ? value >= min && value <= max : value >= min;
}

/**
 * Checks if two arrays are equal by comparing their lengths and values at each index.
 * 
 * @param arr1 The first array to compare.
 * @param arr2 The second array to compare.
 * @returns True if the arrays are equal, false otherwise.
 */
export function checkEqualArray(arr1: number[], arr2: number[]): boolean {
  return arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index]);
}

/**
 * Validates the dimensions of a matrix based on the provided ranges.
 * 
 * @param ranges - The ranges to validate against.
 * @throws Error if any value is not within its corresponding range.
 */
export function validateMatrixDimensions(...ranges: NumberRange[]): void {
  ranges.forEach((range: NumberRange) => {
    const correct = checkWithinRange(range.value, range.min, range.max);

    if (!correct) {
      throw new Error(`Value ${range.value} is not within range [${range.min}, ${range.max}]`);
    }
  });
}
import { NumberRange } from "./types";

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
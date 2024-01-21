import { NumberRange } from "./types";

/**
 * Checks if a value is within a specified range.
 * 
 * @param value - The value to check.
 * @param min - The minimum value of the range.
 * @param max - The maximum value of the range.
 * @returns True if the value is within the range, false otherwise.
 */
export function checkWithinRange(value: number, min: number, max: number) {
  return value >= min && value <= max
}

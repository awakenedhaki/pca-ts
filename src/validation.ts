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

/**
 * Validates the dimensions of a matrix.
 * 
 * @param row - The row dimension of the matrix.
 * @param column - The column dimension of the matrix.
 * @throws {Error} If either the row or column dimension is not within the specified range.
 */
export function validateMatrixDimensions(row: NumberRange, column: NumberRange) {
  const correctRow = checkWithinRange(row.value, row.min, row.max);
  const correctColumn = checkWithinRange(column.value, column.min, column.max);

  if (!correctRow && !correctColumn) {
    throw new Error(`Row value ${row.value} is not within range [${row.min}, ${row.max}] and column value ${column.value} is not within range [${column.min}, ${column.max}]`);
  }

  if (!correctRow) {
    throw new Error(`Row value ${row.value} is not within range [${row.min}, ${row.max}]`);
  }

  if (!correctColumn) {
    throw new Error(`Column value ${column.value} is not within range [${column.min}, ${column.max}]`);
  }
}
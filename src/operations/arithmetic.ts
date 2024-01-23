import Matrix from "../classes/matrix";
import { checkEqualArray } from "../utils/validation";

/**
 * Performs arithmetic operations on matrices.
 * 
 * @param operator - The arithmetic operator function to apply on the matrices.
 * @param matrices - The matrices to perform the arithmetic operation on.
 * @returns The resulting matrix after applying the arithmetic operation.
 * @throws Error if no matrices were provided or if the matrices have different sizes.
 */
function arithmeticHandler(operator: (a: number, b: number) => number, ...matrices: Matrix[]): Matrix {
    if (matrices.length === 0) {
        throw new Error("No matrices were provided.");
    }

    if (!matrices.every(matrix => checkEqualArray(matrix.shape, matrices[0].shape))) {
        throw new Error("Matrices must have the same dimensions.");
    }

    // Create a matrix of zeros to store the result
    const ncols: number = matrices[0].ncols;
    const nrows: number = matrices[0].nrows;
    const result: Matrix = new Matrix(nrows, ncols, Array(nrows * ncols).fill(0));

    // Apply the operator to each element in the matrices
    for (let row = 0; row < nrows; row++) {
        for (let col = 0; col < ncols; col++) {
            const values: number[] = matrices.map(matrix => matrix.get(row, col));
            result.set(row, col, values.reduce(operator));
        }
    }

    return result
}

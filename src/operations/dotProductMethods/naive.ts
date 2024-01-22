import Matrix from "../../classes/matrix";

/**
 * Calculates the dot product of two matrices using the naive method.
 * 
 * @param A - The first matrix.
 * @param B - The second matrix.
 * @returns The resulting matrix of the dot product.
 */
export default function naive(A: Matrix, B: Matrix): Matrix {
    const nrows: number = A.nrows;
    const ncols: number = B.ncols;

    // Create a matrix of zeros to store the result
    const data: number[] = Array(nrows * ncols).fill(0);
    const result: Matrix = new Matrix(nrows, ncols, data);

    // Iterate through the rows and columns of the result matrix
    for (let row = 0; row < nrows; row++) {
        for (let col = 0; col < ncols; col++) {
            // Calculate the dot product of the row of A and the column of B
            let sum: number = 0
            for (let i = 0; i < A.ncols; i++) {
                sum += A.get(row, i) * B.get(i, col);
            }
            // Set the value of the result matrix at the current row and column
            result.set(row, col, sum);
        }
    }
    
    return result;
}
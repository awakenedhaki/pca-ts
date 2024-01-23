import Matrix from "../../classes/matrix";
import naive from "./naive";
import { BlockMatrices } from "../../types";
import { add, subtract } from "../arithmetic";

/**
 * Performs matrix multiplication using the Strassen algorithm.
 * 
 * @param A - The first matrix.
 * @param B - The second matrix.
 * @returns The result of the matrix multiplication.
 */
export default function strassen(A: Matrix, B: Matrix): Matrix {
    if (A.isSquare() && B.isSquare() && A.size <= 4 && B.size <= 4) {
        return naive(A, B);
    }
    // Partition A and B into smaller matrices
    const [A11, A12, A21, A22]: BlockMatrices = partition(A);
    const [B11, B12, B21, B22]: BlockMatrices = partition(B);

    console.log(A11, A12, A21, A22);

    // Perform the seven multiplications, recursively using strassen
    const M1: Matrix = strassen(add(A11, A22), add(B11, B22));
    const M2: Matrix = strassen(add(A21, A22), B11);
    const M3: Matrix = strassen(A11, subtract(B12, B22));
    const M4: Matrix = strassen(A22, subtract(B21, B11));
    const M5: Matrix = strassen(add(A11, A12), B22);
    const M6: Matrix = strassen(subtract(A21, A11), add(B11, B12));
    const M7: Matrix = strassen(subtract(A12, A22), add(B21, B22));

    // Recombine the results to get the four quadrants of the result
    const C11: Matrix = subtract(add(M1, M4), add(M5, M7));
    const C12: Matrix = add(M3, M5);
    const C21: Matrix = add(M2, M4);
    const C22: Matrix = subtract(M1, add(M2, M3, M6));

    // Combine the quadrants to form the final result
    return Matrix.fromBlockMatrices(C11, C12, C21, C22);
}

/**
 * Partitions a matrix into four quadrants/submatrices/blocks.
 * 
 * @param matrix - The matrix to be partitioned.
 * @returns An array containing the four quadrants/submatrices/blocks.
 */
function partition(matrix: Matrix): BlockMatrices {
    const size: number = matrix.size;
    const blockSize: number = size * 0.5;

    // Create zero-filled arrays for the data
    const data: number[] = Array(blockSize).fill(0);

    // Create the four quadrants/submatrices/blocks
    const A11 = new Matrix(blockSize, blockSize, data.slice());
    const A12 = new Matrix(blockSize, blockSize, data.slice());
    const A21 = new Matrix(blockSize, blockSize, data.slice());
    const A22 = new Matrix(blockSize, blockSize, data.slice());

    // Set the values of the quadrants/submatrices/blocks
    for (let row = 0; row < blockSize; row++) {
        for (let col = 0; col < blockSize; col++) {
            A11.set(row, col, matrix.get(row, col));
            A12.set(row, col, matrix.get(row, col + blockSize));
            A21.set(row, col, matrix.get(row + blockSize, col));
            A22.set(row, col, matrix.get(row + blockSize, col + blockSize));
        }
    }

    return [A11, A12, A21, A22];
}
import Matrix from "../../classes/matrix";
import naive from "./naive";
import { BlockMatrices } from "../../types";
import { add, subtract } from "../arithmetic";

export default function strassen(A: Matrix, B: Matrix): Matrix {
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
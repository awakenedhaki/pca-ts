import Matrix from "../classes/matrix";

/**
 * Creates an identity matrix of the specified dimension using the provided MatrixConstructor.
 * 
 * @param dim The dimension of the identity matrix.
 * @param MatrixConstructor The constructor function for the matrix implementation.
 * @returns The identity matrix.
 */
export function createIdentityMatrix(dim: number): Matrix {
    const data: number[] = Array(dim * dim).fill(0);
    const matrix: Matrix = new Matrix(dim, dim, data);

    for (let i = 0; i < dim; i++) {
        matrix.set(i, i, 1);
    }

    return matrix;
}

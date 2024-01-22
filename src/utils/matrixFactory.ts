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

/**
 * Creates a Givens rotation matrix of the specified dimension.
 * 
 * @param dim - The dimension of the matrix.
 * @param i - The row index of the first element to be rotated.
 * @param j - The row index of the second element to be rotated.
 * @param theta - The angle of rotation in radians.
 * @returns The Givens rotation matrix.
 * @throws Error if the row index of the second element is greater than or equal to the row index of the first element.
 */
export function createGivensRotationMatrix(dim: number, i: number, j: number, theta: number): Matrix {
    if (i >= j) {
        throw new Error("The row index of the second element to be rotated must be less than the row index of the first element to be rotated.");
    }

    const matrix: Matrix = createIdentityMatrix(dim);

    const s: number = Math.sin(theta);
    const c: number = Math.cos(theta);

    matrix.set(i, i, c);
    matrix.set(i, j, s);
    matrix.set(j, j, c);
    matrix.set(j, i, -s);

    return matrix;
}

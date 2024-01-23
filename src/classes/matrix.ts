import { IMatrix } from "../interfaces";
import { checkWithinRange, validateMatrixDimensions } from "../utils/validation";

/**
 * Represents a matrix with basic operations.
 */
export default class Matrix implements IMatrix {
    readonly nrows: number;
    readonly ncols: number;
    data: number[];

    /**
     * Creates a new Matrix instance.
     * 
     * @param nrows The number of rows in the matrix.
     * @param ncols The number of columns in the matrix.
     * @param data An array containing the matrix data in row-major order.
     */
    constructor(nrows: number, ncols: number, data: number[]) {
        validateMatrixDimensions(
            { index: nrows, min: 1 }, 
            { index: ncols, min: 1 }
        )
        this.nrows = nrows;
        this.ncols = ncols;
        this.data = data;
    }

    /**
     * Returns the total number of elements in the matrix.
     * 
     * @returns The size of the matrix.
     */
    get size(): number {
        return this.nrows * this.ncols;
    }

    /**
     * Retrieves the value at the specified row and column in the matrix.
     * 
     * @param row - The row index.
     * @param col - The column index.
     * @returns The value at the specified row and column.
     */
    get(row: number, col: number): number {
        validateMatrixDimensions(
            { index: row, min: 0, max: this.nrows - 1 }, 
            { index: col, min: 0, max: this.ncols - 1 }
        );

        return this.data[row * this.ncols + col];
    }

    /**
     * Sets the value at the specified row and column in the matrix.
     * 
     * @param row - The row index.
     * @param col - The column index.
     * @param value - The value to set.
     */
    set(row: number, col: number, value: number): void {
        validateMatrixDimensions(
            { index: row, min: 0, max: this.nrows - 1 }, 
            { index: col, min: 0, max: this.ncols - 1 }
        );

        this.data[row * this.ncols + col] = value;
    }

    /**
     * Retrieves a specific row from the matrix.
     * 
     * @param row - The index of the row to retrieve.
     * @returns An array containing the elements of the specified row.
     */
    getRow(row: number): number[] {
        if (!checkWithinRange(row, 0, this.nrows - 1)) {
            throw new Error("Row index out of range");
        }

        const offset = row * this.ncols;
        return this.data.slice(offset, offset + this.ncols);
    }

    /**
     * Sets the values of a specific row in the matrix.
     * 
     * @param row - The index of the row to set.
     * @param array - An array of numbers representing the values to set in the row.
     */
    setRow(row: number, array: number[]): void {
        if (!checkWithinRange(row, 0, this.nrows - 1)) {
            throw new Error("Row index out of range");
        }

        const offset = row * this.ncols;
        this.data.splice(offset, this.ncols, ...array);
    }

    /**
     * Retrieves the values of a specific column in the matrix.
     * 
     * @param col - The index of the column to retrieve.
     * @returns An array containing the values of the specified column.
     */
    getCol(col: number): number[] {
        if (!checkWithinRange(col, 0, this.ncols - 1)) {
            throw new Error("Column index out of range");
        }

        const result = [];
        for (let i = 0; i < this.nrows; i++) {
            result.push(this.get(i, col));
        }
        return result;
    }

    /**
     * Sets the values of a specific column in the matrix.
     * 
     * @param col - The column index.
     * @param array - The array of values to set in the column.
     */
    setCol(col: number, array: number[]): void {
        if (!checkWithinRange(col, 0, this.ncols - 1)) {
            throw new Error("Column index out of range");
        }

        for (let i = 0; i < this.nrows; i++) {
            this.set(i, col, array[i]);
        }
    }

    /**
     * Returns an array containing the diagonal elements of the matrix.
     * 
     * @returns An array of numbers representing the diagonal elements.
     * @throws Error if the matrix is not square.
     */
    getDiag(): number[] {
        if (!this.isSquare()) {
            throw new Error("Matrix is not square");
        }

        const result = [];
        for (let i = 0; i < this.nrows; i++) {
            result.push(this.get(i, i));
        }
        return result;
    }

    /**
     * Applies the given function element-wise to each element in the matrix.
     * 
     * @param func - The function to apply to each element.
     */
    private elementWise(func: (x: number) => number): void {
        this.data = this.data.map(func);
    }

    /**
     * Multiplies each element of the matrix by a scalar value.
     * 
     * @param scalar - The scalar value to multiply each element by.
     * @returns The modified matrix with each element multiplied by the scalar value.
     */
    mul(scalar: number): Matrix {
        this.elementWise(x => x * scalar);
        return this;
    }

    /**
     * Checks if the matrix is square.
     * 
     * @returns {boolean} True if the matrix is square, false otherwise.
     */
    isSquare(): boolean {
        return this.nrows === this.ncols;
    }

    /**
     * Creates a deep copy of the matrix.
     * 
     * @returns A new Matrix object that is an exact copy of the original matrix.
     */
    clone(): Matrix {
        return new Matrix(this.nrows, this.ncols, this.data);
    }

    /**
     * Converts the matrix to a one-dimensional array.
     * 
     * @returns The one-dimensional array representation of the matrix.
     */
    to1DArray(): number[] {
        return this.data;
    }

    /**
     * Converts the matrix to a 2D array.
     * 
     * @returns {number[][]} The matrix as a 2D array.
     */
    to2DArray(): number[][] {
        const result = [];
        for (let i = 0; i < this.nrows; i++) {
            result.push(this.getRow(i));
        }
        return result;
    }

    /**
     * Creates a new Matrix instance from a 2D array.
     * 
     * @param arr - The 2D array to create the matrix from.
     * @returns A new Matrix instance.
     */
    static from2DArray(arr: number[][]): Matrix {
        const nrows = arr.length;
        const ncols = arr[0].length;
        const data = [];

        for (let row = 0; row < nrows; row++) {
            if (ncols !== arr[row].length) {
                throw new Error("Invalid matrix dimensions");
            }
            for (let col = 0; col < ncols; col++) {
                data.push(arr[row][col]);
            }
        }

        return new Matrix(nrows, ncols, data);
    }
}
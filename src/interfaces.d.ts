export interface IMatrix {
    // Properties
    nrows: number;
    ncols: number;
    size: number;
    data: number[];

    // Element-wise operations
    mul(scalar: number): IMatrix;

    // Getters
    get(row: number, col: number): number;
    getRow(row: number): number[];
    getCol(col: number): number[];
    getDiag(): number[];

    // Setters
    set(row: number, col: number, value: number): void;
    setRow(row: number, array: number[]): void;
    setCol(col: number, array: number[]): void;

    // Converters
    to1DArray(): number[];
    to2DArray(): number[][];

    // Checkers
    isSquare(): boolean;

    // Clone object
    clone(): IMatrix;
}
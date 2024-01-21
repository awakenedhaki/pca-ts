import Matrix from "../src/classes/matrix";
        
type MatrixTestCase = {
    rows: { [key: string]: number[] },
    cols: { [key: string]: number[] },
    newRow: number[],
    newCol: number[],
    diagonal: number[] | null,
    size: number,
    isSquare: boolean
}
        
const squareMatrix: MatrixTestCase = { 
    rows: {
        row1: [1, 2, 3], row2: [4, 5, 6], row3: [7, 8, 9],
    },
    cols: {
        col1: [1, 4, 7], col2: [2, 5, 8], col3: [3, 6, 9],
    },
    newRow: [10, 11, 12],
    newCol: [10, 11, 12],
    diagonal: [1, 5, 9],
    size: 9, 
    isSquare: true
}

const nonSquareMatrix: MatrixTestCase = { 
    rows: {
        row1: [1, 2], row2: [4, 5], row3: [7, 8]
    },
    cols: {
        col1: [1, 4, 7], col2: [2, 5, 8]
    },
    newRow: [10, 11],
    newCol: [10, 11, 12],
    diagonal: null,
    size: 6, 
    isSquare: false 
}

describe("Matrix", () => {
    let matrix: Matrix;

    test("from2DArray should return the correct Matrix", () => {
        const matrix = Matrix.from2DArray([
            [1, 2, 3],
            [4, 5, 6], 
            [7, 8, 9]
        ]);
        expect(matrix).toBeInstanceOf(Matrix);
        expect(matrix.getRow(0)).toEqual([1, 2, 3]);
        expect(matrix.getRow(1)).toEqual([4, 5, 6]);
        expect(matrix.getRow(2)).toEqual([7, 8, 9]);
    });

    test("clone should return a new Matrix with the same values", () => {
        const matrix = Matrix.from2DArray([
            [1, 2, 3],
            [4, 5, 6], 
            [7, 8, 9]
        ]);

        const clone = matrix.clone();

        expect(clone).toBeInstanceOf(Matrix);
        expect(clone).not.toBe(matrix);
        expect(clone.getRow(0)).toEqual(matrix.getRow(0));
        expect(clone.getRow(1)).toEqual(matrix.getRow(1));
        expect(clone.getRow(2)).toEqual(matrix.getRow(2));
    });

    describe("Invalid Matrix", () => {
        describe("Factory Method", () => {
            test("from2DArray should throw an error if the array is not rectangular", () => {
                expect(() => Matrix.from2DArray([
                    [1, 2, 3],
                    [4, 5], 
                    [7, 8, 9]
                ])).toThrow();
            });

            test("from2DArray should throw an error if the array is empty", () => {
                expect(() => Matrix.from2DArray([])).toThrow();
            });
        });
        
        describe.each([
            { arr: [[1, 2, 3], [4, 5, 6], [7, 8, 9]] },
            { arr: [[1, 2], [4, 5], [7, 8]] },
        ])("Getters and Setters", ({ arr }) => {
            beforeEach(() => {
                matrix = Matrix.from2DArray(arr);
            })

            describe("Getters", () => {
                test("get should throw an error if the row index is out of range", () => {
                    expect(() => matrix.get(-1, 0)).toThrow();
                    expect(() => matrix.get(3, 0)).toThrow();
                });

                test("get should throw an error if the column index is out of range", () => {
                    expect(() => matrix.get(0, -1)).toThrow();
                    expect(() => matrix.get(0, 3)).toThrow();
                });

                test("get should throw an error if the column and row index is out of range", () => {
                    expect(() => matrix.get(3, 3)).toThrow();
                    expect(() => matrix.get(-1, -1)).toThrow();
                });

                test("getRow should throw an error if the row index is out of range", () => {
                    expect(() => matrix.getRow(-1)).toThrow();
                    expect(() => matrix.getRow(3)).toThrow();
                });

                test("getCol should throw an error if the column index is out of range", () => {
                    expect(() => matrix.getCol(-1)).toThrow();
                    expect(() => matrix.getCol(3)).toThrow();
                });
            })

            describe("Setters", () => {
                test("setRow should throw an error if the row index is out of range", () => {
                    expect(() => matrix.setRow(-1, [1, 2, 3])).toThrow();
                    expect(() => matrix.setRow(3, [1, 2, 3])).toThrow();
                });

                test("setCol should throw an error if the column index is out of range", () => {
                    expect(() => matrix.setCol(-1, [1, 2, 3])).toThrow();
                    expect(() => matrix.setCol(3, [1, 2, 3])).toThrow();
                });

                test("set should throw an error if the row index is out of range", () => {
                    expect(() => matrix.set(-1, 0, 1)).toThrow();
                    expect(() => matrix.set(3, 0, 1)).toThrow();
                });

                test("set should throw an error if the column index is out of range", () => {
                    expect(() => matrix.set(0, -1, 1)).toThrow();
                    expect(() => matrix.set(0, 3, 1)).toThrow();
                });
            });
        });
    });

    describe.each([
        squareMatrix, nonSquareMatrix
    ])("Valid Matrix", ({ rows, cols, newRow, newCol, diagonal, size, isSquare }) => {
        beforeEach(() => {
            matrix = Matrix.from2DArray(Object.values(rows));
        });

        describe("Checkers", () => {
            test("isSquare should return true if the matrix is square", () => {
                expect(matrix.isSquare()).toEqual(isSquare);
            });
        });
    
        describe("Getters", () => {
            test("size should return the correct size", () => {
                expect(matrix.size).toEqual(size);
            });

            test("getRow should return the correct row", () => {
                const values: number[][] = Object.values(rows);
                for (let i = 0; i < values.length; i++) {
                    expect(matrix.getRow(i)).toEqual(values[i]);
                }
            });

            test("getCol should return the correct column", () => {
                const values: number[][] = Object.values(cols);
                for (let i = 0; i < values.length; i++) {
                    expect(matrix.getCol(i)).toEqual(values[i]);
                }
            });

            test("getDiagonal should return the correct diagonal", () => {
                if (isSquare) {
                    expect(matrix.getDiag()).toEqual(diagonal);
                } else {
                    expect(() => matrix.getDiag()).toThrow();
                }
            });
        });

        describe("Setters", () => {
            test("setRow should correctly set the values of a row", () => {
                matrix.setRow(1, newRow);
                expect(matrix.getRow(1)).toEqual(newRow);
            });

            test("setCol should correctly set the values of a column", () => {
                matrix.setCol(1, newCol);
                expect(matrix.getCol(1)).toEqual(newCol);
            });
        });

        describe("Operations", () => {
            test("mul should return ", () => {
                const prevMatrix = matrix.clone();
                matrix.mul(2);
                
                expect(matrix).toBeInstanceOf(Matrix);

                for (let i = 0; i < matrix.nrows; i++) {
                    for (let j = 0; j < matrix.ncols; j++) {
                        const value = prevMatrix.get(i, j) * 2;
                        expect(matrix.get(i, j)).toEqual(value);
                    }
                }
            });
        });

        describe("Converters", () => {
            test("to1DArray should return the correct 2D array", () => {
                const values: number[] = Object.values(rows).flat();
                expect(matrix.to1DArray()).toEqual(values);
            });

            test("to2DArray should return the correct 2D array", () => {
                const values: number[][] = Object.values(rows);
                expect(matrix.to2DArray()).toEqual(values);
            });
        });
    });
});
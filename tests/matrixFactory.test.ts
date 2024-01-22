import Matrix from "../src/classes/matrix";
import { createIdentityMatrix } from "../src/utils/matrixFactory";

describe("Matrix Factory", () => {
    describe("Valid Inputs", () => {
        describe("createIdentityMatrix", () => {
            test("should create a 3x3 identity matrix", () => {
                const dim: number = 3;
                const matrix: Matrix = createIdentityMatrix(dim);
                const expected: number[] = [
                    1, 0, 0,
                    0, 1, 0, 
                    0, 0, 1
                ];

                expect(matrix.to1DArray()).toEqual(expected);
            });
        });
    });
});
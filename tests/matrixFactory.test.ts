import Matrix from "../src/classes/matrix";
import { createIdentityMatrix, createGivensRotationMatrix } from "../src/utils/matrixFactory";

type GivensRotationMatrixTestCase = {
    dim: number,
    i: number,
    j: number,
    theta: number,
    expected: number[]
};

const givensRotationMatrix3D: GivensRotationMatrixTestCase = {
    dim: 3,
    i: 0,
    j: 1,
    theta: Math.PI / 2,
    expected: [
         0, 1, 0,
        -1, 0, 0,
         0, 0, 1
    ]
};

const givensRotationMatrix4D: GivensRotationMatrixTestCase = {
    dim: 4,
    i: 0,
    j: 3,
    theta: Math.PI,
    expected: [
        -1, 0, 0,  0,
         0, 1, 0,  0,
         0, 0, 1,  0,
         0, 0, 0, -1
    ]
};

const givensRotationMatrix5D: GivensRotationMatrixTestCase = {
    dim: 5,
    i: 1,
    j: 3,
    theta: Math.PI,
    expected: [
        1,  0, 0,  0, 0,
        0, -1, 0,  0, 0, 
        0,  0, 1,  0, 0,
        0,  0, 0, -1, 0,
        0,  0, 0,  0, 1
    ]
};

describe("Matrix Factory", () => {
    describe("Invalid Inputs", () => {
        describe("createGivensRotationMatrix", () => {
            test("should throw an error if the row index of the second element is greater than or equal to the row index of the first element", () => {
                const dim: number = 3;
                const i: number = 1;
                const j: number = 0;
                const theta: number = Math.PI;

                expect(() => createGivensRotationMatrix(dim, i, j, theta)).toThrow();
            });
        
            test("should throw an error if the row index of the second element is equal to the row index of the first element", () => {
                const dim: number = 3;
                const i: number = 1;
                const j: number = 1;
                const theta: number = Math.PI;

                expect(() => createGivensRotationMatrix(dim, i, j, theta)).toThrow();
            });
        });
    });

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

        describe.each([
            givensRotationMatrix3D, givensRotationMatrix4D, givensRotationMatrix5D
        ])("createGivensRotationMatrix", ({ dim, i, j, theta, expected }) => {
            test(`should create a ${dim}x${dim} Givens rotation matrix`, () => {
                const matrix: Matrix = createGivensRotationMatrix(dim, i, j, theta);
                matrix.to1DArray().forEach((value: number, index: number) => {
                    expect(value).toBeCloseTo(expected[index]);
                });
            });
        });
    });
});
import Matrix from "../src/classes/matrix";
import { add, subtract } from "../src/operations/arithmetic";

describe("Element-wise Arithmetic Operations", () => {
    let A: Matrix;
    let B: Matrix;

    describe.each([
        { dataA: [[1, 2, 3], [4, 5, 6]], dataB: [[7, 8], [9, 10]] },
        { dataA: [[7, 8], [9, 10]], dataB: [[1, 2, 3], [4, 5, 6]] },
    ])("Invalid Input", ({ dataA, dataB }) => {
        beforeEach(() => {
            A = Matrix.from2DArray(dataA);
            B = Matrix.from2DArray(dataB);
        });

        test("should throw an error", () => {
            expect(() => add(A, B)).toThrow();
            expect(() => subtract(A, B)).toThrow();
        });
    });

    describe("Valid Input", () => {
        describe.each([
            { dataA: [[1, 2, 3], [4, 5, 6]], dataB: [[7, 8, 9], [10, 11, 12]], dataC: [[8, 10, 12], [14, 16, 18]] },
            { dataA: [[7, 8, 9], [10, 11, 12]], dataB: [[1, 2, 3], [4, 5, 6]], dataC: [[8, 10, 12], [14, 16, 18]] },
        ])("Add", ({ dataA, dataB, dataC }) => {
            beforeEach(() => {
                A = Matrix.from2DArray(dataA);
                B = Matrix.from2DArray(dataB);
            });

            test("should add two matrices together", () => {
                expect(add(A, B).to2DArray()).toEqual(dataC);
            });
        });

        describe.each([
            { dataA: [[1, 2, 3], [4, 5, 6]], dataB: [[7, 8, 9], [10, 11, 12]], dataC: [[-6, -6, -6], [-6, -6, -6]] },
            { dataA: [[7, 8, 9], [10, 11, 12]], dataB: [[1, 2, 3], [4, 5, 6]], dataC: [[6, 6, 6], [6, 6, 6]] },
        ])("Subtract", ({ dataA, dataB, dataC }) => {
            beforeEach(() => {
                A = Matrix.from2DArray(dataA);
                B = Matrix.from2DArray(dataB);
            });

            test("should subtract one matrix from another", () => {
                expect(subtract(A, B).to2DArray()).toEqual(dataC);
            });
        });
    });
});

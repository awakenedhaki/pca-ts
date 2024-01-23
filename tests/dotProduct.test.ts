import Matrix from "../src/classes/matrix";
import dotProduct from "../src/operations/dotProduct";
import naive from "../src/operations/dotProductMethods/naive";
import strassen from "../src/operations/dotProductMethods/strassen";

describe("dot product", () => {
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

        test("dotProduct", () => {
            expect(() => dotProduct(A, B)).toThrow();
        });
    });

    describe("Valid Input", () => {
        let A: Matrix;
        let B: Matrix;

        describe.each([
            { dataA: [[1, 2, 3], [4, 5, 6]], dataB: [[7, 8], [9, 10], [11, 12]], dataC: [[58, 64], [139, 154]] },
            { dataA: [[7, 8], [9, 10], [11, 12]], dataB: [[1, 2, 3], [4, 5, 6]], dataC: [[39, 54, 69], [49, 68, 87], [59, 82, 105]] },
        ])("Non-square Matrices", ({ dataA, dataB, dataC }) => {
            beforeEach(() => {
                A = Matrix.from2DArray(dataA);
                B = Matrix.from2DArray(dataB);
            });

            test("naive", () => {
                expect(naive(A, B).to2DArray()).toEqual(dataC);
            });

            test.skip.failing("strassen", () => {
                expect(strassen(A, B).to2DArray()).toEqual(dataC);
            });
        });
    
        describe.each([
            { dataA: [[1, 2], [3, 4]], dataB: [[5, 6], [7, 8]], dataC: [[19, 22], [43, 50]] },
        ])("Square Matrices", ({ dataA, dataB, dataC }) => {
            beforeEach(() => {
                A = Matrix.from2DArray(dataA);
                B = Matrix.from2DArray(dataB);
            });

            test("naive", () => {
                expect(naive(A, B).to2DArray()).toEqual(dataC);
            });

            test("strassen", () => {
                expect(strassen(A, B).to2DArray()).toEqual(dataC);
            });
        });
    });
});
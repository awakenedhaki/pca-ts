import Matrix from "../src/classes/matrix";
import dotProduct from "../src/operations/dotProduct";
import naive from "../src/operations/dotProductMethods/naive";

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
});
import Matrix from "../classes/matrix";
import naive from "./dotProductMethods/naive";
import strassen from "./dotProductMethods/strassen";
import { DotProductMethod } from "../types";

export default function dot(A: Matrix, B: Matrix, method: DotProductMethod = "naive"): Matrix {
    if (A.nrows !== B.ncols) {
        throw new Error("Matrices are not compatible for dot product");
    }

    switch (method) {
        case "naive":
            return naive(A, B);
        case "strassen":
            return strassen(A, B);
    }
}
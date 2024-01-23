import Matrix from "../classes/matrix";
import { EigenDecompositionMethod } from "../types";

export default function eigen(A: Matrix, method: EigenDecompositionMethod = "jacobi"): Matrix {
    switch (method) {
        case "jacobi":
            throw new Error("Not implemented");
        case "qr":
            throw new Error("Not implemented");
    }
}
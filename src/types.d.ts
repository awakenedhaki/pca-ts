export type IndexRange = {
  index: number,
  min: number,
  max?: number
}

export type DotProductMethod = "naive" | "strassen";

export type EigenDecompositionMethod = "jacobi" | "qr";

export type BlockMatrices = [Matrix, Matrix, Matrix, Matrix];
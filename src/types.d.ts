export type IndexRange = {
  index: number,
  min: number,
  max?: number
}

export type DotProductMethod = "naive" | "strassen";

export type BlockMatrices = [Matrix, Matrix, Matrix, Matrix];

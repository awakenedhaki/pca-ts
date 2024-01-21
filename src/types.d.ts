export type NumberRange = {
  value: number,
  min: number,
  max: number
}

export type MatrixConstructorSignature = new (nrows: number, ncols: number, data: number[]) => IMatrix;

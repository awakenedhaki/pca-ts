# Principal Component Analysis in TypeScript

## Objective

To develop a TypeScript implementation of the Prinicipal Component Analysis (PCA) dimensionality reduction technique.

The scope of this PCA implementation is not serious data analytics. The library is intended as a pedagological exercise on version control, unit testing, TypeScript, and implementation of algorithms used to solve linear algebra problems.

## Key Features

1. Data Input Handling
2. PCA Computation
   1. Covariance Matrix Calculation
   2. Eigen Decomposition
3. Principal Component Visualization

## Limitations

The PCA library is not intended for use in data analytics projects. Optimizations will be introduced when the author find merit. However, it will not be the primary focus of this project. For example, there will be no distinct implementation for dense and sparse matrices. Therefore, the representation of a Matrix in this library will not be memory efficient. Moreover, this will lead to the Matrix class and Matrix Factory to be coupled. However, this is not a concern since maintenance of this project beyond a successful visualization of the Iris Flower Dataset will be minimal.

## License

See the LICENSE file for license rights and limitations (MIT).


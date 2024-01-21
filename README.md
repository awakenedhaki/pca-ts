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

## TODO

- [x] Initialize a git repository
- [x] Install development dependencies
  - [x] TypeScript
  - [x] Jest
- [ ] Feature: Data Input Handling
  - [ ] Define test suite
  - [ ] Read CSV file as 2D array
- [x] Feature: Matrix Class
  - [x] Define Matrix interface
  - [x] Implement Matrix Class
    - [x] Define test suite
    - [x] Add setters and getters for:
      - [x] Rows
      - [x] Columns
      - [x] Diagonal
      - [x] Elements
    - [x] Add element-wise operations handling
    - [x] Add converters
      - [x] 1D array
      - [x] 2D array
    - [x] Add clone method
- [ ] Feature: Matrix Factory
  - [ ] Define test suite
  - [ ] Generate Identity matrix
  - [ ] Generate square matrix
  - [ ] Generate Givens rotation matrix
  - [ ] Generate matrix from 2D array
- [ ] Feature: Matrix Operations
  - [ ] Define test suite
  - [ ] Implement naive iterative algorithm
  - [ ] Implement Strassen's algorithm
- [ ] Feature: Eigenvalue Decomposition
  - [ ] Define test suite
  - [ ] Implement Jacobi eigenvalue algorithm
- [ ] Feature: Covariance Matrix Calculation
  - [ ] Define test suite
  - [ ] Calculate covariance from 2D array
- [ ] Feature: Visualize Principal Components
  - [ ] Define test suite
  - [ ] Generate a Scree plot
  - [ ] Generate PC1 vs PC2 scatter plot

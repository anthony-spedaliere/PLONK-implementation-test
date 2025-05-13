# Circom Password Hash

A project that implements two circuits using a single PLONK trusted setup.

## Project Structure

- `zk-proof/`: Contains the Circom circuits and proof generation code
- `hardhat-project/`: Contains the Ethereum smart contracts and testing infrastructure

## Circuits

The project implements two circuits:

1. **Three-Factor Multiplication Circuit** (`1_circuit/threeFactorization.circom`):

   - Takes three input signals (x1, x2, x3)
   - Multiplies them together in sequence
   - Outputs the final product (x4)
   - Demonstrates basic arithmetic operations in Circom

2. **Membership Circuit** (`2_circuit/membership.circom`):
   - Currently in development
   - Will be used to verify membership in a set

## Getting Started

More details coming soon.

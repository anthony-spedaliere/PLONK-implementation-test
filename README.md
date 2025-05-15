# Circom PLONK Implementation Test

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

2. **Membership Circuit** (`2_circuit/MembershipInclusion.circom`):

The `MembershipInclusion.circom` circuit allows users to prove they are members of a group without revealing their identity. It uses Ethereum addresses as member identifiers and combines them with a private salt in a Merkle tree structure to create an efficient and privacy-preserving membership system.

## Getting Started

More details coming soon.

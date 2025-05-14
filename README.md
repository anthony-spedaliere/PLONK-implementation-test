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

The `MembershipInclusion.circom` circuit allows users to prove they are members of a group without revealing their password or identity. It combines password hashing with Merkle tree verification to create an efficient and privacy-preserving membership system.

## How It Works

### Circuit Components

The circuit takes the following inputs:

#### Public Inputs

- `root`: The Merkle root of all member hashes
- `salt`: A group-wide salt value used for password hashing

#### Private Inputs

- `password`: The member's password (kept secret)
- `pathElements[32]`: Merkle proof path elements
- `pathIndices[32]`: Merkle proof path indices

### Verification Process

1. **Password Hashing**

   - The circuit combines the password with the group salt
   - Uses Poseidon hash function to compute the member's hash
   - This hash should match one of the leaves in the Merkle tree

2. **Merkle Proof Verification**

   - Uses a 32-level Merkle tree (supports up to 2^32 members)
   - Verifies that the computed hash exists in the tree
   - Uses path elements and indices to reconstruct the path to the root
   - Confirms the reconstructed root matches the provided root

3. **Output**
   - The circuit will only generate a valid proof if all constraints are satisfied
   - No explicit output signal is needed as the proof itself serves as verification

## Usage

### Setting Up a Group

1. Choose a group salt value
2. For each member:
   - Hash their password with the group salt using Poseidon
   - Add the hash to the Merkle tree
3. Publish the Merkle root and salt

### Proving Membership

To prove membership, a user needs to provide:

1. Their password (private)
2. A Merkle proof showing their hash is in the tree (private)
3. The group's Merkle root and salt (public)

The circuit will verify:

- The password hashes to a value in the tree
- The Merkle proof is valid
- The proof leads to the correct root

## Security Features

- **Zero-Knowledge**: The proof doesn't reveal the password or which member is proving membership
- **Efficient**: Verification is logarithmic in the number of members
- **Scalable**: Can handle large groups (up to 2^32 members)
- **Privacy-Preserving**: Members can prove membership without revealing their identity

## Technical Details

### Merkle Tree Structure

- 32 levels deep
- Each level can hold 2^n nodes
- Total capacity: 2^32 members
- Uses binary tree structure for efficient verification

### Hash Function

- Uses Poseidon hash function
- Combines password with group salt
- Provides efficient zero-knowledge friendly hashing

## Getting Started

More details coming soon.

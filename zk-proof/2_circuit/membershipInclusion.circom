pragma circom 2.2.2;

include "circomlib/circuits/poseidon.circom";

/**
 * @title membershipInclusion
 * @notice Proves membership in a group by demonstrating knowledge of a password that hashes to a value in the group's merkle tree
 * @dev Uses Poseidon hash for password hashing and Merkle tree for efficient membership verification
 */

template membershipInclusion(depth) {
    signal input leaf;
    signal input root;
    signal input pathElements[depth]; // sibling hashes
    signal input pathIndices[depth];  // 0 = left, 1 = right

    signal cur = leaf;

    for (var i = 0; i < depth; i++) {
        signal left;
        signal right;

        left  <== pathIndices[i] * pathElements[i] + (1 - pathIndices[i]) * cur;
        right <== pathIndices[i] * cur + (1 - pathIndices[i]) * pathElements[i];

        cur <== Poseidon([left, right]);
    }

    root === cur;
}

/**
 * @notice An instance of the membershipInclusion circuit
 * @dev Public signals are the merkle root
 */
component main {public [root]} = membershipInclusion(4); 
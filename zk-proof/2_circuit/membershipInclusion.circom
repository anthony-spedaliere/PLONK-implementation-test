pragma circom 2.2.2;

include "circomlib/circuits/poseidon.circom";
include "circomlib/circuits/merkleTree.circom";

/**
 * @title membershipInclusion
 * @notice Proves membership in a group by demonstrating knowledge of a password that hashes to a value in the group's merkle tree
 * @dev Uses Poseidon hash for password hashing and Merkle tree for efficient membership verification
 */

template MembershipInclusion() {
    // Public inputs
    signal input root;  // Merkle root of all member hashes
    signal input salt;  // Group salt
    
    // Private inputs
    signal input password;  // Member's password
    signal input pathElements[32];  // Merkle path elements
    signal input pathIndices[32];   // Merkle path indices
    
    // Compute the hash of the password + salt
    signal salted;
    salted <== password + salt;
    
    signal computedHash;
    computedHash <== Poseidon(1)([salted]);
    
    // Verify the computed hash is in the merkle tree
    component merkleProof = MerkleTreeInclusionProof(32);
    merkleProof.leaf <== computedHash;
    merkleProof.root <== root;
    
    for (var i = 0; i < 32; i++) {
        merkleProof.pathElements[i] <== pathElements[i];
        merkleProof.pathIndices[i] <== pathIndices[i];
    }

}

/**
 * @notice An instance of the membershipInclusion circuit
 * @dev Public signals are the merkle root and salt
 */
component main {public [root, salt]} = membershipInclusion(); 
/**
 * @title Proof Verification Script
 * @author Anthony Spedaliere
 * @notice Script to verify a ZK proof using the deployed PlonkVerifier contract from Verifier_c2.sol
 * @dev Uses proof data from snarkjs generatecall to verify a proof on-chain
 */

const { ethers } = require("hardhat");

async function main() {
  // Get the deployed verifier contract address
  // Replace with your actual deployed contract address after deployment
  const VERIFIER_ADDRESS = "0x1cedd41EC744e4EDD0CA091A33Ac837cC62cB038";

  // Get the verifier contract instance
  const verifier = await ethers.getContractAt(
    "contracts/Verifier_c2.sol:PlonkVerifier",
    VERIFIER_ADDRESS
  );

  console.log("Calling verifyProof on contract:", VERIFIER_ADDRESS);

  // Proof data from snarkjs generatecall
  const proofInputs = [
    "0x07f66eabd827e00c838bc21f2e454e94040295c7b122ba0e0a4867606fe1a10e",
    "0x13286df7350e8fdb347cf5ee576323b345cbcb053cc0a54b72a99f3638806f15",
    "0x23943ddadb512d5ae277823e81077eff528344064e643d362ce0ea8be703c987",
    "0x2ab797ce37e9455db52bd02c447342f5fd827a7f6f36705018571702609d838d",
    "0x1101b380ecc6c5e257090ef301da16aa958030ee82a59cdea96598155383e9dd",
    "0x2d08c1ccc22a60b79a9e566688d1c7f5103a0311bd259410240ac854ce56f0fd",
    "0x1dd07ff1562e3601ba68cf5c1e172d0f8be4eecc5f4c5b6a8f713a5fa1100399",
    "0x08aac4342f74df3e2676c272eedba322668dd38cfcbcc98de42502f84bca0901",
    "0x2d554ebc81289d7d8206519b00c433a1b0f995b088133b3afa48e0c5f5b17c93",
    "0x04c3f11aeac82584a0494b8d7b01c1a34f6e4913b54b75d5efe64ebf960e1c01",
    "0x22563a6cf56e9ee9cf90c5cde019efa9d21ed699b95f6c4966983889d252af0e",
    "0x1807990614c3202e0358434d33b309dba671816afe2e5907ecb03eca2af6e475",
    "0x24c23b668140ae8512524298974d2abecc064c823265e94ca951600b58a65351",
    "0x2b7fdf031c59d2ce7ef8cb6ea6f3af18151870c0657c848977083af45a7e9352",
    "0x03ba0c1068cd3f6fb9c557256ffece6156db7e69b82f9a9e513d2b1ce43eded1",
    "0x01d68146d332e0ffdcef01585e76e05b843bfc61438b3fca6187f6afe90b15b2",
    "0x1e7a76f7a4f9f41f52f97a764c5958342b3d33f1aa291c7ce75806a69fffe173",
    "0x19deaeb75224ef1bc79ba67d72dea2c4129276efc0c6116ef4c9754aa22f84d2",
    "0x0d03b27769bea0f16a9a6a61bd35a07955fe74bee13a36dacbb786bfdb726706",
    "0x16b6e60aa3718bf57ac16be848f4406ee558cc9d616b8ee6515ab89ffd2d206e",
    "0x24eefbc9ca3a34bbf9e24d508ac5fdba81243f579beece55bae8141c4bc8ece6",
    "0x04624231ac5cd11b1143adf5b4b17c7f6ab67af381372c027868e1578e8b9829",
    "0x26dd853e8f3aa3d16ef386b6f78d16371273c2b53597e90fb3c4c31dc8b36ac4",
    "0x300c0a240d38d4fdb63221f6cd5d899fad9e9c4f4bc5a59bc31a89c76cf8271d",
  ];

  const publicInputs = [
    "0x0000000000000000000000000000000000000000000000000000000000000001",
    "0x1a37baa8fbeaec4ea12d2207c20faece2531fcf10eeb8923554b7c1237dd2c34",
  ];

  // Call verifyProof function
  console.log("Verifying proof...");
  const result = await verifier.verifyProof(proofInputs, publicInputs);

  console.log("Proof verification result:", result);

  if (result) {
    console.log("✅ Proof is valid!");
  } else {
    console.log("❌ Proof is invalid!");
  }

  return result;
}

// Execute the verification
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

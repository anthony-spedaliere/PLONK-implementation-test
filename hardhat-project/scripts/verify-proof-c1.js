/**
 * @title Proof Verification Script
 * @author Anthony Spedaliere
 * @notice Script to verify a ZK proof using the deployed PlonkVerifier contract from Verifier_c1.sol
 * @dev Uses proof data from snarkjs generatecall to verify a proof on-chain
 */

const { ethers } = require("hardhat");

async function main() {
  // Get the deployed verifier contract address
  // Replace with your actual deployed contract address after deployment
  const VERIFIER_ADDRESS = "0x0aE7d2b274f88584211335B8Ee226a8B68341352";

  // Get the verifier contract instance
  const verifier = await ethers.getContractAt(
    "contracts/Verifier_c1.sol:PlonkVerifier",
    VERIFIER_ADDRESS
  );

  console.log("Calling verifyProof on contract:", VERIFIER_ADDRESS);

  // Proof data from snarkjs generatecall
  const proofInputs = [
    "0x11f903b452fb2f836529ed8f7fe00b7fae07d44bb002193075d36bbedf7814d5",
    "0x152df1abbf7442480dafc104298e80af890d0772dc42e85a3bd465ef70ab54a9",
    "0x29adaf75f596d86aa86d7d75d26295d5e5350bc0e3ae4004575acf0d76265709",
    "0x1f34326a4ec450d2ae02904bb6e1b6a8c886f84b64461493cbeded6387dcca71",
    "0x02953e468dcb7b885e88064fdee76fda3b4f3d69a3849b16b5f492f77ab14bac",
    "0x2dbc7063286a89ac27fcdca3c41b5e28b2f15179d4fc432d3d6984334dd11e2a",
    "0x2cff9e2d1ed9f92038b0cade061c2f4094c5bdbe55591a0c2a1f7e0aabfd7cc0",
    "0x01609ca0a7ba8440f69f618c78e7c5a09fcce48a18c25c3a77e5799641d8fa90",
    "0x0617db894102576fe6a531954c3b68d0970cef887210eaaf0b698a5fe8f13a85",
    "0x2864459d18e4c058d0f075147080884fa9e2e8ff93045ce8f1f3240f8285afed",
    "0x192e437fc8066ad0c7d9f2990ee3056b621e813465e359a70553aab2a50b8c1e",
    "0x266f04570bce70f69c85578a744343e63b4cdfcef33d41ab2eef0d71adc2a0af",
    "0x1b992ae113782c7ab2dcc739effa6975aaf5463fbd443aca058c59b96033498b",
    "0x034d0ae74e166cee988529c5a3c923667983772ac7d8d4c38af1f01666fd0501",
    "0x028a7818496c1a4c25189cb573e0b34dab9ac8ed85e0d3d828bf46e8756681be",
    "0x261caffee20d2b2a532680a843c267e4b64e55bd2371df338a5025fc7f833810",
    "0x1c4d01b34665417295801fde2b1c6e2e185e8096e25f78d50524a69aebab367a",
    "0x0a9f84c7ac7f0ce141fd8b8b6d597d9b35d3e2b8a3de01df72a0a38fe7adf329",
    "0x1ac159e0557032e155f43ae11cb1ffa99d5d901e9511f145d851506b7dfc566e",
    "0x02abc68e52442fccf9806de812883ff647f1d22abb8e51427bedaa6c779b71da",
    "0x1e6f422576e67ceffeeed835f2f3ecaabcf966acc7b1204b08dd1e5ad82b5a50",
    "0x241338f050f6ee0b4e1699f690f681b7c9bdf7bc4012951f509a0a4ced7edbd0",
    "0x1e80ea020d8e7d3ff02f6b3e81e1309dca0b225e9a9fc1223a1081fd22bdc86d",
    "0x1d67d314dfd7631238ec77a3e00626228287c8d073aad3f33f97570c5daf6067",
  ];

  const publicInputs = [
    "0x1516fc71ee3e06fc2427ce8f605c17df03e07fde78602138764a42dbf8ae0cd3",
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

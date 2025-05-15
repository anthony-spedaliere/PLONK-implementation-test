/**
 * @title Verifier Ignition Module
 * @author Anthony Spedaliere
 * @notice Ignition module for deploying Verifier_c2.sol
 * @dev This module deploys the verifier contract that validates zk-SNARK proofs
 */

const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("VerifierModule_c2", (m) => {
  const verifier_c2 = m.contract(
    "contracts/Verifier_c2.sol:PlonkVerifier",
    [],
    {
      id: "PlonkVerifier_c2",
    }
  );

  return {
    verifier_c2,
  };
});

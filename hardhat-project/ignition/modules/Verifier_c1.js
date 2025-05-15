/**
 * @title Verifier Ignition Module
 * @author Anthony Spedaliere
 * @notice Ignition module for deploying Verifier_c1.sol
 * @dev This module deploys the verifier contract that validates zk-SNARK proofs
 */

const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("VerifierModule_c1", (m) => {
  const verifier_c1 = m.contract(
    "contracts/Verifier_c1.sol:PlonkVerifier",
    [],
    {
      id: "PlonkVerifier_c1",
    }
  );

  return {
    verifier_c1,
  };
});

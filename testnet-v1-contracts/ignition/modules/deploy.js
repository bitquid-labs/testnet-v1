const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

const OWNER = "0x47C14E2dD82B7Cf0E7426c991225417e4C40Cd19";
const ALT_TOKEN = "0x73795572FB8c1c737513156ecb8b1Cc9a3f9cA46";
const poolCanister = "0xf82C74E583A8F30eB6ed708d735240bFfD95487D";

module.exports = buildModule("DeployInsurance", (m) => {
  const bqBTC = m.contract("bqBTC", [
    "BQ BTC",
    "bqBTC",
    18,
    "200000000000000",
    OWNER,
    ALT_TOKEN,
    100,
  ]);

  const insurancePool = m.contract("InsurancePool", [OWNER, bqBTC]);

  const insuranceCover = m.contract("InsuranceCover", [
    insurancePool,
    OWNER,
    bqBTC,
  ]);

  const vaults = m.contract("Vaults", [OWNER, bqBTC]);

  // Setting relationships
  m.call(insurancePool, "setCover", [insuranceCover]);
  m.call(insurancePool, "setVault", [vaults]);
  m.call(insurancePool, "setPoolCanister", [poolCanister]);

  m.call(vaults, "setCover", [insuranceCover]);
  m.call(vaults, "setPool", [insurancePool]);
  m.call(vaults, "setPoolCanister", [poolCanister]);

  m.call(bqBTC, "setContracts", [insurancePool, insuranceCover, vaults]);

  return { bqBTC, insurancePool, insuranceCover, vaults };
});

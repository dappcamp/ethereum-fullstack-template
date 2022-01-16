/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

// Possible network values
const LOCAL_NETWORK = "LOCAL_NETWORK"
const TEST_NETWORK = "TEST_NETWORK"

// By default network is set to local, change it to TEST_NETWORK either in code or by environment variable
const NETWORK = process.env?.NETWORK || LOCAL_NETWORK

// ALCHEMY_API_KEY is the complete alchemy http url
const ALCHEMY_API_KEY = process.env.ALCHEMY_API_KEY;
const WALLET_PRIVATE_KEY = process.env.WALLET_PRIVATE_KEY;

let networks = {};
if (NETWORK == LOCAL_NETWORK) {
  networks = {
    hardhat: {
      chainId: 1337
    }
  }
}
else if (NETWORK == TEST_NETWORK) {
  networks = {
    test_network: {
      url: ALCHEMY_API_KEY,
      accounts: [WALLET_PRIVATE_KEY]
    }
  }
}

module.exports = {
  solidity: "0.8.0",
  networks: networks
};

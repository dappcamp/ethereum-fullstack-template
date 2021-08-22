/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

const INFURA_API_KEY = process.env.YOUR_INFURA_API_KEY;
const WALLET_PRIVATE_KEY = process.env.WALLET_PRIVATE_KEY;

module.exports = {
  solidity: "0.8.0",
  networks: {
    test_network: {
      url: `https://rinkeby.infura.io/v3/${INFURA_API_KEY}`,
      accounts: [`0x${WALLET_PRIVATE_KEY}`]
    }
  }
};

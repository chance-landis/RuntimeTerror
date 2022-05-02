/**
* @type import('hardhat/config').HardhatUserConfig
*/
require('dotenv').config();
require("@nomiclabs/hardhat-ethers");
// const { API_URL, PRIVATE_KEY } = process.env;
const API_URL="https://eth-ropsten.alchemyapi.io/v2/lFCo02KeH5C84PkvTGAx5xFQ-G1B_bNn"
const PRIVATE_KEY="cd9e5106abe9a20e1d4958326cf13a48b2dcd40b1c6468267e3eed78a9c7098e"
module.exports = {
   solidity: "0.8.1",
   defaultNetwork: "ropsten",
   networks: {
      hardhat: {},
      ropsten: {
         url: API_URL,
         accounts: [`0x${PRIVATE_KEY}`]
      }
   },
}
# Ethereum Fullstack Template

This branch contains a smart contract and the React app for it to build a NFT collection.

The React App has two pages. Home and Mint.  
Home page lists all the NFTs in your collection where other users can view and purchase the listed NFTs.  
Mint page (visible only to the contract owner) can be used to mint new NFTs by specifying the required details.

## Quick Start (with local blockchain)

1. Install dependencies

 ```
 npm install

 ```

2. Run local blockchain

 ```bash
 npx hardhat node
 ```

3. Deploy your smart contract to the local blockchain

  ```bash
  npx hardhat run .\scripts\deploy.js --network localhost
  ```

4. Run the React app 

  ```bash
  npm run start
  ```
  
Visit the React app at localhost:3000  
  
If you're the owner. Go to the Mint page to mint a new NFT. Specify the tokenURI and the price and click on the Mint button.  

Sample tokenURI which you can use for testing: https://gateway.pinata.cloud/ipfs/QmPfxgzvJmXD2UbB1Yvhf1QLm1y89AdfWwGFPbZsdj9yKf.


## What’s Included?

Your environment will have following set up:

- A sample frontend: Sample application which uses [Create React App](https://github.com/facebook/create-react-app)
- [Hardhat](https://hardhat.org/): An Ethereum development task runner and testing network.
- [Mocha](https://mochajs.org/): A JavaScript test runner.
- [Chai](https://www.chaijs.com/): A JavaScript assertion library.
- [ethers.js](https://docs.ethers.io/ethers.js/html/): A JavaScript library for interacting with Ethereum.
- [Waffle](https://github.com/EthWorks/Waffle/): To have Ethereum-specific Chai assertions/mathers.

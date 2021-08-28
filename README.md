# Ethereum Fullstack Template

This repository contains a `create-react-app` template that can be used to develop an ethereum dApp.

## Quick Start

1. Install [Create-React-App](https://reactjs.org/docs/create-a-new-react-app.html) package

   ```bash
   $ npm install -g create-react-app
   ```

2. Create a project using this template

   ```bash
   $ create-react-app project-name --template ethereum-fullstack
   ```

3. Switching to test network (RINKEBY) (Optional)

   - Please skip this step if you want to use local network
   - Change line - `const NETWORK = LOCAL_NETWORK` to `const NETWORK = TEST_NETWORK` in `hardhat.config.js`
   - Replace `YOUR_ALCHEMY_API_KEY` with your api key from alchemy in `.env` file
   - Replace `YOUR_WALLET_PRIVATE_KEY` with your wallet's private key from metamask wallet in `.env` file

4. Running test for sample contract

   ```bash
   npx hardhat test
   ```

## Running your app locally

1. Start your react frontend

   ```bash
   npm start
   ```

2. Start a hardhat node

   ```bash
   npx hardhat node
   ```

3. Connect hardhat node to Metamask

   Open Metamask > Select the network dropdown from the top left > Select `Custom RPC` and enter the following details:

   - Network Name: `<Enter a name for the network>`
   - New RPC URL: `http://127.0.0.1:8545`
   - Chain ID: `31337`

   Click save. You can use this network to connect to the local hardhat node.

4. Connect your local hardhat account to Metamask for making transactions
   - After running `npx hardhat node` you will see a list of 20 addresses logged in the terminal
   - To configure an account copy its private key from the terminal (i.e the text after `Private Key:`)
   - Open Metamask > Click the account icon on top right > Import Account > Paste the private key you just copied > click Import
   - You should now have the account connected with 10000 ETH

## What’s Included?

Your environment will have following set up:

- A sample frontend: Sample application which uses [Create React App](https://github.com/facebook/create-react-app) along with its test.
- [Hardhat](https://hardhat.org/): An Ethereum development task runner and testing network.
- [Mocha](https://mochajs.org/): A JavaScript test runner.
- [Chai](https://www.chaijs.com/): A JavaScript assertion library.
- [ethers.js](https://docs.ethers.io/ethers.js/html/): A JavaScript library for interacting with Ethereum.
- [Waffle](https://github.com/EthWorks/Waffle/): To have Ethereum-specific Chai assertions/mathers.

## Trouble Shooting

- `Error HH8: There's one or more errors in your config file` error: If you get this error try setting up your `YOUR_ALCHEMY_API_KEY` and `YOUR_WALLET_PRIVATE_KEY` in .env file

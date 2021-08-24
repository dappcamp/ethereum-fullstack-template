# Ethereum Fullstack Template

This repository contains a `create-react-app` template that can be used to develop an ethereum dApp.

## Quick Start

1. Create a project using this template

    ```bash
    $ create-react-app project-name --template ethereum-fullstack
    ```

2. Switching to test network (RINKEBY)

    * Change line - `const NETWORK = LOCAL_NETWORK` to `const NETWORK = TEST_NETWORK` in `hardhat.config.js`
    * Replace `YOUR_ALCHEMY_API_KEY` with your api key from alchemy in `.env` file
    * Replace `YOUR_WALLET_PRIVATE_KEY` with your wallet's private key from metamask wallet in `.env` file

3. Running test for sample contract

    ```bash
    npx hardhat test
    ```

4. Running your app
    ```bash
    npm start
    ```
## What’s Included?

Your environment will have following set up:

- A sample frontend: Sample application which uses [Create React App](https://github.com/facebook/create-react-app) along with its test.
- [Hardhat](https://hardhat.org/): An Ethereum development task runner and testing network.
- [Mocha](https://mochajs.org/): A JavaScript test runner.
- [Chai](https://www.chaijs.com/): A JavaScript assertion library.
- [ethers.js](https://docs.ethers.io/ethers.js/html/): A JavaScript library for interacting with Ethereum.
- [Waffle](https://github.com/EthWorks/Waffle/): To have Ethereum-specific Chai assertions/mathers.

## Trouble Shooting

* `Error HH8: There's one or more errors in your config file` error: If you get this error try setting up your `YOUR_ALCHEMY_API_KEY` and `YOUR_WALLET_PRIVATE_KEY` in .env file

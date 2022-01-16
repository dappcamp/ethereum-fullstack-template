# Etherem Faucet

## Setup

1. Install dependencies

    ```bash
    npm install
    ```

## Running your app locally

1. Start a hardhat node

    ```bash
    npx hardhat node
    ```

2. In a new terminal window, run the following command to deploy the faucet contract on localhost

    `npx hardhat run scripts/deploy.js --network localhost`

3. The deployed contract address will be printed to console and will also be automatically be copied to `.env` inside the root directory.

4. Connect hardhat node to Metamask

    Open Metamask > Select the network dropdown from the top left > Select `Custom RPC` and enter the following details:

    - Network Name: `<Enter a name for the network>`
    - New RPC URL: `http://127.0.0.1:8545`
    - Chain ID: `31337`

    Click save. You can use this network to connect to the local hardhat node.

5. Connect your local hardhat account to Metamask for making transactions

    - After running `npx hardhat node` you will see a list of 20 addresses logged in the terminal
    - To configure an account copy its private key from the terminal (i.e the text after `Private Key:`)
    - Open Metamask > Click the account icon on top right > Import Account > Paste the private key you just copied > click Import
    - You should now have the account connected with 10000 ETH

6. In a new terminal window, start your react frontend

    ```bash
    npm start
    ```

### Deploy faucet contract - Testnet (Rinkeby) using Alchemy as Node Provider

1. Create a file by name `.env` inside the root directory of this project (if not already created by the contract deploy script). Paste the following lines inside this .env file

```
ALCHEMY_API_KEY = 'YOUR_ALCHEMY_API_KEY"
WALLET_PRIVATE_KEY = 'YOUR_WALLET_PRIVATE_KEY'
```

2. Replace `YOUR_ALCHEMY_API_KEY` with API key created using Alchemy

3. Replace `YOUR_WALLET_PRIVATE_KEY` with private key obtained by following these steps

    1. Click on metamask plugin icon in the browser
    2. Select `Account details`
    3. Click `Export Private Key` button and confirm your password

4. Run the following command to deploy faucet on rinkeby network

    `npx hardhat run scripts/deploy.js --network rinkeby`

5. The deployed contract address will be printed to console and will also be automatically be copied to `.env` inside the root directory.

**Note:** You can skip the contract deployment steps and by default the setup would use an already deployed contract.

### Common hardhat console commands to interact with your contract

1. Connect to the appropriate network using Hardhat console command

    `npx hardhat console --network rinkeby`

2. Get balance
    ```bash
    $ let bal = await ethers.provider.getBalance("CONTRACT_ADDR");
    $ bal
    ```
3. Convert balance to ethers
    ```bash
    $ ethers.utils.formatEther(bal);
    ```

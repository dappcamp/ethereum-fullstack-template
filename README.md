# Chainlink Oracles setup



## Price Feeds

The contract present in `template/contracts/PriceOracle.sol` shows how to fetch price data of ETH with respect to USD on chain in the contracts which are required to build DeFi applications. It has been setup for Kovan test chain. To setup any other pair other than ETH/USD prices or for any other chain, just change the proxy address from the [this list](https://docs.chain.link/docs/ethereum-addresses/)

To know more on how data feed works --> [Chainlink Data feed Doc](https://docs.chain.link/docs/using-chainlink-reference-contracts/)

## VRF (Verifiable Random Functions)

A short explainer video of [VRF](https://www.youtube.com/watch?v=oZRXKiX5jjo&ab_channel=GreenSockMonkey)

Most of the chainlink oracles follows the [Request & Receive Data](https://docs.chain.link/docs/request-and-receive-data/) cycle. 

In simple terms the process takes two transactions minimum. In the first transaction we first request the chainlink nodes to process and fetch us some data based on our given inputs. In that same request they generate and return a unique `requestId`. 

In the second transaction they call our fulfill method with the `requestId` and the our requested data output. Now since we can modify and extend the fulfill method ourselves, we can either save that data in some state variable to be used in some other contract or function later or we can emit an event which can be captured by an off-chain system to be consumed and process further.

There is always some delay in between these two transactions and hence fetching data on-chain from off-chain activity using oracles takes time.

To process and fulfill these requests, chainlink takes a small `fee` in LINK Tokens. (0.1 LINK mostly). The request will fail if the contract doesn't own enough LINK tokens. Make sure you fund the contract with LINK tokens after deployment and before making requests. The steps to run VRF.sol are as follows

1. Deploy the `RandomNumberConsumer` to kovan (to change network, change )

   ```bash
    const [deployer] = await hre.ethers.getSigners();

    const vrfFactory = await hre.ethers.getContractFactory("RandomNumberConsumer");
    const vrfContract = await vrfFactory.deploy();

    await vrfContract.deployed();
    console.log("vrfContract address:", vrfContract.address);
   ```

2. Send some LINK tokens to the contract address which gets printed. You can get LINK tokens from [here](https://docs.chain.link/docs/acquire-link/)

3. Request the contract for data and save the requestId

   ```bash
    const tx = await vrfContract.getRandomNumber();
    tx_receipt = await tx.await();
    requestId = tx_receipt.events[2].topics[0];
   ```

4. Listen to the RandomNumberGenerated event wherever you need to use this random number off-chain

   ```bash
   vrfContract.on("RandomNumberGenerated", (requestId, randomNumber) => {
                console.log(_requestId,randomNumber);
            });
   ```
If you want to use this on-chain, then just call another function from the fulfillRandomness() with randomness as param.

More documentation on [VRFs](https://docs.chain.link/docs/chainlink-vrf/)

A better implementation of these contracts for production as well as local setup can found [here](https://github.com/pappas999/chainlink-hardhat-box)

## External API

This contract uses ChainlinkClient which allows us to call any external API and use that data on-chain.

It follows the same [Request & Receive Data](https://docs.chain.link/docs/request-and-receive-data/) cycle.

This contract implements a GET Request on `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=ETH&tsyms=USD` with output data type as `uint256`.


We can follow the same steps as described in the VRF section to call and consume the data from this contract. If you need to change the output data type (currently it is a uint256) you will need to find a node which allows you to do so. Or follow the steps explained in this short tutorial [here](https://www.youtube.com/watch?v=AtHp7me2Yks&t=90s&ab_channel=Chainlink)

As explained in the chainlink documentation below:

The `oracle` keyword refers to a specific Chainlink node that a contract makes an API call from, and the `jobId` refers to a specific job for that node to run. Each job is unique and returns different types of data.

For example, a job that returns a `bytes32` variable from an API would have a different `jobId` than a job that retrieved the same data, but in the form of a `uint256` variable.

[market.link](https://market.link/) provides a searchable catalogue of Oracles, Jobs and their subsequent return types.

Full detailed documentation can be found [here](https://docs.chain.link/docs/make-a-http-get-request/)




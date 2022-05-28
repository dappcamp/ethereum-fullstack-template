const hre = require("hardhat");

async function main() {
    const [deployer] = await hre.ethers.getSigners();

    const SubscriptionNFTContract = await hre.ethers.getContractFactory("SubscriptionNFT");
    const subscriptionNFTContract = await SubscriptionNFTContract.deploy();

    await subscriptionNFTContract.deployed();
    console.log("Subscription NFT contract address:", subscriptionNFTContract.address);

    
    saveFrontendFiles(subscriptionNFTContract);

}

function saveFrontendFiles(contract) {
    const fs = require("fs");
    const contractsDir = __dirname + "/../src/abis";

    if (!fs.existsSync(contractsDir)) {
        fs.mkdirSync(contractsDir);
    }

    fs.writeFileSync(
        contractsDir + "/contract-address.json",
        JSON.stringify({ SubscriptionNFTContract: contract.address }, undefined, 2)
    );

    const SubscriptionNFTContractArtifact = artifacts.readArtifactSync("SubscriptionNFT");

    fs.writeFileSync(
        contractsDir + "/SubscriptionNFTContract.json",
        JSON.stringify(SubscriptionNFTContractArtifact, null, 2)
    );
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.log(error);
        process.exit(1);
    });
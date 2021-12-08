const hre = require("hardhat");
const path = require("path");

async function main(contractName) {
    const [deployer] = await hre.ethers.getSigners();

    const factoryOutput = await hre.ethers.getContractFactory(contractName);
    const contract = await factoryOutput.deploy();

    await contract.deployed();
    console.log("Contract address:", contract.address);

    saveFrontendFiles(contractName, contract.address);
}

function saveFrontendFiles(contractName, contractAddress) {
    const fs = require("fs");
    const contractsDir = path.join(__dirname, '..', 'src', 'contracts', contractName);

    if (!fs.existsSync(contractsDir)) {
        fs.mkdirSync(contractsDir);
    }

    fs.writeFileSync(
        contractsDir + "/address.json",
        JSON.stringify({ address: contractAddress }, undefined, 2)
    );

    const artifact = artifacts.readArtifactSync(contractName);

    fs.writeFileSync(
        contractsDir + "/abi.json",
        JSON.stringify(artifact, null, 2)
    );
}

main("NFTCollection")
    .then(() => process.exit(0))
    .catch(error => {
        console.log(error);
        process.exit(1);
    });
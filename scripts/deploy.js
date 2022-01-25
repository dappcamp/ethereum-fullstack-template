const hre = require("hardhat");
const path = require("path");

async function main(contractName) {
    const [deployer] = await hre.ethers.getSigners();

    const factoryOutput = await hre.ethers.getContractFactory(contractName);
    const baseURL="https://gateway.pinata.cloud/ipfs/QmWb5F3tUsAYSVL2W8hAGefij56jarExUdRwweMaLBGQjg/";

    const contract = await factoryOutput.deploy(baseURL);

    await contract.deployed();
    console.log("deployer : ", deployer);
    console.log("Contract address:", contract.address);

    saveFrontendFiles(contractName, contract.address);
}

function saveFrontendFiles(contractName, contractAddress) {
    const fs = require("fs");
    const contractsDir = __dirname + "/../src/abis";

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

main("HealthPass721")
    .then(() => process.exit(0))
    .catch(error => {
        console.log(error);
        process.exit(1);
    });
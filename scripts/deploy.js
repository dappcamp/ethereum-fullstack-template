const hre = require("hardhat");

async function main() {
    const [deployer] = await hre.ethers.getSigners();
    console.log(deployer);

    const SampleContract = await hre.ethers.getContractFactory("HealthPass721");
    const sampleContract = await SampleContract.deploy();

    await sampleContract.deployed();
    console.log("Sample Contract address:", sampleContract.address);

    saveFrontendFiles(sampleContract);

}

function saveFrontendFiles(contract) {
    const fs = require("fs");
    const contractsDir = __dirname + "/../src/abis";

    if (!fs.existsSync(contractsDir)) {
        fs.mkdirSync(contractsDir);
    }

    fs.writeFileSync(
        contractsDir + "/contract-address.json",
        JSON.stringify({ SampleContract: contract.address }, undefined, 2)
    );

    const SampleContractArtifact = artifacts.readArtifactSync("HealthPass721");

    fs.writeFileSync(
        contractsDir + "/HealthPass721.json",
        JSON.stringify(SampleContractArtifact, null, 2)
    );
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.log(error);
        process.exit(1);
    });
const hre = require("hardhat");

async function main() {
    const [deployer] = await hre.ethers.getSigners();

    const SampleContract = await hre.ethers.getContractFactory("SampleContract");
    const sampleContract = await SampleContract.deploy();

    await sampleContract.deployed();
    console.log(`Sample Contract deployed to address: ${sampleContract.address}`);

}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.log(error);
        process.exit(1);
    });
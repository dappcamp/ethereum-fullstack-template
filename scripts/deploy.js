const hre = require("hardhat");

async function main() {
	const [deployer] = await hre.ethers.getSigners();

	const EthereumFaucet = await hre.ethers.getContractFactory(
		"EthereumFaucet"
	);
	const faucet = await EthereumFaucet.deploy();

	await faucet.deployed();
	console.log(`Ethereum faucet deployed to address: ${faucet.address}`);

	saveFrontendFiles(faucet);
}

function saveFrontendFiles(contract) {
	const fs = require("fs");
	const contractsDir = __dirname + "/../src/abis";

	if (!fs.existsSync(contractsDir)) {
		fs.mkdirSync(contractsDir);
	}

	fs.writeFileSync(
		contractsDir + "/contract-address.json",
		JSON.stringify({ FaucetContractAddr: contract.address }, undefined, 2)
	);

	const FaucetArtifact = artifacts.readArtifactSync("EthereumFaucet");

	fs.writeFileSync(
		contractsDir + "/EthereumFaucet.json",
		JSON.stringify(FaucetArtifact, null, 2)
	);
}

main()
	.then(() => process.exit(0))
	.catch((error) => {
		console.log(error);
		process.exit(1);
	});

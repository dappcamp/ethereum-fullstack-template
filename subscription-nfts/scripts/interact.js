// scripts/index.js
async function main() {
  // Retrieve accounts from the local node
  const address = process.env.CONTRACT_ADDRESS;
  const Box = await ethers.getContractFactory("SubscriptionNFT");
  const box = await Box.attach(address);
  const value = await box.subscriptionTemplates(1);
  console.log("Box value is", value.toString());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

// const API_KEY = process.env.API_KEY;
// const PRIVATE_KEY = process.env.PRIVATE_KEY;
// const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;

// // Provider
// const alchemyProvider = new ethers.providers.AlchemyProvider();

// // Signer
// const signer = new ethers.Wallet(PRIVATE_KEY, alchemyProvider);

// const contract = require("../artifacts/contracts/SubscriptionNFT.sol/SubscriptionNFT.json");

// // Contract
// const subscriptionContract = new ethers.Contract(
//   CONTRACT_ADDRESS,
//   contract.abi,
//   signer
// );

// async function main() {
//   const message = await subscriptionContract.getTemplate(0);
//   console.log("The message is: " + message);
// }

// main();

import { ethers } from "ethers";

const contractAddress = require("../abis/contract-address.json");
const SubscriptionNFT = require("../abis/SubscriptionNFTContract.json");

// import 'dotenv/config'; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
// import express from 'express';
// 1: Mainnet
// 4: Rinkeby
// 1337: localhost network

// process.env['NEXT_PUBLIC_NETWORK_ID'] = "4";

// const networkId = process.env.NEXT_PUBLIC_NETWORK_ID || "1337"
const networkId = "1337";
const networks = {
  1: "mainnet",
  4: "rinkeby",
  1337: "localhost",
};

export const networkName = networks[networkId];

export const fetchSubscriptions = async () => {

  if (typeof window.ethereum !== "undefined") {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    const contract = new ethers.Contract(
      contractAddress.SubscriptionNFTContract,
      SubscriptionNFT.abi,
      signer
    );

    console.log(contract);

    try {
      const data = await contract.subscriptionTemplates(0);

      console.log("data: ", data);
    } catch (err) {
      console.log("Error: ", err);
    }
    return true;
  }
};

export const getEthereumObject = () => {
  const { ethereum } = window;
  if (!ethereum) return null;

  const nV = ethereum.networkVersion;

  // if (nV != networkId) {
  //     alert(`Please switch to the ${networkName} network`)
  //     return null
  // }

  return ethereum;
};

export const setupEthereumEventListeners = (ethereum) => {
  const provider = new ethers.providers.Web3Provider(ethereum, "any");
  provider.on("network", (newNetwork, oldNetwork) => {
    if (oldNetwork) {
      window.location.reload();
    }
  });

  window.ethereum.on("accountsChanged", async (accounts) => {
    window.location.reload();
  });

  return ethereum;
};

export const connectWallet = async () => {
  const { ethereum } = window;
  console.log("ethereum:", ethereum);
  if (!ethereum) return null;
  console.log("trying to connect wallet!!!");
  await ethereum.request({ method: "eth_requestAccounts" });

  window.location.reload();
};

export const getCurrentAccount = async () => {
  const { ethereum } = window;

  const accounts = await ethereum.request({ method: "eth_accounts" });

  if (!accounts || accounts?.length === 0) {
    return null;
  }
  const account = accounts[0];
  return account;
};

export const getSignedContract = (address, abi) => {
  const { ethereum } = window;

  const provider = new ethers.providers.Web3Provider(ethereum, "any");

  const signer = provider.getSigner();
  return new ethers.Contract(address, abi, signer);
};

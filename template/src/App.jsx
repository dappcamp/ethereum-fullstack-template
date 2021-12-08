import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { abi as contractABI } from "./contracts/NFTCollection/abi.json";
import { address } from "./contracts/NFTCollection/address.json";

import Header from "./components/Header.jsx";

import Home from "./pages/Home.jsx";
import Mint from "./pages/Mint.jsx";

import { checkIfWalletIsConnected, getSignedContract } from "./utils/common.js";

import "./App.css";
import ConnectWithMetaMaskButton from "./components/ConnectWithMetaMaskButton";

export default function App() {
  const [contractOwner, setContractOwner] = useState("");
  const [currentAccount, setCurrentAccount] = useState("");

  useEffect(() => {
    checkIfWalletIsConnected(setCurrentAccount);
  }, []);

  useEffect(() => {
    getContractOwner(setContractOwner);
  }, [currentAccount]);

  const getContractOwner = async (setContractOwner) => {
    try {
      const contract = getSignedContract(address, contractABI);

      if (!contract) {
        return;
      }

      const owner = await contract.owner();

      setContractOwner(owner.toLowerCase());
    } catch (err) {
      console.log(err);
    }
  };

  const isOwner =
    contractOwner !== "" &&
    contractOwner.toLowerCase() === currentAccount.toLowerCase();

  const isMetamaskConnected = !!currentAccount;

  return (
    <Router>
      <div id="app-container">
        <Header isOwner={isOwner} />
        {!isMetamaskConnected && (
          <ConnectWithMetaMaskButton
            setCurrentAccount={setCurrentAccount}
            isMetamaskConnected={isMetamaskConnected}
          />
        )}
        <Switch>
          <Route path="/mint">
            <Mint {...{ contractOwner, currentAccount }} />
          </Route>
          <Route path="/">
            <Home {...{ contractOwner, currentAccount }} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

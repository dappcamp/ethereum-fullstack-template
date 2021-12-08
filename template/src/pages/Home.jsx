import React, { useEffect, useState } from "react";
import { abi as contractABI } from "../contracts/NFTCollection/abi.json";
import { address } from "../contracts/NFTCollection/address.json";

import { getSignedContract } from "../utils/common.js";

import { ethers } from "ethers";

import NoNFTsIllustration from "../components/NoNFTsIllustration.jsx";
import NFT from "../components/NFT.jsx";

import "../App.css";

export default function Home({ currentAccount, contractOwner }) {
  const [nfts, setNfts] = useState([]);
  const [nftsLoaded, setNftsLoaded] = useState(false);

  useEffect(() => {
    fetchNfts();
  }, [currentAccount]);

  const fetchNfts = async () => {
    try {
      const contract = getSignedContract(address, contractABI);

      if (!contract) {
        return;
      }

      const counter = await contract.counter();
      const counterInt = parseInt(counter._hex, 16);

      setNftsLoaded(false);

      const allNfts = await Promise.all(
        Array(counterInt)
          .fill()
          .map(async (_, index) => {
            const tokenId = index + 1;
            return await contract.allNfts(tokenId);
          })
      );

      setNftsLoaded(true);
      setNfts(allNfts);
    } catch (error) {
      console.log("fetchNfts error: ", error);
      setNftsLoaded(true);
    }
  };

  const buyNft = async (tokenId, price) => {
    try {
      const contract = getSignedContract(address, contractABI);

      if (!contract) {
        return;
      }

      const txn = await contract.buyNft(tokenId, {
        value: ethers.utils.parseEther(price.toString()),
      });
      await txn.wait();
    } catch (error) {
      console.log(error);
    }
  };

  const hexToInt = (hex) => parseInt(hex, 16);

  const isMetamaskConnected = !!currentAccount;

  return (
    <div style={{ maxWidth: "1280px", margin: "auto" }}>
      {isMetamaskConnected && nftsLoaded && nfts.length === 0 && (
        <NoNFTsIllustration />
      )}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {nfts.map((nft, index) => {
              return (
                <NFT
                  imageUrl={nft.tokenURI}
                  title={nft.tokenName}
                  price={hexToInt(nft.price._hex)}
                  currentOwner={nft.currentOwner.toLowerCase()}
                  contractOwner={contractOwner}
                  currentAccount={currentAccount}
                  buyHandler={() =>
                    buyNft(hexToInt(nft.tokenId._hex), hexToInt(nft.price._hex))
                  }
                />
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

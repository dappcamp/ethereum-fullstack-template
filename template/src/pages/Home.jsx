import React, { useEffect, useState } from "react";

import NoNFTsIllustration from "../components/NoNFTsIllustration.jsx";
import NFT from "../components/NFT.jsx";

import { buyNft } from "../utils/common.js";

import "../App.css";

export default function Home({ currentAccount, contractOwner, contract }) {
  const [nfts, setNfts] = useState([]);
  const [nftsLoaded, setNftsLoaded] = useState(false);

  useEffect(() => {
    fetchNfts();
  }, [currentAccount]);

  useEffect(() => {}, [nfts]);

  const fetchNfts = async () => {
    try {
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
            const nft = await contract.allNfts(tokenId);
            const ownerOf = await contract.ownerOf(tokenId);

            const response = await (await fetch(nft?.tokenURI)).json();
            const { image, name } = response;

            return {
              tokenId,
              imageUrl: image,
              name,
              price: hexToInt(nft?.price._hex),
              currentOwner: ownerOf,
            };
          })
      );

      setNftsLoaded(true);
      setNfts(allNfts);
    } catch (error) {
      console.log("fetchNfts error: ", error);
      setNftsLoaded(true);
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
                  imageUrl={nft.imageUrl}
                  title={nft.tokenName}
                  price={nft.price}
                  currentOwner={nft.currentOwner}
                  contractOwner={contractOwner}
                  currentAccount={currentAccount}
                  buyHandler={() => buyNft(contract, nft.tokenId, nft.price)}
                />
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

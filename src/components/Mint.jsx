import React, { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";

import { mintNft } from "../utils/common";

import "react-toastify/dist/ReactToastify.css";

export default function Mint({ provider, contract, contractOwner }) {
  useEffect(() => {
    if (!contract) {
      return;
    }
    provider.once("block", () => {
      contract.on("Transfer", onMintCompletion);
    });
  }, [contract]);

  const onMintCompletion = (fromAddress, toAddress, tokenId) => {
    toast.success(
      `🦄 NFT with tokenId ${tokenId} was successfully minted by $${toAddress}!`,
      {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }
    );
  };

  return (
    <div className="mt-8">
      <section className="text-gray-600 body-font">
        <div
          className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col"
          style={{ margin: "auto" }}
        >
          <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
            Immortalize your creation
          </h2>
          <button
            className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            onClick={() => mintNft(contract, contractOwner)}
          >
            Mint next item in Collection
          </button>
        </div>
      </section>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

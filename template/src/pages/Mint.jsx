import React, { useEffect, useState } from "react";
import { abi as contractABI } from "../contracts/NFTCollection/abi.json";
import { address } from "../contracts/NFTCollection/address.json";

import { getSignedContract } from "../utils/common.js";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Mint() {
  const [imageUrl, setImageUrl] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(1);

  const mintNft = async (imageUrl, title, price) => {
    try {
      const contract = getSignedContract(address, contractABI);

      if (!contract) {
        return;
      }

      const txn = await contract.mintNft(imageUrl, title, price);
      await txn.wait();

      toast.success("🦄 NFT minted successfully!", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setImageUrl("");
      setTitle("");
      setPrice(1);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <br />
      <br />
      <section className="text-gray-600 body-font">
        <div
          className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col"
          style={{ margin: "auto" }}
        >
          <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
            Immortalize your creation
          </h2>
          <div className="relative mb-4">
            <label className="leading-7 text-sm text-gray-600">Image Url</label>
            <input
              type="text"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label className="leading-7 text-sm text-gray-600">Title</label>
            <input
              type="text"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label className="leading-7 text-sm text-gray-600">Price</label>
            <input
              type="number"
              min="1"
              step="1"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <button
            className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            onClick={() => mintNft(imageUrl, title, price)}
          >
            Mint
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

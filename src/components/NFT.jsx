import React from "react";

export default function NFT({
  imageUrl,
  title,
  price,
  currentOwner,
  contractOwner,
  currentAccount,
  buyHandler,
}) {
  const buttonDetails = (
    currentOwner,
    currentAccount,
    contractOwner,
    buyHandler
  ) => {
    if (currentAccount.toLowerCase() === contractOwner.toLowerCase()) {
      return {
        handler: () => {},
        disabled: true,
        text: "You minted this NFT",
      };
    } else if (currentOwner.toLowerCase() === currentAccount.toLowerCase()) {
      return {
        handler: () => {},
        disabled: true,
        text: "You own this NFT",
      };
    } else if (currentOwner.toLowerCase() !== contractOwner.toLowerCase()) {
      return {
        handler: () => {},
        disabled: true,
        text: "Sold out",
      };
    }
    return {
      handler: buyHandler,
      disabled: false,
      text: "Buy",
    };
  };

  const { disabled, text, handler } = buttonDetails(
    currentOwner,
    currentAccount,
    contractOwner,
    buyHandler
  );

  return (
    <div className="p-4 md:w-1/3" key={imageUrl}>
      <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        <img
          className="lg:h-48 md:h-36 w-full object-cover object-center"
          src={imageUrl}
          alt="blog"
        />
        <div className="p-6">
          <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            {title}
          </h1>
          <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
            PRICE
          </h2>
          <p className="leading-relaxed mb-3">{price} ETH</p>
          <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
            CURRENT OWNER
          </h2>
          <p
            className="leading-relaxed mb-3"
            style={{
              maxWidth: "60%",
              wordBreak: "break-word",
            }}
          >
            {currentOwner}
          </p>
          <button
            disabled={disabled}
            onClick={handler}
            className="flex text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg disabled:opacity-50"
          >
            {text}
          </button>
        </div>
      </div>
    </div>
  );
}

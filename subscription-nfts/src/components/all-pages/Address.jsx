import React from "react";

export default function Address({ address }) {
  const shortAddress =
    address &&
    address?.length > 0 &&
    address.slice(0, 5) +
      "..." +
      address.slice(address.length - 4, address.length);

  return <p className="rounded bg-gray-100 py-1 px-3">{shortAddress}</p>;
}
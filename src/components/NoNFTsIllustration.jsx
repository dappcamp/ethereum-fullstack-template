import React from "react";

export default function NoNFTsIllustration() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        margin: "auto",
        width: "max-content",
        flexDirection: "column",
      }}
    >
      <br />
      <br />
      <div>
        <img
          src="https://error404.fun/img/illustrations/14@2x.png"
          alt="Illustration"
          style={{ maxWidth: "500px", margin: "0" }}
        />
      </div>
      <p>No NFTs are present in this collection yet.</p>
      <p>
        If you're the owner, you will see the <b>Mint</b> link in the top left.
        Click on it to go to the Mint page.
      </p>
    </div>
  );
}

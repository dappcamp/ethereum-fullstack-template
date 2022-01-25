const { expect } = require("chai");
const { ethers } = require("hardhat");

const address = "0x70997970c51812dc3a010c7d01b50e0d17dc79c8"; //Replace this as necessary.

describe("Health Pass", () => {
    let healthPass, HealthPass;
    const baseURL="https://gateway.pinata.cloud/ipfs/QmWb5F3tUsAYSVL2W8hAGefij56jarExUdRwweMaLBGQjg/";

    beforeEach(async () => {
        HealthPass = await ethers.getContractFactory("HealthPass721");
        console.log("deploying certificate");
        healthPass = await HealthPass.deploy(baseURL);
        console.log("deployed");
    });

    it("mint a certificate", async () => {
        var certData = {
            category: "AA",
            country: "Germany",
            region: "EU",
            vaccineVendor: "Pfizer"
        };
        var currentCount = parseInt(await healthPass.balanceOf(address));
        await expect(healthPass.awardCertificate(address,certData))
                        .to.emit(healthPass,"CertificateIssued")
                        .withArgs("1",["AA","Germany","EU","Pfizer"]) ;
        var newCount = parseInt(await healthPass.balanceOf(address));
        var tokenId=1;
        var tokenUri = await healthPass.tokenURI(tokenId);
        var expected= baseURL+tokenId
        expect(expected).to.equal(tokenUri); 
        expect(newCount).to.equal(currentCount + 1);

    });

});
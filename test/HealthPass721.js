const { expect } = require("chai");
const { ethers } = require("hardhat");

const address = "0x70997970c51812dc3a010c7d01b50e0d17dc79c8"; //Replace this as necessary.

describe("Health Pass", () => {
    let healthPass, HealthPass;

    beforeEach(async () => {
        HealthPass = await ethers.getContractFactory("HealthPass721");
        console.log("deploying certificate");
        healthPass = await HealthPass.deploy();
        console.log("deployed");
    });

    it("mint a certificate", async () => {
        var currentCount = parseInt(await healthPass.balanceOf(address));
        await healthPass.awardCertificate(address);
        var newCount = parseInt(await healthPass.balanceOf(address));
        expect(newCount).to.equal(currentCount+1);

    });

});
const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Sample Contract", () => {
    let SampleContract, sampleContract;

    beforeEach(async () => {
        SampleContract = await ethers.getContractFactory("SampleContract");
        sampleContract = await SampleContract.deploy();
    });

    it("emit greeting event when greet function is called", async () => {
        expect(sampleContract.greet())
            .to
            .emit(sampleContract, "Greet")
            .withArgs("Hello World!");
    });

});
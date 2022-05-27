const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("SubscriptionNFT Contract", () => {
    let SubscriptionNFTContract, subscriptionNFTContract;

    beforeEach(async () => {
        SubscriptionNFTContract = await ethers.getContractFactory("SubscriptionNFTContract");
        subscriptionNFTContract = await SubscriptionNFTContract.deploy();
    });

    describe("addCreator", function () {
		it("should revert when invalid term entered", async function () {
			await expect(
				subscriptionNFTContract.connect(account1).addCreator('name', 100, 123)
			).to.be.revertedWith("Invalid term");
		});

		it("should revert when invalid price entered", async function () {
			await expect(
				subscriptionNFTContract.connect(owner).addCreator('name', 1000000000, 1)
			).to.be.revertedWith("Invalid price");
		});

        it("should revert when name is too short", async function () {
			await expect(
				subscriptionNFTContract.connect(owner).addCreator('', 100, 1)
			).to.be.revertedWith("Invalid name");
		});

        it("should revert when name is too long", async function () {
			await expect(
				subscriptionNFTContract.connect(owner).addCreator('namenamenamenamenamenamenamenamenamenamenamenamenamenamename', 100, 1)
			).to.be.revertedWith("Invalid name");
		});

		it("should emit an event when subscription options are added", async function () {
			await expect(subscriptionNFTContract.connect(owner).addCreator('name', 100, 1))
				.to.emit(subscriptionNFTContract, "Added")
				.withArgs('name', 100, 1);
		});
	});

});
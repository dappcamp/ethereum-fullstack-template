const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("SubscriptionNFT Contract", () => {
    let SubscriptionNFTContract, subscriptionNFTContract, onwer, account1;

    beforeEach(async () => {
        const accounts = await ethers.getSigners();
        owner = accounts[0];
        account1 = accounts[1];

        SubscriptionNFTContract = await ethers.getContractFactory("SubscriptionNFT");
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
				subscriptionNFTContract.connect(owner).addCreator('name', 1000000000, 60)
			).to.be.revertedWith("Invalid price");
		});

        it("should revert when name is too short", async function () {
			await expect(
				subscriptionNFTContract.connect(owner).addCreator('', 100, 60)
			).to.be.revertedWith("Invalid name");
		});

        it("should revert when name is too long", async function () {
			await expect(
				subscriptionNFTContract.connect(owner).addCreator('namenamenamenamenamenamenamenamenamenamenamenamenamenamename', 100, 60)
			).to.be.revertedWith("Invalid name");
		});

		it("should emit an event when subscription options are added", async function () {
			await expect(subscriptionNFTContract.connect(owner).addCreator('name', 100, 60))
				.to.emit(subscriptionNFTContract, "Added")
				.withArgs('name', 100, 60);
		});
	});

    describe("issueSubscriptionNFT", function () {
		// it("should revert when not called by an owner", async function () {
		// 	await expect(
		// 		subscriptionNFTContract.connect(account1).issueSubscriptionNFT(address1, 1)
		// 	).to.be.revertedWith("Not an owner");
		// });

		it("should emit an event when subscription NFT is issued", async function () {
			await expect(subscriptionNFTContract.connect(owner).issueSubscriptionNFT(owner.address, 1))
				.to.emit(subscriptionNFTContract, "Issued")
				.withArgs(owner.address, 1);
		});
	});

});
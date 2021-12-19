//Contract based on [https://docs.openzeppelin.com/contracts/3.x/erc721](https://docs.openzeppelin.com/contracts/3.x/erc721)
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract NFTCollection is ERC721URIStorage, Ownable {
    uint256 public counter = 0;

    mapping(uint256 => Nft) public allNfts;

    struct Nft {
        uint256 tokenId;
        string tokenName;
        string tokenURI;
        address payable currentOwner;
        uint256 price;
    }

    constructor() public ERC721("NFTCollection", "NFT") {}

    function mintNft(
        string memory tokenURI,
        string memory tokenName,
        uint256 price
    ) public onlyOwner returns (uint256) {
        counter++;

        _mint(msg.sender, counter);
        _setTokenURI(counter, tokenURI);

        address payable addr = payable(msg.sender);

        Nft memory newNft = Nft(counter, tokenName, tokenURI, addr, price);

        allNfts[counter] = newNft;
    }

    function buyNft(uint256 _tokenId) public payable {
        require(_exists(_tokenId), "Token does not exist");

        address tokenOwner = ownerOf(_tokenId);
        require(tokenOwner != address(0));
        require(tokenOwner != msg.sender, "You already own this token");

        Nft memory nft = allNfts[_tokenId];

        require(nft.currentOwner == owner(), "NFT has already been bought");

        require(msg.value >= nft.price, "Not enough ETH sent; check price!!!!");

        _transfer(tokenOwner, msg.sender, _tokenId);

        address payable sendTo = nft.currentOwner;

        sendTo.transfer(msg.value);

        address payable addr = payable(msg.sender);
        nft.currentOwner = addr;
        allNfts[_tokenId] = nft;
    }
}

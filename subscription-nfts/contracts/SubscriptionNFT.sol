// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

// import "hardhat/console.sol";

contract SubscriptionNFT is ERC721 {

    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    Counters.Counter private _subscriptionTemplateIds;

    event CreatedSubscriptionTemplate(uint256 _subscriptionTemplateId);

    struct TokenData {
        uint256 subscriptionTemplateId;
        uint256 expirationTime;
    }

    mapping(uint256 => TokenData) private _tokenDatas;

    struct SubscriptionTemplate {
        address creatorAddress;
        string subscriptionName;
        uint256 price;
        uint256 term;
    }

    mapping(uint256 => SubscriptionTemplate) public subscriptionTemplates;

    struct AggregatedTokenData {
        uint256 tokenId;
        address ownerAddress;
        bool expired;
        TokenData tokenData;
        SubscriptionTemplate subscriptionData;
    }

    constructor() ERC721("SubscriptionNFT", "SUB") {}


    event Added(string subscriptionName, uint256 price, uint256 term);
    event Issued(address recipient, uint256 subscriptionTemplateId);

    function addCreator(string memory subscriptionName, uint256 price, uint256 term) public returns (uint256) {
        require(term == 60 || term == 2629743 || term == 31556926, "Invalid term");
        require(price > 0 && price < 1000000, "Invalid price");
        require(bytes(subscriptionName).length > 0 && bytes(subscriptionName).length <= 32, "Invalid name");
        _subscriptionTemplateIds.increment();
        uint256 newSubscriptionTemplateId =  _subscriptionTemplateIds.current();

       subscriptionTemplates[newSubscriptionTemplateId] = SubscriptionTemplate(
            {
                creatorAddress: msg.sender,
                subscriptionName: subscriptionName,
                price: price,
                term: term
            }
        );

        emit Added(subscriptionName, price, term);
        return newSubscriptionTemplateId;

    }   

    function issueSubscriptionNFT(uint256 subscriptionTemplateId) external payable returns (uint256) {

        // TODO implement payment logic

        _tokenIds.increment();

        // TODO check if option exists??
        uint256 newTokenId = _tokenIds.current();

        _mint(msg.sender, newTokenId);

        SubscriptionTemplate memory selectedSubscriptionTemplate = subscriptionTemplates[subscriptionTemplateId];

        _tokenDatas[newTokenId].subscriptionTemplateId = subscriptionTemplateId;
        _tokenDatas[newTokenId].expirationTime = block.timestamp + selectedSubscriptionTemplate.term;

        emit Issued(recipient, subscriptionTemplateId);
        return newTokenId;
    }
   

    function getAggregatedTokenData(uint256 tokenId) public view returns (AggregatedTokenData memory) {

        TokenData memory tokenData = _tokenDatas[tokenId];

        return AggregatedTokenData (
            {
                tokenId: tokenId,
                ownerAddress: ownerOf(tokenId),
                expired: (tokenData.expirationTime < block.timestamp),
                tokenData: tokenData,
                subscriptionData: _subscriptionTemplates[tokenData.subscriptionTemplateId]
            }
        );
    }

}

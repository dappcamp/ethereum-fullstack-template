// SPDX-License-Identifier: MIT

pragma solidity ^0.8.1;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract SubscriptionNFT is ERC721 {

    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    Counters.Counter private _subscriptionTemplateIds;

    struct TokenData {
        uint256 subscriptionTemplateId;
        string accessTier;
        uint256 expirationTime;
    }

    mapping(uint256 => TokenData) private _tokenDatas;

    struct SubscriptionTemplate {
        address creatorAddress;
        string subscriptionName;
        uint256 price;
        uint256 term;
    }

    mapping(uint256 => SubscriptionTemplate) public _subscriptionTemplates;

    constructor() ERC721("SubscriptionNFT", "SUB") {}

    function addCreator(string memory subscriptionName, uint256 price, uint256 term) public returns (uint256) {

        _subscriptionTemplateIds.increment();
        uint256 newSubscriptionTemplateId =  _subscriptionTemplateIds.current();

       _subscriptionTemplates[newSubscriptionTemplateId] = SubscriptionTemplate(
            {
                creatorAddress: msg.sender,
                subscriptionName: subscriptionName,
                price: price,
                term: term
            }
        );
        return newSubscriptionTemplateId;

    }   

    function issueSubscriptionNFT(address recipient, uint256 subscriptionTemplateId) public returns (uint256) {

        // TODO implement payment logic

        _tokenIds.increment();

        uint256 newTokenId = _tokenIds.current();

        _mint(recipient, newTokenId);

        SubscriptionTemplate memory selectedSubscriptionTemplate = _subscriptionTemplates[subscriptionTemplateId];

        _tokenDatas[newTokenId].subscriptionTemplateId = subscriptionTemplateId;
        _tokenDatas[newTokenId].expirationTime = block.timestamp + selectedSubscriptionTemplate.term;

        return newTokenId;
    }

}

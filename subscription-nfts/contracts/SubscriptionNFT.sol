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

    struct SubscriptionOption {
        string accessTier;
        uint256 price;
        uint256 term;
    }

    struct SubscriptionTemplate {
        address creatorAddress;
        SubscriptionOption[] subscriptionOptions;
    }

    mapping(uint256 => SubscriptionTemplate) private _subscriptionTemplates;

    constructor() ERC721("SubscriptionNFT", "SUB") {}

    function issueSubscriptionNFT(address recipient, uint256 subscriptionTemplateId, uint256 subscriptionOptionSelectionIndex) public returns (uint256) {

        // TODO implement payment logic

        _tokenIds.increment();

        uint256 newTokenId = _tokenIds.current();

        _mint(recipient, newTokenId);

        SubscriptionOption memory selectedSubscriptionOption = _subscriptionTemplates[subscriptionTemplateId].subscriptionOptions[subscriptionOptionSelectionIndex];

        _tokenDatas[newTokenId].subscriptionTemplateId = subscriptionTemplateId;
        _tokenDatas[newTokenId].accessTier = selectedSubscriptionOption.accessTier;
        _tokenDatas[newTokenId].expirationTime = block.timestamp + selectedSubscriptionOption.term;

        return newTokenId;
    }

}

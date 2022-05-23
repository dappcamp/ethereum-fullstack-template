// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract SubscriptionNFT is ERC721 {

    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    struct TokenData {
        address creatorAddress;
        string accessTier;
        uint256 expiration_time;
    }

    mapping(uint256 => TokenData) private _tokenDatas;

    constructor() ERC721("SubscriptionNFT", "SUB") {}

}

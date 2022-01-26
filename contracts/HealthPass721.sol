// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

import "hardhat/console.sol";

contract HealthPass721 is ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

 //We can brainstorm about it
    struct VaccineDetails {
     string category;
     string country;
     string region;
     string vaccineVendor;
    }

  mapping(address => VaccineDetails[]) vaccineDetailsMapping ;

  event CertificateIssued(uint indexed id,VaccineDetails vaccineDetails);
  string baseURL;
    

    constructor(string memory _baseURL) ERC721("HealthPass", "HPASS") {
        baseURL=_baseURL;
    }

   //Can be extended based on requirement
   modifier isUserEligibleForCertificate(address user) {
       require(vaccineDetailsMapping[user].length == 0 , "Certficate already issued to user" );
       _;
   } 

   function _baseURI() internal override view virtual returns (string memory) {
        return baseURL;
    }

    function setBaseURL(string memory url) external {
        baseURL=url;
    }

    // Have removed  modifiers to test out
    function awardCertificate(address user, VaccineDetails memory vaccineDetails)
        public 
        returns (uint256)
    {
        _tokenIds.increment();

        uint256 newItemId = _tokenIds.current();
        _safeMint(user, newItemId);
          
        vaccineDetailsMapping[user].push(vaccineDetails);

        emit CertificateIssued(newItemId,vaccineDetails);

        return newItemId;
    }

    

    
    
  
}

// SPDX-License-Identifier: MIT

//@title: treasurer.sol
//@author: dsyeag
//@notice: this contract accepts deposits and withdrawals,
    //maintains user balances, and interacts with the fundmanager.sol
    //contract.


pragma solidity ^0.8.0;

contract treasurer {

    address owner;    // current owner of the contract

    mapping (address => uint) usdcByAddress;
    mapping (address => uint) tETFByAddress;

    constructor() public {
        owner = msg.sender;
    }

    function withdrawUSDC(uint amount) public {
        require(owner == msg.sender);
        require(amount<=usdcByAddress(msg.sender),"You do not hold enough USDC");
        msg.sender.transfer(address(this).balance);
        usdcByAddress(msg.sender)-=amount;
    }
    function withdrawtETF(uint amount) public {
        require(amount<=tETFByAddress(msg.sender),"You do not hold enough tETF.");
        msg.sender.transfer(address());
        tETFByAddress(msg.sender)-=amount;
    }
    function deposit(address from, uint amount) public payable {
        require(msg.value == amount);
        usdcByAddress[from]+=amount;
    }

    function getUSDCBalance() public view returns (uint) {
        return usdcByAddress[msg.sender];
    }
    function gettETFBalance() public view returns (uint) {
        return tETFByAddress[msg.sender];
    }
}

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract NFTRaffle is Ownable, ERC721 {
    address host;
    address[] public players;
    uint256 public ticketPrice;
    
    // keep track of how many lotteries are done.
    uint raffleCount = 0;

    // status : 1 = created; 2 = Finished successfully; 3 = Failed, not enough tokens sold; 4 = cancelled by owner.
    
    enum RaffleStatus {
        None,
        Created,
        Finished,
        Failed,
        Cancelled
    }


    struct Raffle {
        uint raffleId;
        address host;
        address tokenContract;
        uint tokenId;
        uint raffleDuration; // in unix 
        uint minimumNumberOfTickets; 
        uint numberOfTicketsSold;
        uint status;
        address[] players;
    }

    

    // duplicate lotteryId? use an array instead of a mapping?
    mapping(uint256 => Raffle) public raffles;


    event Transfer(address to, uint tokenId);

    function lottery() public {
        host = msg.sender;
    }

    function createRaffle(
        uint numberOfTickets, 
        address tokenContract, 
        uint tokenId, 
        uint ticketPrice, 
        uint raffleDuration,
        uint numberOfTickets
    ) external {
        // first we need to transfer the NFT.
        
        raffles[++lotteryCount] = Raffle(lotteryCount, msg.sender, tokenContract, tokenId, raffleDuration, numberOfTickets, 0, 1);

        // is an interface required 
        // requires approval from the other contract
        // safeTransfer

    }

    function purchaseTicket(uint amount) payable, external {
        // modify take into account raffles is now a mapping of struct
            // remember to include require to prevent owner from buying tickets.
        // modifier you can only buy tickets for an active raffle.
        // 5. Check out this link for how to transfer ether, https://ethereum.stackexchange.com/questions/69381/using-address-call-value-to-send-ether-from-contract-to-contract-in-0-5-0-and-ab

        require(msg.value == ticketPrice * amount);
        require(amount > 0);
        uint numberOfTickets = ticketPrice * amount;
        payable(numberOfTickets).transfer(address(this).balance);
    }

    function pickWinner(address tokenContract, uint tokenId, ) external onlyOwner {
        // does each need their own ID?
        uint index = random() % players.length;
        address winner = players[index];
        payable (winner).transfer(address(this).balance); // token transfer?
        payable approve(winner, tokenId);
        players = new address[](0);
    }

    // 2 options:
    // 1. user performs the transfer themselves.
    // 2. owner does the transfer to the winner.
    function transfer(address to, uint tokenId) external {
        transferFrom(address(this), to, tokenId);
        emit Transfer(to, tokenId);
    }

    // creates a random hash that will become our winner
    function random() private view returns(uint){
        return  uint (keccak256(abi.encode(block.timestamp,  players)));
    }

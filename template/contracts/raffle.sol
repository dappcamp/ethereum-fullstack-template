pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract NFTRaffle is Ownable, ERC721 {
    
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
        uint ticketPrice; // won't we need this to determine how much tickets are for each raffle?
        uint raffleDuration; // in unix 
        uint startTime; // we need this for logic related to time boxing ticket purchases
        uint minimumNumberOfTickets; 
        uint numberOfTicketsSold;
        RaffleStatus status;
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

    modifier isActiveRaffle(Raffle raffle) {
        require(raffle.status == RaffleStatus.Created, "Raffle is not active.");
        _;
    }

    function purchaseTicket(uint amount, uint raffleId) 
        payable, 
        external,
        isActiveRaffle {
        // 5. Check out this link for how to transfer ether, https://ethereum.stackexchange.com/questions/69381/using-address-call-value-to-send-ether-from-contract-to-contract-in-0-5-0-and-ab
        Raffle raffle = raffles[raffleId];
        require(
            msg.sender != raffle.host, 
            "The raffle host may not purchase from tickets for a token they are raffling."
        );
        require(raffle.startTime + raffle.raffleDuration >= block.timestamp, "Raffle has ended.");
        require(msg.value == raffle.ticketPrice * amount);
        require(amount > 0);
        uint numberOfTickets = raffle.ticketPrice * amount;
        raffle.numberOfTicketsSold = raffle.numberOfTicketsSold + amount;
        payable(numberOfTickets).transfer(address(this).balance);
    }

    function pickWinner(uint raffleId) external onlyOwner {
        // does each need their own ID?
        Raffle raffle = raffles[raffleId];
        require(block.timestamp >= raffle.startTime + raffle.raffleDuration, "Raffle is ongoing.");

        if (raffle.minimumNumberOfTickets <= raffle.numberOfTicketsSold) {
            uint index = random() % raffle.players.length;
            address winner = raffle.players[index];
            payable (winner).transfer(address(this).balance); // token transfer?
            payable approve(winner, raffle.tokenId);
            raffle.status = RaffleStatus.Finished;
        } else { // not enough tickets sold. Not sure where else this ogic can live
            raffle.status = RaffleStatus.Failed;
            // transfer back NFT to host address
        }

        raffle.players = new address[](0); // do we want to delete all the players of a raffle when it is completed?
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

    function cancelRaffle(uint raffleId) {
        Raffle r = raffles[raffleId];
        require(msg.sender == r.host);
        // we need to tranfer the NFT back to the host
        r.status = RaffleStatus.Cancelled;
    }

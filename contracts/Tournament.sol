// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "./interfaces/IERC20Token.sol";
import "./structs/Player.sol";
import "./structs/TournamentDetails.sol";

import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
    
    // We will organize a weekly tournament in 
    // which users can participate by using MNFT tokens.
    // All tokens used for participation
    // will be added to the tournament prize pool.

contract Tournament is Pausable, AccessControl {
    uint public prize;
    uint public playerId;
    uint public tournamentEndTime;
    uint public constant FEE = 1;

    address public organizer;
    address public mockToken;
    // address public constant MNFT = 0x3235B13708F178Af6F110dE7177ED5De10c1093d;

    bool ended;

    Player[] public players;
    IERC20Token public token;
    TournamentDetails public tournamentDetails;

    mapping(address => uint) public addressToPlayerId;
    mapping(uint => address) public playerIdToAddress;

    mapping(string => bool) registeredNickname;
    mapping(address => bool) public addressJoined;

    event PrizeIncreased(uint NewPrize);
    event PlayerScoreIncreased(address player, uint score);
    event PlayerLifeIncreased(address player, uint life);
    event NewPlayer(address player, string name);
    event TournamendEnded(address winner, uint amount);

    error TournamentAlreadyEnded();
    error TournamentNotYetEnded();
    error ClaimPrizeAlreadyCalled();

    constructor(
        address _mockToken,
        address _tournamentOwner,
        uint _tournamentEndTime,
        TournamentDetails memory _tournamentDetails
        ) {
            token = IERC20Token(_mockToken);
            organizer = _tournamentOwner;
            tournamentEndTime = block.timestamp + _tournamentEndTime;
            tournamentDetails = _tournamentDetails;
            _grantRole(DEFAULT_ADMIN_ROLE, _tournamentOwner);
    }

    function participate(string memory _nickname, uint amount) external whenNotPaused() {
        if(block.timestamp > tournamentEndTime)
            revert TournamentAlreadyEnded();
        require(
            addressJoined[msg.sender] == false,
            "Already registered address");
        require(
            amount >= 100,
            "Must pay a MNFT to enter the tournament. 1 life == 100 MNFT");
        require(
            !registeredNickname[_nickname],
            "Invalid nickname.");

        bool sentFEEToPrize = token.transferFrom(msg.sender, address(this), amount);
        require(
            sentFEEToPrize,
            "Prize transfer failed");

        prize += amount;

        players.push(Player({
                life: amount = amount / (100 * 1e18), // You can get 1 life with 100 tokens.
                score: 0,
                p_address: msg.sender,
                nickname: _nickname
            }));
            
        playerIdToAddress[players.length] = msg.sender;
        addressToPlayerId[msg.sender] = players.length;

        registeredNickname[_nickname] = true;
        addressJoined[msg.sender] = true;
                    
        emit NewPlayer(msg.sender, _nickname);
        emit PrizeIncreased(prize);
    }

    function buyLife(uint amount) public onlyPlayer whenNotPaused() {
        bool sentTokenToLife = token.transferFrom(msg.sender, address(this), amount);
        require(sentTokenToLife, "The transfer of buying a life has failed.");
        prize += amount;

        amount = amount / (100 * 1e18);
        if(sentTokenToLife) {
            players[addressToPlayerId[msg.sender] - 1].life += amount;
        }
        emit PlayerLifeIncreased(msg.sender, amount);
    }

    function increasePrize(uint amount) public onlyOrganizer {
        bool increasedPrize = token.transferFrom(msg.sender, address(this), amount);
        require(increasedPrize, "The transfer of increasing prize has failed.");
        prize += amount;
        emit PrizeIncreased(prize);
    }

    function addScore(uint _score) public onlyPlayer whenNotPaused() {
        require(
            _score >= 0, 
            "Score cannot be negative");
        require(
            players[addressToPlayerId[msg.sender] - 1].life > 0,
            "You need life");
        _score = _score / (1 * 1e18);
        players[addressToPlayerId[msg.sender] - 1].score += _score;
        players[addressToPlayerId[msg.sender] - 1].life -= FEE;
    }

    function grantPrize() public onlyOrganizer whenNotPaused() {
        if(block.timestamp < tournamentEndTime)
            revert TournamentNotYetEnded();
        
        if(ended) 
            revert ClaimPrizeAlreadyCalled();

        require(prize > 0, "There is no prize");

        uint highestScore = 0;
        address highestScorer;
        
        for (uint i = 0; i < players.length; i++) {
            if (players[i].score > highestScore) {
                highestScore = players[i].score;
                highestScorer = players[i].p_address;
            }
        }
        ended = true;
        emit TournamendEnded(highestScorer, prize);

        bool sentPlayerPrizeWon = token.transfer(highestScorer, prize);
        require(sentPlayerPrizeWon, "Prize won transfer failed");
        
        if(sentPlayerPrizeWon) {
            prize = 0;
        }
    }

    modifier onlyOrganizer() {
        require(
            msg.sender == organizer, 
            "Only organizer can claim the prize and transfer prize to the winner of the tournament.");
        _;
    }

    modifier onlyPlayer() {
        require(
            addressToPlayerId[msg.sender] != 0 &&
            addressJoined[msg.sender] == true
            , "Not registered address");
        _;
    }

    function pause() external onlyRole(DEFAULT_ADMIN_ROLE) {
        _pause();
    }

    function unpause() external onlyRole(DEFAULT_ADMIN_ROLE) {
        _unpause();
    }
}
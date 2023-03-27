// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";


contract GameNft is ERC721URIStorage {
    address public owner;
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    constructor() ERC721("GameItem", "GITM"){
        owner = msg.sender;
    }

    modifier restricted() {
        require(owner == msg.sender);
        _;
    }

    //Function to award a player an nft
    function awardItem(address player, string memory tokenURI) public returns(uint256) {
        //Nft tokenId
        uint256 newItemId = _tokenIds.current();
        //mint the nft with the player address
        _mint(player, newItemId);
        //set the nft tpken url
        _setTokenURI(newItemId, tokenURI);

        //automatcally increase the counter
        _tokenIds.increment();
        return newItemId;
    }
}


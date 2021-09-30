pragma solidity 0.8;

contract Starter {
  address public owner;

  constructor(){
    owner = msg.sender;
  }

  modifier onlyOwner {
    require(owner == msg.sender);
    _;
  }

  function helloSolidity() public onlyOwner returns(string memory){
    return "Hello Solidity";
  }

}
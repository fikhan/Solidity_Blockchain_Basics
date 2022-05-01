pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract SolidityTest7 {
   function add1(uint256 a,uint256 b, uint256 c) public pure returns (uint256) {

       return (a + b) % c;
   }

   function add2(uint256 a, uint256 b, uint256 c) public pure returns (uint256){
       return addmod(a,b,c);
   }

   address payable public richest;
   uint public mostSent;

//    constructor() public payable {
//       richest = payable(msg.sender);
//      // mostSent = msg.value;
//    }
   mapping (address => uint) pendingWithdrawals;

   constructor() public payable {
      richest = payable(msg.sender);
      mostSent = msg.value;
   }

   function becomeRichest() public payable returns (bool) {
      if (msg.value > mostSent) {
         pendingWithdrawals[richest] += msg.value;
         richest = payable(msg.sender);
         mostSent = msg.value;
         return true;
      } else {
         return false;
      }
   }

   function withdraw() public {
      uint amount = pendingWithdrawals[msg.sender];
      pendingWithdrawals[msg.sender] = 0;
      payable(msg.sender).transfer(amount);
   }

   function setAddress(address _add) public {
        richest = payable(_add);
   }

//    function becomeRichest() public payable returns (bool) {
//       if (msg.value > mostSent) {
//          // Insecure practice
//          richest.transfer(msg.value);
//          richest = payable(msg.sender);
//          mostSent = msg.value;
//          return true;
//       } else {
//          return false;
//       }
//    }
}

contract DemoTest {
    function testValue() public {

    }
   
    function getFunds(address addressOfContract) public {
        SolidityTest7 abc = SolidityTest7(addressOfContract);
        abc.withdraw();
    }
//     receive() external payable {
   
//    }
}
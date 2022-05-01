pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract SolidityTest3 {

    function applyConversion() public pure returns(uint256) {
          uint256 a = 450;
          uint8 b = uint8(a);

          return b;
    }
}
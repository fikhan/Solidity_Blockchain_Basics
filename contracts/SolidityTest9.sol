pragma solidity ^0.8.0;

import "hardhat/console.sol";


// interface Calculator {
//     function getResult() external pure returns (uint256);
//     function getData() external pure returns (uint256);
// }

// contract ContractD is Calculator {

//     function getResult() external pure returns (uint256){
//         return 56;
//     }

//      function getData() external pure returns (uint256){
//          return 12;
//      }
// }
// abstract contract ContractA {
//     function getData() public pure returns (uint256){
//         return 45;
//     }
//     function getResult() public pure virtual returns (uint256);
// }

// contract ContractB is ContractA {

//     function getResult() public pure override returns (uint256){
//         return 12;
//     }

// }

library MyMathLib {
    function sum(uint256 a, uint256 b) internal pure returns (uint256){
        return a + b;
    }
}

contract ContractMath {
    using MyMathLib for uint256;
    event DataUpdated(uint256 value, address from);
    
    function checkResult() public pure returns (uint256){
          return MyMathLib.sum(34,56);
    }

    function checkResultUpated() public pure returns (uint256){
          uint256 a = 12;
          return a.sum(45);
    }

    function doSomeWork() public {
        emit DataUpdated(56, msg.sender);
    }

    function mint(uint256 numbersOfTokens) public {

        // require(numbersOfTokens < 10, "Number of tokens cannot be more than 10");
        if(numbersOfTokens > 5 && numbersOfTokens < 10){
            if(numbersOfTokens > 7 && numbersOfTokens < 9){
               
            }
        }
        else {
             revert("Number of tokens cannot be more than 10");
        }
    }
}
// contract ContractA {
//     constructor(uint256 b){

//     }
// }

// contract ContractB is ContractA {
//      constructor(uint256 a) ContractA(a){

//      }
// }

// contract C {

//     function checkInterface() public returns (uint256){
//         Calculator d = new ContractD();
//         d.getResult();
//     }

//     function checkFunctionA() public returns (uint256) {
//          //   B b = new B();
//          //  // b.compute(5,6);
//          //  b.getData();   
//          //a.getResult();
//         //  ContractA a = new ContractA();
//          ContractB b = new ContractB();

//         // return a.getData();      
//         }
// }
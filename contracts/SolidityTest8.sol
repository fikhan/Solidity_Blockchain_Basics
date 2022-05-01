pragma solidity ^0.8.0;

import "hardhat/console.sol";



    contract A {
         //private state variable
   uint private data;
   
   //public state variable
   uint public info;

   //constructor
   constructor() public {
      info = 10;
   }
   //private function
   function increment(uint a) private pure returns(uint) { return a + 1; }
   
   //public function
   function updateData(uint a) public { data = a; }
   function getData() public pure virtual returns(uint) { return 45; }
   function compute(uint a, uint b) internal pure returns (uint) { return a + b; }

    }
    
    contract B is A {
         uint private result;
   
   function getComputedResult() public {  
     //increment(45);
      getData();
   //   uint256 a = this.data();
      result = compute(3, 5); 
   }
   function getResult() public view returns(uint) { return result; }
   function getData() public pure override returns(uint) { return 5; }
    }

    contract C {
       
       B b;
       A a;

       constructor(){
        //  b = new B();
        a = new B();
       }

        function checkFunctionA() public view returns (uint256) {
         //   B b = new B();
         //  // b.compute(5,6);
         //  b.getData();   
         //a.getResult();

         return a.getData();      
        }
         function checkFunctionB() public view returns (uint256) {
         //   B b = new B();
         //  // b.compute(5,6);
         //  b.getData();   
         //a.getResult();

         return b.getData();      
        }
    }


import "hardhat/console.sol";

contract SolidityTest {
    enum FreshJuiceSize { SMALL, MEDIUM, LARGE, EXTRALARGE }

    uint256 public age;
    uint256[] arrayName;
    address[] users;
    FreshJuiceSize juice = FreshJuiceSize.MEDIUM;

    uint256 internal height = 6;
    enum FundingRounds {
         SEED, 
         PRIVATE, 
         PUBLIC
    }

    FundingRounds currentRound = FundingRounds.SEED;

    constructor() {

    }

    function getCurrentFundingRound() public returns (FundingRounds){
         
         
         return currentRound;

    }

    function changeRound(FundingRounds _round) public {
         require(_round == FundingRounds.SEED || _round == FundingRounds.PRIVATE || _round == FundingRounds.PUBLIC, "Invalid Round Information");
         currentRound = _round;
    }
    

    function getJuice() public view returns(FreshJuiceSize) {
        // FreshJuiceSize juiceSize = FreshJuiceSize.SMALL;
        return juice;

    }

    function updateJuiceSize(FreshJuiceSize _juice) public {
         juice = _juice;
    }

    function verifyJuiceSize() public view returns (bool){
         return juice == FreshJuiceSize.EXTRALARGE;
    }

    // function getResult() public view returns(address){
    //   uint256 blockNumber = block.number;
    //   uint256 timestamp = block.timestamp;
    //   address sender = msg.sender;
    //     return address(0);
    // }
    string public name = "Hello";
    function testArrays() public{
        uint[] memory a = new uint[](7);
        a[0] = 56;
        

        arrayName.push(45);

        for(uint256 i=0;i<a.length;i++){
             a[i] = 2 * 4;
        }
    }

    mapping (address=>uint256) public usersBalance;
    
    function register() public returns(uint256){
         users.push(msg.sender);
         usersBalance[msg.sender] = 1;
         console.log("User Balance", usersBalance[msg.sender]);
         uint256 balance = usersBalance[msg.sender];
         

         return usersBalance[msg.sender];
    }

    function updateAge(uint256 _age) public returns(string memory) {
         age = _age;
         height = 32;
         
        
    }

    function updateName() public pure returns(string memory){

         string memory data1 = "Hello";
         string memory data2 = "World";
         string memory result = string(abi.encodePacked(data1," ",data2));

         return result;
    }
}

contract SolidityUpdates is SolidityTest {
    constructor() {

    }

    function changeHeight(uint256 _height) public {
         height = _height;
    }
}
// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers } from "hardhat";
import { BigNumber } from "ethers";
import { SolidityTest1__factory , SolidityTest1, SolidityTest3__factory, SolidityTest3, SolidityTest4__factory, SolidityTest4, SolidityTest5, SolidityTest5__factory, SolidityTest6__factory, SolidityTest6, SolidityTest7__factory, SolidityTest7, DemoTest__factory, DemoTest, Demo2, Demo2__factory,Demo1__factory, Demo1, C__factory, C, ContractMath__factory, ContractMath} from "../typechain";

async function main() {
  const [owner, addr1, addr2] = await ethers.getSigners();

  const ContractMath:ContractMath__factory = await ethers.getContractFactory("ContractMath");
  const contractMath:ContractMath = await ContractMath.deploy();

  await contractMath.deployed();
  console.log("contractMath is deployed ", contractMath.address);

  const txt1 = await contractMath.mint(15);

 /* const txt1 = await contractMath.doSomeWork();
  const receipt = await txt1.wait();

  console.log("Reciept = ",receipt);
  console.log("Events = ", receipt.events);
*/
/*  const ContractMath:ContractMath__factory = await ethers.getContractFactory("ContractMath", {
    libraries: {
      MyMathLib:myMathLib.address
    }
  });
  const contractMath:ContractMath = await ContractMath.deploy();
  

  await contractMath.deployed();
  console.log("contractMath is deployed ", contractMath.address);
  console.log("Data A = ", (await contractMath.checkResult()).toString());
*/
  // console.log("Data A = ", (await c.checkFunctionA()).toString());
  // console.log("Data B = ", (await c.checkFunctionB()).toString());

  // const Demo2:Demo2__factory = await ethers.getContractFactory("Demo2");
  // const demo2:Demo2 = await Demo2.deploy();

  // await demo2.deployed();
  // console.log("Demo2 is deployed ", demo2.address);

  
 // const reciept = await txt1.wait();
  // console.log("Txt1 =", txt1);
  // console.log("reciept =", reciept);
  /*const txt1 = await demo2.createExample("First");
  console.log("Demo1 address = ",await demo2.demo1Address());

  const txt2 = await demo2.createExample("Second");
  console.log("Demo1 address = ",await demo2.demo1Address());

  const txt3 = await demo2.createExample("Third");
  console.log("Demo1 address = ",await demo2.demo1Address());
  */
  // const txt1 = await demo2.createExample("First");
  // const demo1Address = await demo2.demo1Address();
  // console.log("Demo1 address = ",demo1Address);

  // const txt2 = await demo2.createExample("Second");
  // const demo2Address = await demo2.demo1Address();
  // console.log("Demo1 address = ",demo2Address);

  // const txt3 = await demo2.createExample("Third");
  // const demo3Address = await demo2.demo1Address();
  // console.log("Demo1 address = ",demo3Address);

  // const name = await demo2.getNameOfContract(demo2Address);
  // console.log("Name =", name);

/*
  const Demo1:Demo1__factory = await ethers.getContractFactory("Demo1");
  const demo1:Demo1 = await Demo1.attach(demo2Address);

  console.log("Demo1 deployed to", demo1.address);

  const name = await demo1.getName();
  console.log("Name =", name);
*/
/*
    const SolidityTest7:SolidityTest7__factory = await ethers.getContractFactory("SolidityTest7");
     const solidityTest7:SolidityTest7 = await SolidityTest7.deploy();

     await solidityTest7.deployed();
     console.log("Solidity Test 7 is deployed ", solidityTest7.address);
     console.log("Add2 ", (await solidityTest7.add2(23,45,1)).toString());

     const DemoTest:DemoTest__factory = await ethers.getContractFactory("DemoTest");
     const demoTest:DemoTest = await DemoTest.deploy();

     await demoTest.deployed();
     console.log("Demo test deployed to", demoTest.address);

     await solidityTest7.setAddress(demoTest.address);
     const txt1 = await solidityTest7.connect(addr2).becomeRichest({value: ethers.utils.parseEther("1")});
    */
     // const SolidityTest5:SolidityTest5__factory = await ethers.getContractFactory("SolidityTest5");
    // const solidityTest5:SolidityTest5 = await SolidityTest5.deploy();

    // await solidityTest5.deployed();

    // const SolidityTest6:SolidityTest6__factory = await ethers.getContractFactory("SolidityTest6");
    // const solidityTest6:SolidityTest6 = await SolidityTest6.deploy();

    // await solidityTest6.deployed();
    // console.log("Solidity Test 5 is deployed to", solidityTest6.address);
    // console.log("Balance of contract = ", (await ethers.provider.getBalance(solidityTest5.address)).toString());
   
    // console.log("Recieve counter",(await solidityTest5.countReceive()).toString() );
    // console.log("Fallback counter",(await solidityTest5.countFallback()).toString() );

    // console.log("Recieve balance",(await solidityTest5.receiveBalance(addr1.address)).toString() );
    // console.log("Fallback balance",(await solidityTest5.fallbackBalance(addr1.address)).toString() );

    // const txt1 = solidityTest6.testFunctionCall(solidityTest5.address, "addSome()");
    // const txt1 = await addr1.sendTransaction({
    //   to: solidityTest5.address,
    //   value: ethers.utils.parseEther("1")
    // });
    // console.log("After =======> ");
    // console.log("Balance of contract = ", (await ethers.provider.getBalance(solidityTest5.address)).toString());
    // console.log("Recieve counter",(await solidityTest5.countReceive()).toString() );
    // console.log("Fallback counter",(await solidityTest5.countFallback()).toString() );

    // console.log("Recieve balance",(await solidityTest5.receiveBalance(addr1.address)).toString() );
    // console.log("Fallback balance",(await solidityTest5.fallbackBalance(addr1.address)).toString() );


  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  // const Greeter = await ethers.getContractFactory("Greeter");
  // const greeter = await Greeter.deploy("Hello, Hardhat!");
  // const SolidityTest3:SolidityTest3__factory = await ethers.getContractFactory("SolidityTest3");
  // const solidityTest3:SolidityTest3 = await SolidityTest3.deploy();

  // const SolidityTest4:SolidityTest4__factory = await ethers.getContractFactory("SolidityTest4");
  //  const solidityTest4:SolidityTest4 = await SolidityTest4.deploy();
  //  console.log("Owner addres", owner.address);
  //  console.log("contract owner address",await solidityTest4.owner());
  //  console.log("Treasure address =", await solidityTest4.treasureAddress());

  //  const txt1 = await solidityTest4.updateTreasureAddress(addr1.address);
  // console.log("Counter before = ",(await solidityTest4.counter()).toString());
  // const txt1 = await solidityTest4.updateAmount(ethers.utils.parseEther("0.001"));
  // console.log("Counter after = ",(await solidityTest4.counter()).toString());

  // console.log("contract owner address",await solidityTest4.owner());
  // console.log("Treasure address =", await solidityTest4.treasureAddress());

  //  const txt1 = await solidityTest4.connect(owner).updateTreasureAddress(addr1.address);

  //  console.log("contract owner address",await solidityTest4.owner());
  //  console.log("Treasure address =", await solidityTest4.treasureAddress());

  

  //  const val = await solidityTest4.doSomething();
  //  const val2 = await solidityTest4.checkPureFunction(10);

  //  console.log("Value = ", val);
  //  console.log("Value2 = ", val2);

  // await solidityTest3.deployed();

  // const data = await solidityTest3.applyConversion();

  // console.log("The conversion returns ", data );
  // const etherValue = await ethers.utils.parseEther("1");
  // console.log("Ether value = ",etherValue.toString());

  // const num = BigNumber.from("1000000000000000000");
  // console.log("Ether value = ", await ethers.utils.formatEther(num));

  // console.log("Greeter deployed to:", solidityTest1.address);
  // await solidityTest1.addFundingRounds();
  // const roundInfo = await solidityTest1.allRounds(0);
  // console.log(roundInfo);
  // console.log("funding required", roundInfo.fundingRequired);
  // console.log("round = ", roundInfo.round);
  // console.log(await solidityTest1.allRounds(0));
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

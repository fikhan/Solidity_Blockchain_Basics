
import { ethers } from "hardhat";
import {SolidityTest, SolidityTest__factory } from "../typechain";

async function main() {

  const SolidityTest:SolidityTest__factory = await ethers.getContractFactory("SolidityTest");
  const solidityTest:SolidityTest = await SolidityTest.deploy();

  await solidityTest.deployed();
  // console.log("Current Round =", await solidityTest.getCurrentFundingRound());

  await solidityTest.changeRound(2);

  // console.log("Current Round =", await solidityTest.getCurrentFundingRound());

  /*console.log("SolidityTest deployed to:", solidityTest.address);
  const data = await solidityTest.age();
  console.log("Age = ",data.toString());
  const txt1 = await solidityTest.updateAge(45);
  txt1.wait();
  console.log("Update done");
  
  const data1 = await solidityTest.age();
  console.log("update Age = ",data1.toString());

  const data2 = await solidityTest.updateName();
  console.log("The string returned" + data2.toString());

  const data3 = await solidityTest.register();
  console.log("the data returnd", data3);

  console.log("Juice =", await solidityTest.getJuice());

  console.log("is juice extra large", await solidityTest.verifyJuiceSize());

  await solidityTest.updateJuiceSize(3);

  console.log("Juice =", await solidityTest.getJuice());

  console.log("is juice extra large after", await solidityTest.verifyJuiceSize());
  // const txt1 = await solidityTest.getResult();
  // console.log("Txt = ",txt1.toString());
  */

}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
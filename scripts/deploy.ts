import { web3 } from "hardhat";
const { abi, bytecode } = require('../config')

async function main() {
  const accounts = await web3.eth.getAccounts()
  
  const result = await new web3.eth.Contract(abi)
       .deploy({ data: bytecode })
       .send({ gas: 10000000, from: accounts[0] })

       console.log('Contracts deployed at: ' + result.options.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

//Contracts deployed at: 0x16A779a8d17Bf84Cb7665d88f2CBCf9a880C757A

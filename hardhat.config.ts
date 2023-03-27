import { HardhatUserConfig, task } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomiclabs/hardhat-web3"

task("web3_accounts", "print accounts", async (_, { web3 }) => {
   console.log(await web3.eth.getAccounts());
})

const memonicPhrase = 'REPLACE WITH MEMONIC'
const testnetUrl = 'https://data-seed-prebsc-1-s1.binance.org:8545'
const mainnetUrl = 'https://bsc-dataseed1.binance.org'


const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.18",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000,
      }
    }
  },
  networks: {
    testnet: {
      url: testnetUrl,
      chainId: 97,
      gasPrice: 20000000000,
      accounts: { mnemonic: memonicPhrase }
    },

    mainnet: {
      url: mainnetUrl,
      chainId: 56,
      gasPrice: 20000000000,
      accounts: {mnemonic: memonicPhrase }
    },

    polygon: {
      url: 'https://polygon-mumbai.g.alchemy.com/v2/uSkOT5_pn8JEervxCOA5j9HovDrRkS5y',
      accounts: { mnemonic: memonicPhrase }
    }
  }
};

export default config;
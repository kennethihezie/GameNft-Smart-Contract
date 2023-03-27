import { web3 } from "hardhat";
const { abi, bytecode } = require('../config')
import assert from 'assert'

let accounts: Array<string>
let gameNft: any

beforeEach(async () => {
    accounts = await web3.eth.getAccounts()
    gameNft = await new web3.eth.Contract(abi)
    .deploy({ data: bytecode })
    .send({ from: accounts[0], gas: 1000000 })
})

describe("GameNft Contract", async () => {
    it('deploys gamenft contract', async () => {
        assert.ok(gameNft.options.address)
    })
})



const DexAggregator = artifacts.require("./DexAggregator.sol")
const wethABI = require("./tokenABI/WETH.json")

const usdcABI = require("./tokenABI/USDC.json")


const { solidity } = require("ethereum-waffle")
const chai = require("chai");

const assert = chai.assert;
const expect = chai.expect;
chai.use(solidity)

contract("Dex Aggregator", ([deployer, user1, user2]) => {
    let aggregator
    const WETH = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"
    const USDC = "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"

    before(async () => {
        aggregator = await DexAggregator.deployed();
    })
    describe("UNISWAP", () => {
        it("get amounts out given an input amount", async () => {
            
        }) 
    })
    describe("SUSHISWAP", () => {
        it("get amounts out given an input amount", async () => {
            
        })
    })
    describe("best rate", () => {
        it("calculates best rate for amount OUT", async () => {
            
        })

    })

    describe("swapping", () => {
        

        before(async () => {})
        it("initial balances", async () => { 

        })
        

        it("performs swap", async () => {

        })
        
        it("swaps correct amount of token A", async () => {

        })
        

        it("post swap balances", async () => { 

        })
        
        it("swap in reverse direction", async () => {

        })
        

        it("verifies balance change", async () => {
            
        })
        


    })

    

})
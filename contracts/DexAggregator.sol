pragma solidity 0.8.6;

import "";
import "";



contract DexAggregator {
    
    constructor() {
        
    }

    // Returns max amount of Weth to exchange for usdcAmount
    function usdcToWeth(uint usdcAmount) public {}

    // returns max amount of USDC to exchange for wethAmount  
    function wethToUSDC(uint wethAmount) public {}

    // return 2 uints
    // first element is the index of the exchange with best rate, 
    // second element is the amount of token for amountIn given the path
    function highestAmountOut(address[] memory path, uint amountIn) public view returns(uint, uint) {}


    // FOR TESTING PURPOSES

    // returns exchange rate for sushi swap
    function sushiRate(address[] memory path, uint amountIn) public view returns(uint) {}

    // returns exchange rate for uniswap
    function uniRate(address[] memory path, uint amountIn) public view returns(uint) {}

}
const CoToken = artifacts.require('./CoToken.sol')
const ERC20 = artifacts.require('./ERC20.sol')

contract("CoToken",(accounts) => {
    const tokenOwner = accounts[0]
    const testAddress = accounts[1]
  
    //Initialise total supply, sell price and buy price
    let totalSupply = 0;
    let sellPrice = web3.utils.toWei('1', 'ether');
    let buyPrice = web3.utils.toWei('1', 'ether');

    
})
const CoToken = artifacts.require('./CoToken.sol')
//const ERC20 = artifacts.require('./ERC20.sol')

contract("CoToken",(accounts) => {
    const tokenOwner = accounts[0]
    const tokenBuyer= accounts[1]
  
    //Initialise total supply, sell price and buy price
    const totalSupply = 0;
    const mintTokens = 3;
    const burnTokens = 2; 
    const sellPrice = web3.utils.toWei('1', 'ether');
    const buyPrice = web3.utils.toWei('20', 'ether');

    it("it should correctly mint tokens", async function () {
        //fetch instance of contract
        let CoTokenInstance = await CoToken.deployed()
        //call mint function to mint 10 tokens
        await CoTokenInstance.mint(mintTokens, { from: tokenOwner, value: buyPrice})
        //retrieve updated balance for token owner
        let balance = await CoTokenInstance.balanceOf(tokenOwner)
        assert.equal(balance,mintTokens,"incorrect number of tokens")
    })

    it("it should burn correctly burn tokens", async function () {
        //fetch instance of contract
        let CoTokenInstance = await CoToken.deployed()
        //call burn function to burn 5 tokens
        await CoTokenInstance.burn(burnTokens, { from: tokenOwner})
        //retrieve updated balance for token owner
        let balance = await CoTokenInstance.balanceOf(tokenOwner)
        //get number of remaining tokens
        let tokenBalance = mintTokens - burnTokens
        assert.equal(balance,tokenBalance,"incorrect number of burn tokens")
    })

    it("it should destroy the contract", async function () {
        //fetch instance of contract
        let CoTokenInstance = await CoToken.deployed()
        
        await CoTokenInstance.destroy( {from: tokenOwner})
        console.log("The contract has been destroyed")


    })






})
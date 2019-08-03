const CoToken = artifacts.require('./CoToken.sol')
//const ERC20 = artifacts.require('./ERC20.sol')

contract("CoToken",(accounts) => {
    const tokenOwner = accounts[0]
    const testAddress = accounts[1]
  
    //Initialise total supply, sell price and buy price
    const totalSupply = 0;
    const sellPrice = web3.utils.toWei('1', 'ether');
    const buyPrice = web3.utils.toWei('1', 'ether');

    it("it should mint 10 tokens", async function () {
        //fetch instance of contract
        let CoTokenInstance = await CoToken.deployed()
        //call mint function to mint 10 tokens
        await CoTokenInstance.mint(10, { from: tokenOwner})
        //retrieve updated balance for token owner
        let balance = await CoTokenInstance.balanceOf(tokenOwner)
        assert.equal(balance,10,"10 wasn't in tokenOwner")
    })

    it("it should burn 4 tokens", async function () {
        //fetch instance of contract
        let CoTokenInstance = await CoToken.deployed()
        //call burn function to burn 5 tokens
        await CoTokenInstance.burn(4, { from: tokenOwner})
        //retrieve updated balance for token owner
        let balance = await CoTokenInstance.balanceOf(tokenOwner)
        assert.equal(balance,6,"6 wasn't in tokenOwner")
    })

    it("it should destroy the contract", async function () {
        //fetch instance of contract
        let CoTokenInstance = await CoToken.deployed()
        await CoTokenInstance.destroy( {from: tokenOwner})
        console.log("The contract has been destroyed")


    })






})
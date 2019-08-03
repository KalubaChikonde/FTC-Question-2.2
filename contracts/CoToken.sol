pragma solidity >=0.4.17 <0.6.0;

// import "github.com/OpenZeppelin/zeppelin-solidity/contracts/ownership/Ownable.sol";
import "openzeppelin-solidity/contracts/ownership/Ownable.sol";
import "openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";

//import "installed_contracts/zeppelin/contracts/math/Ownable.sol";

contract CoToken is Ownable,ERC20 {
     uint256 constant public decimals = 10**18;
      uint public _totalSupply;

    function buyPrice(uint x) public pure returns(uint) {
        //1 Ether is 1^18 = 1000000000000000000 Wei.
       uint price = (10**16)*(x)+(2*10**17);
       // uint256 price = ((1/10)*decimals)*(x) + (2/10)*decimals ;
       return price;
    }

    function sellPrice(uint n) public pure returns(uint) {
        //1 Ether is 1^18 = 1000000000000000000 Wei.
      uint SellPrice = (10**16)*(n)+(2*10**17);
       // uint256 price = ((1/10)*decimals)*(x) + (2/10)*decimals ;
       return SellPrice;
    }

    function mint(uint amount) public payable {
        require(msg.value >= buyPrice(amount));
        _mint(msg.sender,amount);
        //_totalSupply = _tokenSupply + amount;


    }

    function burn(uint256 value) onlyOwner public payable {
         require(msg.value >= sellPrice(value));

        _totalSupply = _totalSupply - value;
        // _balances[account] = _balances[account].sub(value); // should burn from all accounts
    }

    function destroy() public onlyOwner { //onlyOwner is custom modifier
        selfdestruct(msg.sender);

    }
}
pragma solidity >=0.4.17 <0.6.0;

//
//import "github.com/OpenZeppelin/zeppelin-solidity/contracts/ownership/Ownable.sol";
   //import "github.com/OpenZeppelin/zeppelin-solidity/contracts/token/ERC20/ERC20.sol";
import "openzeppelin-solidity/contracts/ownership/Ownable.sol";
import "openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";

//import "installed_contracts/zeppelin/contracts/math/Ownable.sol";

contract CoToken is Ownable,ERC20 {
   
      uint public totalSupply_ = 0;
      uint public buyPrice_;
      uint public sellPrice_;

    function buyPrice() public returns(uint) {
        //1 Ether is 1^18 = 1000000000000000000 Wei.
       buyPrice_ = (10**16)*(totalSupply_)+(2*10**17);
       // uint256 price = ((1/10)*decimals)*(x) + (2/10)*decimals ;
       return buyPrice_;
    }

    function sellPrice() public returns(uint) {
        //1 Ether is 1^18 = 1000000000000000000 Wei.
        sellPrice_ = (10**16)*(totalSupply_)+(2*10**17);
       // uint256 price = ((1/10)*decimals)*(x) + (2/10)*decimals ;
       return sellPrice_;
    }

    function mint(uint amount) public payable {
        require(msg.value >= buyPrice_);
        _mint(msg.sender,amount);
         totalSupply_ = totalSupply_ + amount;


    }

    function burn(uint256 value) onlyOwner public payable {
         require(msg.value >= sellPrice_);

          totalSupply_ =  totalSupply_ - value;
        // _balances[account] = _balances[account].sub(value); // should burn from all accounts
    }

    function destroy() public onlyOwner { //onlyOwner is custom modifier
        selfdestruct(msg.sender);

    }
}

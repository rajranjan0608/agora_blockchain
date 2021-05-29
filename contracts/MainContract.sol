pragma solidity >=0.4.21 <0.6.0;
pragma experimental ABIEncoderV2;

import './User.sol';

contract MainContract {
    uint public userId = 0;
    mapping (uint => address) public Users;

    function createUser () public returns(address) {
        User user = new User(msg.sender);
        userId++;
        Users[userId] = address(user);
        return Users[userId];
    }

}

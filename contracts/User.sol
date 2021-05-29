pragma solidity >=0.4.21 <0.6.0;
pragma experimental ABIEncoderV2;

import './Election.sol';

contract User {
    address public userPublicAddress;

    constructor(address _userPublicAddress) public {
	userPublicAddress = _userPublicAddress;
    }

    uint public electionId = 0;
    mapping (uint => address) public Elections;

    function createElection (string[] memory _nda, uint[] memory _se, string[] memory _candidates) public returns(address) {
	require(msg.sender == userPublicAddress, "Can't create election using other's contract");
        Election election = new Election(_nda, _se, _candidates);
        electionId++;
        Elections[electionId] = address(election);
        return Elections[electionId];
    }

}

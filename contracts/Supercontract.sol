// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;
contract SuperContract {
    uint public positionX;
    uint public positionY;

    constructor () {
        positionX = 1;
        positionY = 1;
    }

    function teleport() public {
        positionX += 7777;
        positionY += 7777;
    }
}

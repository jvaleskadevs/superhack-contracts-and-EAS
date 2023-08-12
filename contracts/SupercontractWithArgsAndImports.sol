// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/Pausable.sol";

contract SuperContractWithArgsAndImports is Pausable, Ownable {
    uint public positionX;
    uint public positionY; 

    constructor (uint initX, uint initY) {
        positionX = initX;
        positionY = initY;
    }

    function teleport() public {
        positionX += 7777;
        positionY += 7777;
    }
}

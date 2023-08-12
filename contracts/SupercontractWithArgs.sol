pragma solidity ^0.8.17;
contract SuperContractWithArgs {
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

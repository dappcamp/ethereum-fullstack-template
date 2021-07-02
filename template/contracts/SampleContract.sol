pragma solidity ^0.8.0;

contract SampleContract {
    event Greet(string message);

    function greet() {
        emit Greet("Hello World!");
    }
}

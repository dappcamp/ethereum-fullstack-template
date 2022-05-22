// SPDX-License-Identifier: MIT

//@title: fundmanager.sol
//@author: karthikvellanki
//@notice: this contract makes trades to purchase and sell the underlying assets,
    //makes trades on uniswap and is called by treasurer.sol

pragma solidity ^0.8.0;

import "@uniswap/v3-periphery/contracts/libraries/TransferHelper.sol";
import "@uniswap/v3-periphery/contracts/interfaces/ISwapRouter.sol";


contract Invest {
    /**
        @dev Router used to interact with V3 pools and perform Swaps
    */
    ISwapRouter public constant uniswapRouter =
        ISwapRouter(0xE592427A0AEce92De3Edee1F18E0157C05861564);

    function getExactInputSingleParams(
        address _tokenOut,
        uint256 _amountIn,
        address _tokenIn
    ) internal view returns (ISwapRouter.ExactInputSingleParams memory) {
        uint256 deadline = block.timestamp + 15;

        uint24 fee = 3000;
        address recipient = msg.sender;
        uint256 amountOutMinimum = 1;
        uint160 sqrtPriceLimitX96 = 0;

        ISwapRouter.ExactInputSingleParams memory params = ISwapRouter
            .ExactInputSingleParams(
                _tokenIn,
                _tokenOut,
                fee,
                recipient,
                deadline,
                _amountIn,
                amountOutMinimum,
                sqrtPriceLimitX96
            );
        return params;
    }

    /**
        @notice Swaps `amountIn` of USDC for as much as possible of the underlying asset _tokenOut
        @return amountOut The amount of the received token (_tokenOut)
     */
     // _tokenIn will be replaced by the USDC address
    function swapUSDCForUnderlyingToken(
        address _tokenIn,
        address _tokenOut,
        uint256 amountIn
    ) internal returns (uint256 amountOut) {
        require(amountIn > 0, "Must pass non 0 input amount");

        //check whether _tokenIn has been allowed by the user for the amount given
        uint256 allowance = IERC20(_tokenIn).allowance(
            msg.sender,
            address(this)
        );
        require(allowance >= amountIn, "Check the token allowance");
        // Transfer amountIn of _tokenIn to this contract.
        TransferHelper.safeTransferFrom(
            _tokenIn,
            msg.sender,
            address(this),
            amountIn
        );

        // Approve uniswapRouter to spend _tokenIn.
        TransferHelper.safeApprove(_tokenIn, address(uniswapRouter), amountIn);

        ISwapRouter.ExactInputSingleParams memory params = getExactInputSingleParams(
            _tokenOut,
            amountIn,
            _tokenIn
        );

        amountOut = uniswapRouter.exactInputSingle(params);
        return amountOut;
    }

    function IndexInvestment(
        string tEtf,
        uint256 investmentAmount
    ) internal returns (uint256 numofTokens) {
        require(investmentAmount > 0, "Must pass non 0 input amount");

        // calculate numoftokens
        return numOfTokens;
    }

}
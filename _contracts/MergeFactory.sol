// SPDX-License-Identifier: MIT

/**
 *Submitted for verification at Etherscan.io on 2022-08-31
 */

// SPDX-License-Identifier: UNLICENSED

pragma solidity =0.5.16;

import "@openzeppelin/contracts-ethereum-package/contracts/Initializable.sol";

interface IBullFactory {
    event PairCreated(
        address indexed token0,
        address indexed token1,
        address pair,
        uint256
    );

    function feeTo() external view returns (address);

    function feeToSetter() external view returns (address);

    function getPair(address tokenA, address tokenB)
        external
        view
        returns (address pair);

    function allPairs(uint256) external view returns (address pair);

    function allPairsLength() external view returns (uint256);

    function createPair(address tokenA, address tokenB)
        external
        returns (address pair);

    function setFeeTo(address) external;

    function setFeeToSetter(address) external;

    function initialize(address) external;
}

interface IERC20 {
    event Approval(
        address indexed owner,
        address indexed spender,
        uint256 value
    );
    event Transfer(address indexed from, address indexed to, uint256 value);

    function name() external view returns (string memory);

    function symbol() external view returns (string memory);

    function decimals() external view returns (uint8);

    function totalSupply() external view returns (uint256);

    function balanceOf(address owner) external view returns (uint256);

    function allowance(address owner, address spender)
        external
        view
        returns (uint256);

    function approve(address spender, uint256 value) external returns (bool);

    function transfer(address to, uint256 value) external returns (bool);

    function transferFrom(
        address from,
        address to,
        uint256 value
    ) external returns (bool);
}

contract MergeFactory is Initializable {
    address public bullFactory;
    address public sushiFactory;

    function initialize(address _bullFactory, address _sushiFactory)
        public
        initializer
    {
        bullFactory = _bullFactory;
        sushiFactory = _sushiFactory;
    }

    function allPairsLength() external view returns (uint256) {
        return
            IBullFactory(bullFactory).allPairsLength() +
            IBullFactory(sushiFactory).allPairsLength();
    }

    function allPairs(uint256 index) external view returns (address) {
        if (IBullFactory(bullFactory).allPairsLength() > index)
            return IBullFactory(bullFactory).allPairs(index);
        else
            return
                IBullFactory(sushiFactory).allPairs(
                    index - IBullFactory(bullFactory).allPairsLength()
                );
    }

    function getPair(address token0, address token1)
        external
        view
        returns (address)
    {
        if (isInBullionfx(token0, token1))
            return IBullFactory(bullFactory).getPair(token0, token1);
        else return IBullFactory(sushiFactory).getPair(token0, token1);
    }

    function isInBullionfx(address token0, address token1)
        internal
        view
        returns (bool isIn)
    {
        address pair = IBullFactory(bullFactory).getPair(token0, token1);
        if (pair == address(0x0) || IERC20(pair).totalSupply() == 0)
            return false;
        return true;
    }
}

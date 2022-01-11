export const ABI = [
    {
        "inputs": [
            {
                "internalType": "contract IERC20",
                "name": "token_",
                "type": "address"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "inputs": [],
        "name": "PRBMathSD59x18__DivInputTooSmall",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "rAbs",
                "type": "uint256"
            }
        ],
        "name": "PRBMathSD59x18__DivOverflow",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "PRBMathSD59x18__MulInputTooSmall",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "rAbs",
                "type": "uint256"
            }
        ],
        "name": "PRBMathSD59x18__MulOverflow",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "prod1",
                "type": "uint256"
            }
        ],
        "name": "PRBMath__MulDivFixedPointOverflow",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "prod1",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "denominator",
                "type": "uint256"
            }
        ],
        "name": "PRBMath__MulDivOverflow",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "BuyAllardTokens",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "Claim",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "Purchased_Tokens",
        "outputs": [
            {
                "internalType": "int256",
                "name": "",
                "type": "int256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "StartUnlock",
                "type": "uint256"
            }
        ],
        "name": "SetUnlock_Start",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "TokensAvailable",
        "outputs": [
            {
                "internalType": "int256",
                "name": "",
                "type": "int256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "Unlock_Start",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "beneficiarys",
        "outputs": [
            {
                "internalType": "int256",
                "name": "",
                "type": "int256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "manager",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "token",
        "outputs": [
            {
                "internalType": "contract IERC20",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
];

export const mainContractAddress = "0xCf868Bde45935E46973dCFCc5a3F9591B4B0f72d";
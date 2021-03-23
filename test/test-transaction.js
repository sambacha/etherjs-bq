const ethers = require('ethers');

let abi = {
    "constant": false,
    "inputs": [
        {
            "name": "_kittyId",
            "type": "uint256"
        },
        {
            "name": "_startingPrice",
            "type": "uint256"
        },
        {
            "name": "_endingPrice",
            "type": "uint256"
        },
        {
            "name": "_duration",
            "type": "uint256"
        }
    ],
    "name": "createSaleAuction",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
};

var interface_instance = new ethers.utils.Interface([abi]);

var result = {};
try {
    // https://etherscan.io/tx/0x49f0386560428eeeae4baf7f140af24a5d458ee77a0a1ff6597337bf3ddc122e
    var parsedTransaction = interface_instance.parseTransaction({
        data: '0xbfc8bfce0f407e3c817e4fbb95f7cee32e724af331a9eb83bcd1088509539f6b7d789f4a00000000000000000000000096fdb4434cb6f90df599e32bd03c207fd99e41da000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000003400000000000000000000000000000000000000000000000000000000000000284d46b02c3000000000000000000000000000000000000000000000000000000000000002000000000000000000000000096fdb4434cb6f90df599e32bd03c207fd99e41da000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000003782dace9d900000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000600db47014173ea26a6486ad5d5eb0ad142b8ee59a7106c4fc0f969733644de7a255a52c000000000000000000000000000000000000000000000000000000000000018000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000044025717920000000000000000000000000e3a2a1f2146d86a604adc220b4967a898d7fe070000000000000000000000000000000000000000000000000000000001b0db4a000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000024f47261b0000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc2000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000421c4c551a2a5158fd2e17af0188827823cd5abfe48c14e2d720c1ffa6edb26f22c927ddab3234d64d772f58244ab774bf5a0dc3fd6c73d878ff7e3688adb6693a8d03000000000000000000000000000000000000000000000000000000000000'
    });

    var parsedArgs = parsedTransaction.args;

    if (parsedArgs.length >= abi.inputs.length) {
        for (var i = 0; i < abi.inputs.length; i++) {
            var paramName = abi.inputs[i].name;
            var paramValue = parsedArgs[i];
            if (abi.inputs[i].type === 'address' && typeof paramValue === 'string') {
                paramValue = paramValue.toLowerCase();
            }
            result[paramName] = parsedArgs[i];
        }
    }
} catch (e) {
    result['error'] = e.message;
}

console.log(result);
require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz kiwi october slab chapter deny radar protect good opinion suit turn'; 
let testAccounts = [
"0x8b80487213eb887cd7795dab056cb6c2a7568f3dd215178987705d0a89b6617a",
"0x4a9e566186fa406a8aaedf1db95233973bcb6d113ade2833e92d049510b4727f",
"0x38bd5a5821eb50b4fecf80c05ffe050519ac8b0d17a8dff3bd92b38eb9e0ba12",
"0x72d3093eecbe4d007cc122498b9450d9b834e3f83b3aea75df727c7d028ba955",
"0x1015a8a4cf3c7531439955dbb31c2aa466bccaa95be4c52c3bd4e3704eb9dc12",
"0xfad60cce056927ac32a12d602b046506d22bb0db8868e4a7ebcb98dad6efd7cf",
"0xcca356bd44de9ca107a6ca1e60407e9f63281de8633594d019b129e204f01ce3",
"0xc2d824440c3816b624549ba6e7de19e6007f38a1a13256f29cc8725e40ea5376",
"0x165ea4f844ee377029635354b5f56658c2fee21a45c795d75a7c9092d2e9b1e7",
"0xe7a00cb1fecea724846aed6dc243fdcdba91b59f9ec6153835bde79b4cd02b94"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


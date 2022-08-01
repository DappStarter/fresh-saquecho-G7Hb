require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'grid nasty fresh space strong radar shift protect gloom drop slot general'; 
let testAccounts = [
"0x49fedb93bcb89454189198f281f3c4254742e820445473d845b1e8462604bd57",
"0x887a4777884a0c5f988d74c767b3b1544449d4f47b21b789f60078af1e8c671c",
"0x8266488edf9d7f1ed05798ecc9fb7267dcafb9ca84b5ba7e420cf30b0f3f155e",
"0x59bd434e4980c46c2dd40ade3d17ce6bec3ed8ef17728c57de8f1d17413c17b6",
"0xedc6930af4feae0da4557c86d2226b11668ce5401a9302b636dbcadd89ccf1ff",
"0x135c77876ead720d1fd7bd9935848299fea4dba8b39134bbc29f05cee93b9d9f",
"0xef2a53bbc2589a8fae19b876d4e5f2687a751c1e8bdfe6665919725b15c48392",
"0x3ae1ff914efc903d1a8104d7db89d6d9bf0ffa8bd9efe6212849fff02e37ff30",
"0x7f18a732f04cd5b767cca463fa110bbebd89d32d055f2bc16f9a4ecd335d583a",
"0xbe6f04da72a0f679fb8398c291bca04357b59b65fb9fdbae4613ed16be5b6e97"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};



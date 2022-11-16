// calculate random bitcoin wallet address
var bitcoin = require("bitcoinjs-lib");
var keyPair = bitcoin.ECPair.makeRandom();
var address = keyPair.getAddress();
console.log(address);

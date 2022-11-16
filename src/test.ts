// calculate random bitcoin wallet address
// @ts-expect-error TS(2580): Cannot find name 'require'. Do you need to install... Remove this comment to see the full error message
var bitcoin = require("bitcoinjs-lib");
var keyPair = bitcoin.ECPair.makeRandom();
var address = keyPair.getAddress();
console.log(address);

var crypto = require('crypto-js');

var secretMessage = {
	name: 'Andrew',
	secretName: '007'
};
var secretKey = '123abc';

// Encrypt message
var encryptedMessage = crypto.AES.encrypt(
	JSON.stringify(secretMessage), secretKey
	);
console.log('encrypted Message: ' + encryptedMessage);

// Decrypt message
var bytes = crypto.AES.decrypt(encryptedMessage, secretKey);
var decryptedMessage = JSON.parse(bytes.toString(crypto.enc.Utf8));

console.log('Decrypted message: ' + decryptedMessage);
console.log(decryptedMessage.secretName);
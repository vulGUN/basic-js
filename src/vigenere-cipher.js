const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }

    message = message.toUpperCase();
    key = key.toUpperCase();
    let encryptedMessage = '';
    let keyIndex = 0;

    for (let i = 0; i < message.length; i++) {
      if (/[A-Z]/.test(message[i])) {
        const messageCharCode = message.charCodeAt(i) - 65;
        const keyCharCode = key.charCodeAt(keyIndex % key.length) - 65;
        const encryptedCharCode = ((messageCharCode + keyCharCode) % 26) + 65;
        encryptedMessage += String.fromCharCode(encryptedCharCode);
        keyIndex++;
      } else {
        encryptedMessage += message[i];
      }
    }

    return this.isDirect ? encryptedMessage : encryptedMessage.split('').reverse().join('');
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error('Incorrect arguments!');
    }

    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();
    let decryptedMessage = '';
    let keyIndex = 0;

    for (let i = 0; i < encryptedMessage.length; i++) {
      if (/[A-Z]/.test(encryptedMessage[i])) {
        const encryptedCharCode = encryptedMessage.charCodeAt(i) - 65;
        const keyCharCode = key.charCodeAt(keyIndex % key.length) - 65;
        const decryptedCharCode = ((encryptedCharCode - keyCharCode + 26) % 26) + 65;
        decryptedMessage += String.fromCharCode(decryptedCharCode);
        keyIndex++;
      } else {
        decryptedMessage += encryptedMessage[i];
      }
    }

    return this.isDirect ? decryptedMessage : decryptedMessage.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine,
};

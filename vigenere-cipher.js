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
   constructor(flag = true) {
      this.reverseflag = flag;
   }
   encrypt(string, key) {
      if (string === undefined || key === undefined) {
         throw new Error('Incorrect arguments!')
      }
      let abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      let bigStr = string.toUpperCase();
      let result = [];
      let encryption = [];
      let stackShifr = key.split('');

      for (let i = 0; i < string.length; i++) {
         if (string[i] === ' ') {
            encryption.push(' ');
            stackShifr.unshift('!');
         } else {
            if (stackShifr[i] === undefined) {
               stackShifr = key.split('');
               string = string.slice(i);
               i = 0;
            }
            encryption.push(stackShifr[i].toUpperCase());
         }
      }
      for (let i = 0; i < bigStr.length; i++) {
         let index = 0;
         if (abc.indexOf(bigStr[i]) > -1) {
            if ((abc.indexOf(bigStr[i]) + abc.indexOf(encryption[i])) > abc.length - 1) {
               index = Math.abs(abc.length - (abc.indexOf(bigStr[i]) + abc.indexOf(encryption[i])));
            } else {
               index = abc.indexOf(bigStr[i]) + abc.indexOf(encryption[i]);
            }
            result.push(abc[index]);
         } else {
            result.push(bigStr[i]);
         }
      }
      if (this.reverseflag === false) {
         return result.reverse().join('');
      } else return result.join('');
   }
   decrypt(string, key) {
      if (string === undefined || key === undefined) {
         throw new Error('Incorrect arguments!')
      }
      let abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      let bigStr = string.toUpperCase();
      let result = [];

      let encryption = [];
      let stackShifr = key.split('');
      for (let i = 0; i < string.length; i++) {
         if (string[i] === ' ') {
            encryption.push(' ');
            stackShifr.unshift('!');
         } else {
            if (stackShifr[i] === undefined) {
               stackShifr = key.split('');
               string = string.slice(i);
               i = 0;
            }
            encryption.push(stackShifr[i].toUpperCase());
         }
      }
      for (let i = 0; i < bigStr.length; i++) {
         let index = 0;
         if (abc.indexOf(bigStr[i]) > -1) {
            if ((abc.indexOf(bigStr[i]) < abc.indexOf(encryption[i]))) {
               index = Math.abs(abc.length + (abc.indexOf(bigStr[i]) - abc.indexOf(encryption[i])));
            } else {
               index = abc.indexOf(bigStr[i]) - abc.indexOf(encryption[i]);
            }
            result.push(abc[index]);
         } else {
            result.push(bigStr[i]);
         }
      }
      if (this.reverseflag === false) {
         return result.reverse().join('');
      } else return result.join('');
   }
}

module.exports = {
   VigenereCipheringMachine
};

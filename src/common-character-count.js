const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let count = 0;
  for (let i = 0; i < s2.length; i++) {
    if (s1.includes(s2[i])) {
      let re = new RegExp(s2[i]);
      let reg = new RegExp(s1.split('').find((x) => x === s2[i]));
      count++;
      s2 = s2.replace(re, '');
      s1 = s1.replace(reg, '');
      --i;
    }
  }
  return count;
}

module.exports = {
  getCommonCharacterCount,
};

const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const a = [];
  let count = 1;
  str = str.split('');
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) count++;
    else {
      a.push(count + str[i]);
      count = 1;
    }
  }
  return a.join('').replace(/1/g, '');
}

module.exports = {
  encodeLine,
};

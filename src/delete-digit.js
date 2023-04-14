const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */

function deleteDigit(n) {
  const arr = [];
  n = n.toString();
  for (let i = 0; i < n.length; i++) {
    arr.push(+n.replace(n.slice(i, i + 1), ''));
  }
  return Math.max(...arr);
}

module.exports = {
  deleteDigit,
};

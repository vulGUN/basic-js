const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let newArr = arr.filter((i) => i !== -1).sort((a, b) => a - b);
  let index = 0;
  arr = arr.map((i) => {
    if (i !== -1) return newArr[index++];
    else return i;
  });
  return arr;
}

module.exports = {
  sortByHeight,
};

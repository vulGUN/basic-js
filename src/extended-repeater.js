const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const repeatTimes = options && typeof options.repeatTimes === 'number' ? options.repeatTimes : 1;
  const separator = options && typeof options.separator === 'string' ? options.separator : '+';
  const addition = options && typeof options.addition !== 'undefined' ? String(options.addition) : '';
  const additionRepeatTimes = options && typeof options.additionRepeatTimes === 'number' ? options.additionRepeatTimes : 1;
  const additionSeparator = options && typeof options.additionSeparator === 'string' ? options.additionSeparator : '|';

  let result = '';

  for (let i = 0; i < repeatTimes; i++) {
    result += str;

    for (let j = 0; j < additionRepeatTimes; j++) {
      result += addition;
      if (j < additionRepeatTimes - 1) {
        result += additionSeparator;
      }
    }

    if (i < repeatTimes - 1) {
      result += separator;
    }
  }

  return result;
}

module.exports = {
  repeater,
};

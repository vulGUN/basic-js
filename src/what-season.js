const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  const winter = [11, 0, 1],
    spring = [2, 3, 4],
    summer = [5, 6, 7],
    autoumn = [8, 9, 10];
  const month = date.getMonth();

  if (!date) return 'Unable to determine the time of year!';
  else if (winter.includes(month)) return 'winter';
  else if (spring.includes(month)) return 'spring';
  else if (summer.includes(month)) return 'summer';
  else if (autoumn.includes(month)) return 'autoumn';
  else throw new Error('Division by zero');
}

module.exports = {
  getSeason,
};

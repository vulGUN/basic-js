const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  const pattern = /@([^\s@]+\.[^\s@]+)$/;
  const result = email.match(pattern);
  if (result && result.length === 2) {
    return result[1];
  }
  return null;
}

module.exports = {
  getEmailDomain,
};

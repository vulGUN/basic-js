const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const dnsStats = {};

  // Проходимся по каждому домену из массива
  for (let i = 0; i < domains.length; i++) {
    const domain = domains[i];
    const domainParts = domain.split('.').reverse();

    let dnsPart = '';

    for (let j = 0; j < domainParts.length; j++) {
      dnsPart += `.${domainParts[j]}`;
      if (!dnsStats[dnsPart]) {
        dnsStats[dnsPart] = 1;
      } else {
        dnsStats[dnsPart]++;
      }
    }
  }

  return dnsStats;
}

module.exports = {
  getDNSStats,
};

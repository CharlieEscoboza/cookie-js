const DATE_SCALE_RE = /mins|hours|days/;
const BASE_TIME = 60 * 1000;

const internals = {};

/**
 * Parse time to milliseconds
 *
 * @param {string} date - date string
 * @returns {undefined|number} undefined if time is not a number | time in milliseconds
 * @private
 */
internals.parseTimeToMilliseconds = (date) => {
  const dateScale = date.match(DATE_SCALE_RE)[0] || 'mins';
  const time = date.replace(DATE_SCALE_RE, '').trim();
  const timeNumber = parseInt(time, 10);

  if (isNaN(time)) {
    console.error('Time provided is not a number');
    return;
  }

  let expiresTime;

  switch (dateScale) {
    case 'mins':
      expiresTime = timeNumber * BASE_TIME;
      break;
    case 'hours':
      expiresTime = timeNumber * 60 * BASE_TIME;
      break;
    case 'days':
      expiresTime = timeNumber * 60 * 24 * BASE_TIME;
      break;
  }

  return expiresTime;
};

/**
 * Parse time to
 *
 * @param {string} date - date string
 * @returns {undefined|number} undefined if date passed is not a string | time in milliseconds
 * @public
 */
const parseDate = (date) => {

  if (typeof(date) !== 'string'){
    console.error('Cannot parse a non string date');
    return;
  }

  return internals.parseTimeToMilliseconds(date);
};

export {
  internals as __internals__,
  parseDate as default
};

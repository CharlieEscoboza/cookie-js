/**
 * is Browser helper
 *
 * @param {undefined} undefined
 * @returns {boolean} true if is execute it in a browser
 * @public
 */
export default isBrowser = () => {
  return typeof(window) !== 'undefined';
};

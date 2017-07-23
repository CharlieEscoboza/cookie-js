/**
 * is Browser helper
 *
 * @returns {boolean} true if is execute it in a browser
 * @public
 */
const isBrowser = () => typeof (window) !== 'undefined';

export default isBrowser;

import isBrowser from './helpers/browser';
import parseDate from './helpers/dates';

/**
 * Cookie Class
 */
export default class Cookie {
  /**
   * Set a cookie
   *
   * @param {string} name - cookie name
   * @param {string|boolean|number} value - value the cookie should hold
   * @param {string} path - path to apply the cookie
   * @param {string} expires - date when the cookie should expire. i.e.: 1 min | 1 hour | 1 day
   */
  static set({
    name,
    value = 0,
    path,
    expires
  }) {
    if (!isBrowser()) {
      console.warn('Cannot set a cookie in a no client environment'); // eslint-disable-line no-console
      return;
    }

    if (!name) {
      console.warn('Cannot set a cookie without name'); // eslint-disable-line no-console
      return;
    }

    let cookie = `${name}=${value};`;

    if (path) {
      cookie += `path=${path};`;
    }

    if (expires) {
      cookie += `expires=${parseDate(expires)}`;
    }

    document.cookie = cookie; // eslint-disable-line no-undef
  }

  /**
   * Get cookie value
   *
   * @param {string} name - cookie name
   * @returns {null|string} null if code is not execute in a browser | string with the cookie value
   */
  static get(name) {
    if (!isBrowser()) {
      console.warn('Cannot set a cookie in a no client environment'); // eslint-disable-line no-console
      return null;
    }

    const cookies = document.cookie || ''; // eslint-disable-line no-undef
    const cookiesArray = cookies.split(';');
    const cookiesObject = cookiesArray.reduce((acc, curr) => {
      const key = curr.split('=')[0];
      acc[key] = curr.split('=')[1];

      return acc;
    }, {});

    return cookiesObject[name] || '';
  }

  /**
   * Remove a cookie
   *
   * @param {string} name - cookie name
   * @returns {undefined} undefined
   */
  static remove(name) {
    if (!isBrowser()) {
      console.warn('Cannot delete a cookie in a no client environment'); // eslint-disable-line no-console
      return;
    }

    this.set({
      name,
      expires: '-1'
    });
  }
}

import isBrowser from './helpers/browser';
import parseDate from './helpers/dates';

export default class Cookie {

  static set({
    name,
    value = 0,
    path,
    expires
             }) {

    if (!isBrowser()) {
      console.warn('Cannot set a cookie in a no client environment');
      return;
    }

    if (!name) {
      console.warn('Cannot set a cookie without name');
      return;
    }

    let cookie = `${name}=${value};`;

    if (path) {
      cookie += `path=${path};`;
    }

    if (expires) {
      cookie += `expires=${parseDate(expires)}`;
    }

    document.cookie = cookie;
  }

  static get(name) {

    if (!isBrowser()) {
      console.warn('Cannot set a cookie in a no client environment');
      return;
    }

    const cookies = document.cookie || '';
    const cookiesArray = cookies.split(';');
    const cookiesObject = cookiesArray.reduce((acc, curr) => {
      const key = curr.split('=')[0];
      acc[key] = curr.split('=')[1];

      return acc;
    }, {});

    return cookiesObject[name] || '';
  }

  static delete(name) {

    if (!isBrowser()) {
      console.warn('Cannot delete a cookie in a no client environment');
      return;
    }

    this.set({
      name,
      expires: '-1'
    });
  }
}

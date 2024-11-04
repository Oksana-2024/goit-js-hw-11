export const API_KEY = '46863528-4fa0c0b33a1ffe205dd5514d4';

export const BASE_URL = 'https://pixabay.com/api/';

export function fetchData(url = BASE_URL, options = {}) {
  return fetch(url, options).then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  });
}

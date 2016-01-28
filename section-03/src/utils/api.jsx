const Fetch = require('whatwg-fetch');

const rootUrl = 'https://api.imgur.com/3/';
const apiKey = '40ecdf2f4cc582a';

module.exports = {
  get(url) {
    return fetch(`${rootUrl}${url}`, {
      headers: {
        Authorization: `Client-ID ${apiKey}`,
      },
    })
    .then((response) => {
      return response.json();
    });
  },
};

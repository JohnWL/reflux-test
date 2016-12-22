var Fetch = require('whatwg-fetch');
var baseURL = 'http://localhost:6069';

var service = {
    get: function(url) {
        return fetch(baseURL + url)
        .then(function(response) {
            return response.json();
        });
    },
    post: function(url, ingredient) {
        return fetch(baseURL + url, {
            headers: {
                'Accept': 'text/plain',
                'Content-Type': 'application/json'
            },
            method: 'post',
            body: JSON.stringify(ingredient)
        }).then(function(response) {
            return response;
        });
    }
};

module.exports = service;

var React = require('react');
var App = require('./index');
var div = document.querySelector('[data-js="appMain"]');

var getData = function(url, callback) {
  console.log('Loading JSON');
  var request = new XMLHttpRequest;
  request.open('GET', url);
  request.onload = callback;
  request.send();
};

var setSessionData = function(e) {
  console.log('Storing Data');
  sessionStorage.data = e.target.responseText;
  render();
};

var render = function() {
  React.render(<App />, div)
}

if (sessionStorage.data === undefined) {
  console.log('Retrieving initial data from server');
  getData('/palettes.json', setSessionData);
  } else {
  console.log('Session Storage used for initial data');
  render();
};

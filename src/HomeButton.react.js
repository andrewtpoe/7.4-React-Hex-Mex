var React = require('react');

var HomeButton = React.createClass({

  render: function() {
    console.log('Rendering Show All Button');

    return (
      <button className="top__index" onClick={this._triggerShowAll}>Show All</button>
    )
  },

  _getData: function(url, callback) {
    console.log('Loading JSON');
    var request = new XMLHttpRequest;
    request.open('GET', url);
    request.onload = callback;
    request.send();
  },

  _setSessionData: function(e) {
    console.log('Storing Data');
    sessionStorage.data = e.target.responseText;
    this.props.router.setRoute('/');
  },

  _triggerShowAll: function(event) {
    this._getData('/palettes.json', this._setSessionData);
  }

});

module.exports = HomeButton;

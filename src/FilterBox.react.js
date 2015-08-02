var React = require('react');

var FilterBox = React.createClass({

  getInitialState: function() {
    return { userInput: ''};
  },

  render: function() {
    console.log('Rendering FilterBox');

    return (
      <input className="top__filterBy" ref="input" placeholder="Enter search keyword..." value={this.state.userInput} autoFocus="true" onChange={this._updateValue} onKeyPress={this._triggerFilter}/>
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
    this._filter(this.refs.input.getDOMNode().value.trim());
  },

  _filter: function(keyword) {
    console.log('Filtering by keyword: ' + keyword);
    var data = JSON.parse(sessionStorage.data);
    var filteredData = data.filter(function(palette) {
      user = palette.user.name.toUpperCase();
      cat = palette.category.toUpperCase();
      title = palette.title.toUpperCase();
      key = keyword.toUpperCase();
      return cat === key || title === key || user === key;
    });
    sessionStorage.data = JSON.stringify(filteredData);
    this.setState({ userInput: ''}, function() {
      React.findDOMNode(this.refs.input).focus();
      this.props.router.setRoute('/');
    });
  },

  _triggerFilter: function(event) {
    var key = (event.which);
    if (key === 13) {
      event.preventDefault();
      var keyword = this.refs.input.getDOMNode().value.trim();
      if (keyword !== "") {
        console.log('Filter has been triggered');
        this._getData('/palettes.json', this._setSessionData);
      };
    }
  },

  _updateValue: function(event) {
    this.setState({ userInput: event.target.value });
  }

});

module.exports = FilterBox;

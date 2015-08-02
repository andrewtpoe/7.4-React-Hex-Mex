var React = require('react');
var Router = require('director').Router;
var Palette = require('./Palette.react');
var Details = require('./Details.react');
var FilterBox = require('./FilterBox.react');
var HomeButton = require('./HomeButton.react');

var App = React.createClass({
  getInitialState: function() {
    console.log('Setting Initial State');
    // var palettes = JSON.parse(sessionStorage.data)
    return {
      data       : '',
      currentView: this._buildIndexView
    }
  },

  componentWillMount: function() {
    console.log('Running componentWillMount');
    this._initRouter();
  },

  componentDidMount: function() {
    this._getData('palettes.json', this._setSessionData);
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
    this.setState({
      data       : JSON.parse(e.target.responseText),
      currentView: this._buildIndexView
    })
  },

  _initRouter: function() {
    var self = this;
    console.log('Initializing Router');
    self.router = Router({
      '/'            : self._displayIndex,
      '/palette/:id' : self._displayDetails
    });
    self.router.configure({ html5history: true });
    self.router.init();

    document.addEventListener('click', function(e) {
      var href = e.target.attributes.href.value;
      if (href && href[0] === '/') {
        e.preventDefault();
        self.router.setRoute(href);
      };
    })
  },

  _displayIndex: function() {
    if (sessionStorage.data !== undefined) {
      console.log('Displaying Index');
      this.setState({
        data       : JSON.parse(sessionStorage.data),
        currentView: this._buildIndexView
      });
    };
  },

  _buildIndexView: function() {
    var self = this;
    console.log(this.state.data);
    if(typeof(this.state.data) === "object") {
      console.log('Building Palettes Index View');
      return (
        this.state.data.map(function(palette) {
          return <Palette palette={palette} displayDetails={self._displayDetails} key={palette.id} />;
        })
      )
    };
  },

  _displayDetails: function(id) {
    console.log('Display Details for: ' + id);
    data = JSON.parse(sessionStorage.data);
    var palette = data.filter(function(el) {
      return el.id == id
    });
    palette = palette[0];
    this.setState({
      data       : palette,
      currentView: this._buildDetailView
    })
  },

  _buildDetailView: function(id) {
    console.log('Building Palette Detail View');
    return (
      <div>
        <Palette palette={this.state.data} details={'active'} key={this.state.data.id} />
        <Details palette={this.state.data} />
      </div>
    )
  },

  render: function() {
    console.log('Rendering App Class');
    var insert = this.state.currentView();
    return (
      <div className="app">
        <HomeButton router={this.router} />
        <FilterBox router={this.router} />
        { insert }
      </div>
    )
  }

});

module.exports = App;

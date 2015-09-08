var React = require('react');
var DetailButton = require('./Palette/DetailButton.react.js');
var Title = require('./Palette/Title.react.js');
var Colors = require('./Palette/Colors.react.js');

var Palette = React.createClass({

  render: function() {
    console.log('Rendering Palette class');
    if (this.props.isActive) {
      var active = 'active';
    } else {
      var active = '';
    }
    return (
      <div className={"palette " + active}>
        <DetailButton palette={this.props.palette} isActive={this.props.isActive} navigate={this.props.navigate} />
        <Title palette={this.props.palette} />
        <Colors palette={this.props.palette} />
      </div>
    )
  }

});

module.exports = Palette;

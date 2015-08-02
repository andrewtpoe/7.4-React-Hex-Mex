var React = require('react');

var Color = React.createClass({

  render: function() {
    console.log('Rendering Palette Color');
    var divStyle = {
      backgroundColor: this.props.color
    };
    return (
      <div className="palette__color" style={divStyle}></div>
    )
  },

});

module.exports = Color;

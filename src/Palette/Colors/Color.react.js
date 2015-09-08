var React = require('react');

var Color = React.createClass({

  render: function() {
    var divStyle = {
      backgroundColor: this.props.color
    };
    return (
      <div className="palette__color" style={divStyle}></div>
    )
  },

});

module.exports = Color;

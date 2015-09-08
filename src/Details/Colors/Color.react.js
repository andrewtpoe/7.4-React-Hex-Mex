var React = require('react');

var Color = React.createClass({

  render: function() {
    console.log('Rendering Detail Color');
    var divStyle = {
      backgroundColor: this.props.color
    };
    var self = this;
    var msg = function() {
      return {__html: self.props.message + self.props.color };
    };
    
    return (
      <div className="details__color" style={divStyle}>
        <div className="details__colorInner" dangerouslySetInnerHTML={msg()}></div>
      </div>
    )
  },

});

module.exports = Color;

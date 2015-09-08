var React = require('react');

var DetailButton = React.createClass({

  render: function() {
    if (this.props.isActive) {
      this.href = "/";
    } else {
      this.href = "/palette/" + this.props.palette.id;
    };

    return (
      <a href={this.href} className="palette__button" onClick={this._handleClick}></a>
    )
  },

  _handleClick: function(e) {
    console.log(this.props.navigate);
    e.preventDefault();
    this.props.navigate(this.href);
  }

});

module.exports = DetailButton;

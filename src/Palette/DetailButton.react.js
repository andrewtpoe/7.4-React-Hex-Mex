var React = require('react');

var DetailButton = React.createClass({

  render: function() {
    console.log('Rendering Detail Button');
    if (this.props.details === 'active') {
      var href = "/";
    } else {
      var href = "/palette/" + this.props.palette.id;
    };

    return (
      <button className="palette__button" href={href}></button>
    )
  },

});

module.exports = DetailButton;

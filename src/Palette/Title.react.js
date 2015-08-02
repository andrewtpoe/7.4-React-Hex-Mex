var React = require('react');

var Title = React.createClass({

  render: function() {
    console.log('Rendering Palette Title');
    return (
      <div className="palette__title">
        {this.props.palette.title}
      </div>
    )
  },

});

module.exports = Title;

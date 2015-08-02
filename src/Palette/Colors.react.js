var React = require('react');
var Color = require('./Colors/Color.react.js')

var Colors = React.createClass({

  render: function() {
    var p = this.props.palette;
    var cols = [
      p.colours.pop,
      p.colours.contrastingSubDominant,
      p.colours.subDominant,
      p.colours.contrastingDominant,
      p.colours.dominant
    ];

    return (
      <div className="palette__colors">
        {
          cols.map(function(color) {
            return <Color color={color} key={color} />;
          })
        }
      </div>
    )
  },

});

module.exports = Colors;

var React = require('react');
var Color = require('./Colors/Color.react.js')

var Colors = React.createClass({

  render: function() {
    console.log('Rendering Detail Colors');
    var p = this.props.palette;
    var cols = [
      p.colours.dominant,
      p.colours.contrastingDominant,
      p.colours.subDominant,
      p.colours.contrastingSubDominant,
      p.colours.pop,
    ];

    var msgs = [
      "Dominant<br>",
      "Contrasting<br>Dominant<br>",
      "Sub-Dominant<br>",
      "Contrasting<br>Sub-Dominant<br>",
      "Pop<br>"
    ];

    var i;
    var arr = [];
    for (i = 0; i < cols.length; i++) {
      arr.push(<Color color={cols[i]} message={msgs[i]} key={cols[i]} />)
    };

    return (
      <div className="details__colors">
        { arr }
      </div>
    )
  },

});

module.exports = Colors;

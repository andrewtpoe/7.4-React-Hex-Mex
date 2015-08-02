;(function() {

    // _updateData(newData) {
    //   console.log('Updating Data');
    // },

      // var homeButton = document.querySelector('[data-js="homeButton"]');
      // homeButton.addEventListener('click', function() {
      //   console.log('Home Button Clicked');
      //   var path = "/";
      //   this.router.setRoute(path);
      // });
    // },

    // render: function() {
    //   console.log('Rendering App class');
    //   return(
    //     <div className="app">
    //     </div>
    //   )
    // },
    //
    // _displayIndex: function() {
    //   console.log('Displaying Index');
    //   if (this.state.data !== []) {
    //     this.setState({ currentView: this._buildPalettes() });
    //   }
    // },
    //
    // _buildPalettes: function() {
    //   console.log('Building All Palettes');
    //   return (
    //     this.state.data.map(function(palette) {
    //       return <Palette palette={palette} key={palette.id} />;
    //     }))
    // }

  // });








  // var PaletteDetail = React.createClass({
  //
  // });
  //
  // var PaletteTitle = React.createClass({
  //
  // });
  //
  // var PaletteColors = React.createClass({
  //
  // });
  //
  // var PaletteColor = React.createClass({
  //
  // });





























  //
  // var buildPaletteDiv = function(palette) {
  //
  //   var colors = document.createElement('div');
  //   colors.className = "palette__colors";
  //
  //   var cols = [
  //     palette.colours.pop,
  //     palette.colours.contrastingSubDominant,
  //     palette.colours.subDominant,
  //     palette.colours.contrastingDominant,
  //     palette.colours.dominant
  //   ];
  //
  //   var el, i;
  //
  //   for (i = 0; i < cols.length; i++) {
  //     el = document.createElement('div');
  //     el.className = "palette__color";
  //     el.style.backgroundColor = cols[i];
  //     colors.appendChild(el);
  //   };
  //
  //   div.appendChild(button);
  //   div.appendChild(title);
  //   div.appendChild(colors);
  //
  //   return div;
  // };
  //
  // var buildDetailsDiv = function(palette) {
  //   var div = document.createElement('div');
  //   div.className = "details";
  //   div.id = palette.id;
  //
  //   var colorIdDiv = document.createElement('div');
  //   colorIdDiv.className = "details__colorId";
  //   colorIdDiv.innerText = "Color ID: " + palette.id;
  //
  //   var colorCatDiv = document.createElement('div');
  //   colorCatDiv.className = "details__colorCategory";
  //   colorCatDiv.innerText = "Category: " + palette.category;
  //
  //   var userIdDiv = document.createElement('div');
  //   userIdDiv.className = "details__userId";
  //   userIdDiv.innerText = "User ID: " + palette.user.id;
  //
  //   var userNameDiv = document.createElement('div');
  //   userNameDiv.className = "details__userName";
  //   userNameDiv.innerText = "User Name: " + palette.user.name;
  //
  //   var colorsDiv = document.createElement('div');
  //   colorsDiv.className = "details__colorsDiv";
  //
  //   var colors = [
  //     palette.colours.dominant,
  //     palette.colours.contrastingDominant,
  //     palette.colours.subDominant,
  //     palette.colours.contrastingSubDominant,
  //     palette.colours.pop
  //   ];
  //
  //   var msgs = [
  //     "Dominant<br>",
  //     "Contrasting<br>Dominant<br>",
  //     "Sub-Dominant<br>",
  //     "Contrasting<br>Sub-Dominant<br>",
  //     "Pop<br>"
  //   ];
  //
  //   var el, elHover, i;
  //
  //   for (i = 0; i < colors.length; i++) {
  //     el = document.createElement('div');
  //     el.className = "details__color";
  //     el.style.backgroundColor = colors[i];
  //     elHover = document.createElement('div');
  //     elHover.className = "details__colorInner";
  //     elHover.innerHTML = msgs[i] + colors[i];
  //     el.appendChild(elHover);
  //     colorsDiv.appendChild(el);
  //   };
  //
  //   div.appendChild(colorIdDiv);
  //   div.appendChild(colorCatDiv);
  //   div.appendChild(userIdDiv);
  //   div.appendChild(userNameDiv);
  //   div.appendChild(colorsDiv);
  //
  //   return div;
  // };
  //
  // var displayIndex = function() {
  //   console.log('Displaying index')
  //   clearAppMain();
  //   var appMain = document.querySelector('[data-js="appMain"]');
  //   data.forEach(function(palette) {
  //     var paletteDiv = buildPaletteDiv(palette);
  //     appMain.appendChild(paletteDiv);
  //   });
  //   return 'success';
  // };
  //
  // var displayDetails = function(id) {
  //   console.log('Displaying details for: ' + id);
  //   clearAppMain();
  //   var data = JSON.parse(localStorage.data);
  //   var palette = data.filter(function(el) { return el.id == id });
  //   palette = palette[0];
  //   var paletteDiv = buildPaletteDiv(palette);
  //   paletteDiv.className += " active"
  //   var detailsDiv = buildDetailsDiv(palette);
  //   var appMain = document.querySelector('[data-js="appMain"]');
  //   appMain.appendChild(paletteDiv);
  //   appMain.appendChild(detailsDiv);
  // };
  //
  // var clearAppMain = function() {
  //   var appMain = document.querySelector('[data-js="appMain"]');
  //   appMain.innerHTML = "";
  // };
  //
  //
  //


})();

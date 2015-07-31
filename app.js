;(function() {

  var storeJSON = function(e) {
    data = JSON.parse(e.target.responseText);
    localStorage.data = e.target.responseText;
    return 'success';
  };

  var loadJSON = function(url, callback) {
    var request = new XMLHttpRequest;
    request.open('GET', url);
    request.onload = callback;
    request.send();
    return 'success';
  };

  var buildPaletteDiv = function(palette) {
    var div = document.createElement('div');
    div.className = "palette";
    div.id = palette.id;

    var button = document.createElement('button');
    button.className = "palette__button";
    button.setAttribute("data-js", "paletteButton");
    button.addEventListener("click", function(event) {
      var parentClass = event.target.parentElement.className;
      if (parentClass.includes('active')) {
        event.target.parentElement.className = parentClass.split(' ').filter( function(el) { return el !== 'active' } );
        var path = "/";
        router.setRoute(path);
      } else {
        var path = "/palette/" + event.target.parentNode.id;
        router.setRoute(path)
      };
    });

    var title = document.createElement('div');
    title.className = "palette__title";
    title.innerText = palette.title;

    var colors = document.createElement('div');
    colors.className = "palette__colors";

    var cols = [
      palette.colours.pop,
      palette.colours.contrastingSubDominant,
      palette.colours.subDominant,
      palette.colours.contrastingDominant,
      palette.colours.dominant
    ];

    var el, i;

    for (i = 0; i < cols.length; i++) {
      el = document.createElement('div');
      el.className = "palette__color";
      el.style.backgroundColor = cols[i];
      colors.appendChild(el);
    };

    div.appendChild(button);
    div.appendChild(title);
    div.appendChild(colors);

    return div;
  };

  var buildDetailsDiv = function(palette) {
    var div = document.createElement('div');
    div.className = "details";
    div.id = palette.id;

    var colorIdDiv = document.createElement('div');
    colorIdDiv.className = "details__colorId";
    colorIdDiv.innerText = "Color ID: " + palette.id;

    var colorCatDiv = document.createElement('div');
    colorCatDiv.className = "details__colorCategory";
    colorCatDiv.innerText = "Category: " + palette.category;

    var userIdDiv = document.createElement('div');
    userIdDiv.className = "details__userId";
    userIdDiv.innerText = "User ID: " + palette.user.id;

    var userNameDiv = document.createElement('div');
    userNameDiv.className = "details__userName";
    userNameDiv.innerText = "User Name: " + palette.user.name;

    var colorsDiv = document.createElement('div');
    colorsDiv.className = "details__colorsDiv";

    var colors = [
      palette.colours.dominant,
      palette.colours.contrastingDominant,
      palette.colours.subDominant,
      palette.colours.contrastingSubDominant,
      palette.colours.pop
    ];

    var msgs = [
      "Dominant<br>",
      "Contrasting<br>Dominant<br>",
      "Sub-Dominant<br>",
      "Contrasting<br>Sub-Dominant<br>",
      "Pop<br>"
    ];

    var el, elHover, i;

    for (i = 0; i < colors.length; i++) {
      el = document.createElement('div');
      el.className = "details__color";
      el.style.backgroundColor = colors[i];
      elHover = document.createElement('div');
      elHover.className = "details__colorInner";
      elHover.innerHTML = msgs[i] + colors[i];
      el.appendChild(elHover);
      colorsDiv.appendChild(el);
    };

    div.appendChild(colorIdDiv);
    div.appendChild(colorCatDiv);
    div.appendChild(userIdDiv);
    div.appendChild(userNameDiv);
    div.appendChild(colorsDiv);

    return div;
  };

  var displayIndex = function() {
    console.log('Displaying index')
    var data = JSON.parse(localStorage.data);
    clearAppMain();
    var appMain = document.querySelector('[data-js="appMain"]');
    data.forEach(function(palette) {
      var paletteDiv = buildPaletteDiv(palette);
      appMain.appendChild(paletteDiv);
    });
    return 'success';
  };

  var displayDetails = function(id) {
    console.log('Displaying details for: ' + id);
    clearAppMain();
    var data = JSON.parse(localStorage.data);
    var palette = data.filter(function(el) { return el.id == id });
    palette = palette[0];
    var paletteDiv = buildPaletteDiv(palette);
    paletteDiv.className += " active"
    var detailsDiv = buildDetailsDiv(palette);
    var appMain = document.querySelector('[data-js="appMain"]');
    appMain.appendChild(paletteDiv);
    appMain.appendChild(detailsDiv);
  };

  var clearAppMain = function() {
    var appMain = document.querySelector('[data-js="appMain"]');
    appMain.innerHTML = "";
  };

  if (localStorage.data === undefined) {
    console.log('Loading & Storing JSON from server')
    loadJSON('/palettes.json', storeJSON);
  };

  var routes = {
    '/'            : displayIndex,
    '/palette/:id' : displayDetails
  };

  var router = Router(routes);
  router.configure({ html5history: true });
  router.init();

  document.addEventListener('click', function(e) {
    var href = e.target.attributes.href;
    if (href && href.value[0] === '/') {
      e.preventDefault();
      router.setRoute(href.value)
    }
  });

  var homeButton = document.querySelector('[data-js="homeButton"]');
  homeButton.addEventListener('click', function() {
    var path = "/";
    router.setRoute(path);
  });

})();

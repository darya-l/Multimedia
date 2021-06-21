/*
  Helios by HTML5 UP
  html5up.net | @ajlkn
  Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function ($) {

  var $window = $(window),
    $body = $('body'),
    settings = {

      // Carousels
      carousels: {
        speed: 4,
        fadeIn: true,
        fadeDelay: 250
      },

    };

  // Breakpoints.
  breakpoints({
    wide: ['1281px', '1680px'],
    normal: ['961px', '1280px'],
    narrow: ['841px', '960px'],
    narrower: ['737px', '840px'],
    mobile: [null, '736px']
  });

  // Play initial animations on page load.
  $window.on('load', function () {
    window.setTimeout(function () {
      $body.removeClass('is-preload');
    }, 100);
  });

  // Dropdowns.
  $('#nav > ul').dropotron({
    mode: 'fade',
    speed: 350,
    noOpenerFade: true,
    alignment: 'center'
  });

  // Scrolly.
  $('.scrolly').scrolly();

  // Nav.

  // Button.
  $(
    '<div id="navButton">' +
    '<a href="#navPanel" class="toggle"></a>' +
    '</div>'
  )
    .appendTo($body);

  // Panel.
  $(
    '<div id="navPanel">' +
    '<nav>' +
    $('#nav').navList() +
    '</nav>' +
    '</div>'
  )
    .appendTo($body)
    .panel({
      delay: 500,
      hideOnClick: true,
      hideOnSwipe: true,
      resetScroll: true,
      resetForms: true,
      target: $body,
      visibleClass: 'navPanel-visible'
    });

  // Carousels.
  $('.carousel').each(function () {

    var $t = $(this),
      $forward = $('<span class="forward"></span>'),
      $backward = $('<span class="backward"></span>'),
      $reel = $t.children('.reel'),
      $items = $reel.children('article');

    var pos = 0,
      leftLimit,
      rightLimit,
      itemWidth,
      reelWidth,
      timerId;

    // Items.
    if (settings.carousels.fadeIn) {

      $items.addClass('loading');

      $t.scrollex({
        mode: 'middle',
        top: '-20vh',
        bottom: '-20vh',
        enter: function () {

          var timerId,
            limit = $items.length - Math.ceil($window.width() / itemWidth);

          timerId = window.setInterval(function () {
            var x = $items.filter('.loading'), xf = x.first();

            if (x.length <= limit) {

              window.clearInterval(timerId);
              $items.removeClass('loading');
              return;

            }

            xf.removeClass('loading');

          }, settings.carousels.fadeDelay);

        }
      });

    }

    // Main.
    $t._update = function () {
      pos = 0;
      rightLimit = (-1 * reelWidth) + $window.width();
      leftLimit = 0;
      $t._updatePos();
    };

    $t._updatePos = function () { $reel.css('transform', 'translate(' + pos + 'px, 0)'); };

    // Forward.
    $forward
      .appendTo($t)
      .hide()
      .mouseenter(function (e) {
        timerId = window.setInterval(function () {
          pos -= settings.carousels.speed;

          if (pos <= rightLimit) {
            window.clearInterval(timerId);
            pos = rightLimit;
          }

          $t._updatePos();
        }, 10);
      })
      .mouseleave(function (e) {
        window.clearInterval(timerId);
      });

    // Backward.
    $backward
      .appendTo($t)
      .hide()
      .mouseenter(function (e) {
        timerId = window.setInterval(function () {
          pos += settings.carousels.speed;

          if (pos >= leftLimit) {

            window.clearInterval(timerId);
            pos = leftLimit;

          }

          $t._updatePos();
        }, 10);
      })
      .mouseleave(function (e) {
        window.clearInterval(timerId);
      });

    // Init.
    $window.on('load', function () {

      reelWidth = $reel[0].scrollWidth;

      if (browser.mobile) {

        $reel
          .css('overflow-y', 'hidden')
          .css('overflow-x', 'scroll')
          .scrollLeft(0);
        $forward.hide();
        $backward.hide();

      }
      else {

        $reel
          .css('overflow', 'visible')
          .scrollLeft(0);
        $forward.show();
        $backward.show();

      }

      $t._update();

      $window.on('resize', function () {
        reelWidth = $reel[0].scrollWidth;
        $t._update();
      }).trigger('resize');

    });

  });

})(jQuery);

/*map*/

mapboxgl.accessToken =
  "pk.eyJ1IjoiZGFzaGxhcHBvIiwiYSI6ImNqbjJ3aHhjZTBwZXozcGw4eW90YTY5cW0ifQ.B30zBLfnXNoQA6Wt452TwQ";

// Add the map to the page

var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/samanthalevi/ckppg20d70xtg18psmepjpzc1",
  center: [11.5690239, 48.14],
  zoom: 1.5,
});

// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl());

// add markers to map
geojson.features.forEach(function (marker) {

  // create a HTML element for each feature
  var el = document.createElement('div');
  el.className = 'marker';

  // make a marker for each feature and add it to the map
  var mrk = new mapboxgl.Marker(el);
  mrk.setLngLat(marker.geometry.coordinates)
    .setPopup(
      new mapboxgl.Popup({ offset: 25 }) // add popups
        .setHTML(
          "<h3> Hello! </h3>" +

          "<h5><b>Age:</b></h5>" + "<h5>" + marker.properties.how_old_ar + "</h5" + "</br>" +
          "<h5><b>Occupation:</b></h5>" + "<h5>" + marker.properties.what_do_yo + "</h5" + "</br>" +
          "<h5><b>Mother language:</b></h5>" + "<h5>" + marker.properties.what_is__1 + "</h5>" + "</br>" +
          "<h5><b>Desired travel destination:</b></h5>" + "<h5>" + marker.properties.what_is__3 + "</h5>"
        )
    )
    .addTo(map);

  try {
    var origin = marker.geometry.coordinates;

    var dstStr = marker.properties.Dreamdist.split(",");
    var destination = [parseFloat(dstStr[1].split(")")[0]), parseFloat(dstStr[0].split("(")[1])];

    el.addEventListener('mouseenter', () => mapArc(origin, destination));
    el.addEventListener('mouseleave', () => removeMapArc());
  } catch (error) {

  }
});

function removeMapArc() {
  if (map.getLayer("route")) {
    map.removeLayer("route");
    map.removeSource("route");
  }
  if (map.getLayer("point")) {
    map.removeLayer("point");
    map.removeSource("point");
  }
}

function mapArc(origin, destination) {
  // A simple line from origin to destination
  var route = {
    'type': 'FeatureCollection',
    'features': [
      {
        'type': 'Feature',
        'geometry': {
          'type': 'LineString',
          'coordinates': [origin, destination]
        }
      }
    ]
  };

  // A single point that animates along the route.
  // Coordinates are initially set to origin.
  var point = {
    'type': 'FeatureCollection',
    'features': [
      {
        'type': 'Feature',
        'properties': {},
        'geometry': {
          'type': 'Point',
          'coordinates': origin
        }
      }
    ]
  };

  // Calculate the distance in kilometers between route start/end point.
  var lineDistance = turf.length(route.features[0]);

  var arc = [];

  // Number of steps to use in the arc and animation, more steps means
  // a smoother arc and animation, but too many steps will result in a
  // low frame rate
  var steps = 500;

  // Draw an arc between the `origin` & `destination` of the two points
  for (var i = 0; i < lineDistance; i += lineDistance / steps) {
    var segment = turf.along(route.features[0], i);
    arc.push(segment.geometry.coordinates);
  }

  // Update the route with calculated arc coordinates
  route.features[0].geometry.coordinates = arc;

  // Used to increment the value of the point measurement against the route.
  var counter = 0;

  map.addSource('route', {
    'type': 'geojson',
    'data': route
  });

  map.addSource('point', {
    'type': 'geojson',
    'data': point
  });

  map.addLayer({
    'id': 'route',
    'source': 'route',
    'type': 'line',
    'paint': {
      'line-width': 2,
      'line-color': '#007cbf'
    }
  });

  map.addLayer({
    'id': 'point',
    'source': 'point',
    'type': 'symbol',
    'layout': {
      // This icon is a part of the Mapbox Streets style.
      // To view all images available in a Mapbox style, open
      // the style in Mapbox Studio and click the "Images" tab.
      // To add a new image to the style at runtime see
      // https://docs.mapbox.com/mapbox-gl-js/example/add-image/
      //'icon-image': 'plane (2)',
      'icon-image': 'airport-15',
      'icon-rotate': ['get', 'bearing'],
      'icon-rotation-alignment': 'map',
      'icon-allow-overlap': true,
      'icon-ignore-placement': true
    }
  });

  function animate() {
    var start =
      route.features[0].geometry.coordinates[
      counter >= steps ? counter - 1 : counter
      ];
    var end =
      route.features[0].geometry.coordinates[
      counter >= steps ? counter : counter + 1
      ];
    if (!start || !end) return;

    // Update point geometry to a new position based on counter denoting
    // the index to access the arc
    point.features[0].geometry.coordinates =
      route.features[0].geometry.coordinates[counter];

    // Calculate the bearing to ensure the icon is rotated to match the route arc
    // The bearing is calculated between the current point and the next point, except
    // at the end of the arc, which uses the previous point and the current point
    point.features[0].properties.bearing = turf.bearing(
      turf.point(start),
      turf.point(end)
    );

    // Update the source with this new data
    map.getSource('point').setData(point);

    // Request the next frame of animation as long as the end has not been reached
    if (counter < steps) {
      requestAnimationFrame(animate);
    }

    counter = counter + 1;
  }

  // Start the animation
  animate(counter);
}


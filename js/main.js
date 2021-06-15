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

var geojson = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -73.40736522319824,
          40.83348506168287
        ]
      },
      "properties": {
        "globalid": "8dabae81-25d0-49e5-8745-e37f00df2d79",
        "CreationDa": "2021-06-09T00:00:00.000Z",
        "Creator": "",
        "EditDate": "2021-06-09T00:00:00.000Z",
        "Editor": "",
        "how_old_ar": "19_25",
        "what_do_yo": "Unemployed",
        "what_is_yo": "",
        "how_often_": "Every_day",
        "how_do_you": 5,
        "have_you_e": "No",
        "if_so_what": "",
        "what_do__1": "Exploration and protractors (just because it immediately makes me think of scenes in movies), even though I know there’s much more to it than this! Haha",
        "does_somet": "Not sure",
        "would_you_": "No",
        "email": "",
        "what_is__1": "English",
        "what_is__2": "",
        "what_is__3": "",
        "do_you_thi": ""
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -0.8811399999999594,
          41.65183000000008
        ]
      },
      "properties": {
        "globalid": "91d80adb-8bf4-41d4-890d-652687f8650a",
        "CreationDa": "2021-06-09T00:00:00.000Z",
        "Creator": "",
        "EditDate": "2021-06-09T00:00:00.000Z",
        "Editor": "",
        "how_old_ar": "19_25",
        "what_do_yo": "Teaching",
        "what_is_yo": "",
        "how_often_": "Every_day",
        "how_do_you": 3,
        "have_you_e": "No",
        "if_so_what": "",
        "what_do__1": "The science behind map making.",
        "does_somet": "The North Pole is missing",
        "would_you_": "No",
        "email": "",
        "what_is__1": "Spanish",
        "what_is__2": "",
        "what_is__3": "Atenas",
        "do_you_thi": ""
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -0.8743079243409656,
          41.64655200689015
        ]
      },
      "properties": {
        "globalid": "2fc7a6a0-4763-4e35-867a-3ddd122373a6",
        "CreationDa": "2021-06-09T00:00:00.000Z",
        "Creator": "",
        "EditDate": "2021-06-09T00:00:00.000Z",
        "Editor": "",
        "how_old_ar": "19_25",
        "what_do_yo": "Im a student",
        "what_is_yo": "",
        "how_often_": "Once_a_month",
        "how_do_you": 3,
        "have_you_e": "No",
        "if_so_what": "",
        "what_do__1": "I think in maps and geography in general",
        "does_somet": "I dont know",
        "would_you_": "No",
        "email": "",
        "what_is__1": "Spanish",
        "what_is__2": "",
        "what_is__3": "",
        "do_you_thi": ""
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -0.8811399999999594,
          41.65183000000008
        ]
      },
      "properties": {
        "globalid": "3456ebd4-d0bf-4223-854a-c17cf9821c61",
        "CreationDa": "2021-06-09T00:00:00.000Z",
        "Creator": "",
        "EditDate": "2021-06-09T00:00:00.000Z",
        "Editor": "",
        "how_old_ar": "19_25",
        "what_do_yo": "Veterinary nurse",
        "what_is_yo": "",
        "how_often_": "Once_a_week",
        "how_do_you": 4,
        "have_you_e": "No",
        "if_so_what": "",
        "what_do__1": "Hard and detailed work.",
        "does_somet": "I don't think so",
        "would_you_": "No",
        "email": "",
        "what_is__1": "Spanish",
        "what_is__2": "",
        "what_is__3": "Australia",
        "do_you_thi": "essential_to_daily_life"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -0.8765558868865484,
          41.62859160621283
        ]
      },
      "properties": {
        "globalid": "5c619a89-4f4d-4218-8529-8cccf40c199c",
        "CreationDa": "2021-06-09T00:00:00.000Z",
        "Creator": "",
        "EditDate": "2021-06-09T00:00:00.000Z",
        "Editor": "",
        "how_old_ar": "19_25",
        "what_do_yo": "Studing",
        "what_is_yo": "",
        "how_often_": "Once_in_a_while",
        "how_do_you": 4,
        "have_you_e": "No",
        "if_so_what": "",
        "what_do__1": "Smart people making maps",
        "does_somet": "No",
        "would_you_": "No",
        "email": "",
        "what_is__1": "Spanish",
        "what_is__2": "",
        "what_is__3": "Singapur",
        "do_you_thi": "essential_to_daily_life"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          117.1301591800718,
          28.976633160156
        ]
      },
      "properties": {
        "globalid": "c9f27fd9-e0f4-4c16-8830-b24201c033d2",
        "CreationDa": "2021-06-09T00:00:00.000Z",
        "Creator": "",
        "EditDate": "2021-06-09T00:00:00.000Z",
        "Editor": "",
        "how_old_ar": "19_25",
        "what_do_yo": "student",
        "what_is_yo": "",
        "how_often_": "Every_day",
        "how_do_you": 5,
        "have_you_e": "Yes",
        "if_so_what": "Environment",
        "what_do__1": "I have no idea what that is when I first heard it.",
        "does_somet": "The area is distorted. Also the pole area is wrongly presented.",
        "would_you_": "Yes",
        "email": "yiweiwang4869@gmail.com",
        "what_is__1": "Chinese",
        "what_is__2": "",
        "what_is__3": "Budapest, Hungary",
        "do_you_thi": "important_for_many_tasks"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          111.07148000000008,
          -8.225899999999982
        ]
      },
      "properties": {
        "globalid": "7e453c1e-109e-4f5d-8c17-3bcc00ae26fb",
        "CreationDa": "2021-06-09T00:00:00.000Z",
        "Creator": "",
        "EditDate": "2021-06-09T00:00:00.000Z",
        "Editor": "",
        "how_old_ar": "19_25",
        "what_do_yo": "Student",
        "what_is_yo": "",
        "how_often_": "Every_day",
        "how_do_you": 5,
        "have_you_e": "Yes",
        "if_so_what": "Disaster management, population",
        "what_do__1": "Cartography is about maps, GIS and remote sensing.",
        "does_somet": "The geometry",
        "would_you_": "Yes",
        "email": "zulfa.nuraini@mail.ugm.ac.id",
        "what_is__1": "Indonesian",
        "what_is__2": "",
        "what_is__3": "Seoul, South Korea",
        "do_you_thi": "essential_to_daily_life"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          27.534950399999538,
          53.88042239999909
        ]
      },
      "properties": {
        "globalid": "c80375f3-4b88-4ea8-8e9f-cfbad4a90783",
        "CreationDa": "2021-06-09T00:00:00.000Z",
        "Creator": "",
        "EditDate": "2021-06-09T00:00:00.000Z",
        "Editor": "",
        "how_old_ar": "26_35",
        "what_do_yo": "Lecturer",
        "what_is_yo": "",
        "how_often_": "Every_day",
        "how_do_you": 5,
        "have_you_e": "Yes",
        "if_so_what": "",
        "what_do__1": "",
        "does_somet": "",
        "would_you_": "No",
        "email": "",
        "what_is__1": "Russian",
        "what_is__2": "",
        "what_is__3": "Kyiv, Ukraine",
        "do_you_thi": "important_for_many_tasks"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -0.8811399999999594,
          41.65183000000008
        ]
      },
      "properties": {
        "globalid": "798e0388-82f4-4272-8826-79e6d008f2b5",
        "CreationDa": "2021-06-09T00:00:00.000Z",
        "Creator": "",
        "EditDate": "2021-06-09T00:00:00.000Z",
        "Editor": "",
        "how_old_ar": "19_25",
        "what_do_yo": "",
        "what_is_yo": "",
        "how_often_": "Once_in_a_while",
        "how_do_you": 4,
        "have_you_e": "No",
        "if_so_what": "",
        "what_do__1": "Science that srudies maps",
        "does_somet": "at first glance, no",
        "would_you_": "No",
        "email": "",
        "what_is__1": "Spanish",
        "what_is__2": "",
        "what_is__3": "Zaragoza, Spain",
        "do_you_thi": "important_for_many_tasks"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          27.67639659999953,
          53.94744009999909
        ]
      },
      "properties": {
        "globalid": "e22a3089-203c-412a-86fe-61e95988569e",
        "CreationDa": "2021-06-09T00:00:00.000Z",
        "Creator": "",
        "EditDate": "2021-06-09T00:00:00.000Z",
        "Editor": "",
        "how_old_ar": "19_25",
        "what_do_yo": "Mapping and breathing",
        "what_is_yo": "",
        "how_often_": "Every_day",
        "how_do_you": 5,
        "have_you_e": "Yes",
        "if_so_what": "A lot of, especially while studying in the university",
        "what_do__1": "My job, my education",
        "does_somet": "Inconvenient projection",
        "would_you_": "No",
        "email": "",
        "what_is__1": "Byelorussian",
        "what_is__2": "",
        "what_is__3": "China",
        "do_you_thi": "important_for_many_tasks"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          111.07148000000008,
          -8.225963300237494
        ]
      },
      "properties": {
        "globalid": "8fd1beb4-1156-4eaf-82d6-287832a72902",
        "CreationDa": "2021-06-09T00:00:00.000Z",
        "Creator": "",
        "EditDate": "2021-06-09T00:00:00.000Z",
        "Editor": "",
        "how_old_ar": "19_25",
        "what_do_yo": "Jobless",
        "what_is_yo": "",
        "how_often_": "Every_day",
        "how_do_you": 5,
        "have_you_e": "No",
        "if_so_what": "",
        "what_do__1": "Making a map",
        "does_somet": "No",
        "would_you_": "Yes",
        "email": "yuniarpuspaningrum@gmail.com",
        "what_is__1": "Indonesian",
        "what_is__2": "",
        "what_is__3": "London, UK",
        "do_you_thi": "helpful_in_some_cases"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          115.25157869999806,
          -8.709691499999854
        ]
      },
      "properties": {
        "globalid": "70072e83-3517-4ba3-83e6-50ada4f55304",
        "CreationDa": "2021-06-09T00:00:00.000Z",
        "Creator": "",
        "EditDate": "2021-06-09T00:00:00.000Z",
        "Editor": "",
        "how_old_ar": "19_25",
        "what_do_yo": "Full-time staff at survey consultancy",
        "what_is_yo": "",
        "how_often_": "Every_day",
        "how_do_you": 5,
        "have_you_e": "Yes",
        "if_so_what": "Distribution of illegal mining area",
        "what_do__1": "Visualization of geospatial data",
        "does_somet": "Yes. It doesn't show any information. If I were from outer space I wouldn't understand what that is.",
        "would_you_": "No",
        "email": "",
        "what_is__1": "Indonesian",
        "what_is__2": "",
        "what_is__3": "Barcelona, Spain",
        "do_you_thi": "essential_to_daily_life"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          71.41929000000005,
          51.13044000000008
        ]
      },
      "properties": {
        "globalid": "ba443044-8cd8-4c92-8368-75cb2e0472e3",
        "CreationDa": "2021-06-09T00:00:00.000Z",
        "Creator": "",
        "EditDate": "2021-06-09T00:00:00.000Z",
        "Editor": "",
        "how_old_ar": "19_25",
        "what_do_yo": "Translate",
        "what_is_yo": "",
        "how_often_": "Every_day",
        "how_do_you": 5,
        "have_you_e": "No",
        "if_so_what": "",
        "what_do__1": "Study of maps",
        "does_somet": "",
        "would_you_": "No",
        "email": "",
        "what_is__1": "other",
        "what_is__2": "Kazakh",
        "what_is__3": "Maldives",
        "do_you_thi": "important_for_many_tasks"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          44.79610000000008,
          41.709070000000054
        ]
      },
      "properties": {
        "globalid": "26496ce4-a42f-4342-8a7e-0770e7b6a550",
        "CreationDa": "2021-06-09T00:00:00.000Z",
        "Creator": "",
        "EditDate": "2021-06-09T00:00:00.000Z",
        "Editor": "",
        "how_old_ar": "26_35",
        "what_do_yo": "Student",
        "what_is_yo": "",
        "how_often_": "Every_day",
        "how_do_you": 5,
        "have_you_e": "Yes",
        "if_so_what": "The oldest wine culture in Georgia ^^",
        "what_do__1": "a bridge between art, science and technology =)",
        "does_somet": "Projection (?)",
        "would_you_": "Yes",
        "email": "mariam.gambashidze@yahoo.com",
        "what_is__1": "other",
        "what_is__2": "Georgian",
        "what_is__3": "Vienna, Austria",
        "do_you_thi": "important_for_many_tasks"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -76.64062499998,
          34.10725639662334
        ]
      },
      "properties": {
        "globalid": "8da800de-9f0e-4c2e-80a2-93b218108be4",
        "CreationDa": "2021-06-09T00:00:00.000Z",
        "Creator": "",
        "EditDate": "2021-06-09T00:00:00.000Z",
        "Editor": "",
        "how_old_ar": "19_25",
        "what_do_yo": "Student",
        "what_is_yo": "",
        "how_often_": "Every_day",
        "how_do_you": 5,
        "have_you_e": "Yes",
        "if_so_what": "Hiking",
        "what_do__1": "Graphic design, navigation, science",
        "does_somet": "Yes",
        "would_you_": "Yes",
        "email": "Lydia.youngblood4@gmail.com",
        "what_is__1": "English",
        "what_is__2": "",
        "what_is__3": "Queenstown, New Zealand",
        "do_you_thi": "important_for_many_tasks"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          26.39781765639093,
          54.48291869917326
        ]
      },
      "properties": {
        "globalid": "db96c18b-0bd9-4607-8ca9-fb6bb94a487c",
        "CreationDa": "2021-06-09T00:00:00.000Z",
        "Creator": "",
        "EditDate": "2021-06-09T00:00:00.000Z",
        "Editor": "",
        "how_old_ar": "26_35",
        "what_do_yo": "",
        "what_is_yo": "",
        "how_often_": "Once_a_week",
        "how_do_you": 4,
        "have_you_e": "Yes",
        "if_so_what": "AutoCad topographic plan",
        "what_do__1": "",
        "does_somet": "image is too small but i guess there's nothing wrong",
        "would_you_": "No",
        "email": "",
        "what_is__1": "Russian",
        "what_is__2": "",
        "what_is__3": "Argentina",
        "do_you_thi": "helpful_in_some_cases"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          111.08475523504038,
          -8.197795007956051
        ]
      },
      "properties": {
        "globalid": "fced038f-1561-42b3-82d8-a476fae88e7a",
        "CreationDa": "2021-06-09T00:00:00.000Z",
        "Creator": "",
        "EditDate": "2021-06-09T00:00:00.000Z",
        "Editor": "",
        "how_old_ar": "0_18",
        "what_do_yo": "Student",
        "what_is_yo": "",
        "how_often_": "Once_in_a_while",
        "how_do_you": 4,
        "have_you_e": "No",
        "if_so_what": "",
        "what_do__1": "It's representing a geographical area on a map",
        "does_somet": "Yes",
        "would_you_": "No",
        "email": "",
        "what_is__1": "Indonesian",
        "what_is__2": "",
        "what_is__3": "Pacitan, Indonesia",
        "do_you_thi": "important_for_many_tasks"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          0,
          0
        ]
      },
      "properties": {
        "globalid": "ecb0de1b-6cbf-4469-8c70-6d78e09b2760",
        "CreationDa": "2021-06-09T00:00:00.000Z",
        "Creator": "",
        "EditDate": "2021-06-09T00:00:00.000Z",
        "Editor": "",
        "how_old_ar": "26_35",
        "what_do_yo": "Cartography",
        "what_is_yo": "",
        "how_often_": "Every_day",
        "how_do_you": 5,
        "have_you_e": "Yes",
        "if_so_what": "Parking lots, playgrounds and pavements in my area",
        "what_do__1": "Adventure and discovery",
        "does_somet": "",
        "would_you_": "No",
        "email": "",
        "what_is__1": "Russian",
        "what_is__2": "",
        "what_is__3": "Italy, Rome",
        "do_you_thi": "essential_to_daily_life"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          0,
          0
        ]
      },
      "properties": {
        "globalid": "a21989cf-b516-4dd2-8b81-f959825b8f19",
        "CreationDa": "2021-06-09T00:00:00.000Z",
        "Creator": "",
        "EditDate": "2021-06-09T00:00:00.000Z",
        "Editor": "",
        "how_old_ar": "19_25",
        "what_do_yo": "Mapping",
        "what_is_yo": "",
        "how_often_": "Every_day",
        "how_do_you": 5,
        "have_you_e": "Yes",
        "if_so_what": "Soil pollution",
        "what_do__1": "Board game \"cartograpfher\"",
        "does_somet": "Uncommon projection",
        "would_you_": "No",
        "email": "",
        "what_is__1": "Byelorussian",
        "what_is__2": "",
        "what_is__3": "Rasony, Belarus",
        "do_you_thi": "essential_to_daily_life"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -118.3367440283004,
          33.72754301118084
        ]
      },
      "properties": {
        "globalid": "00aaf504-7095-4a27-80f4-d92a8e815dd7",
        "CreationDa": "2021-06-09T00:00:00.000Z",
        "Creator": "",
        "EditDate": "2021-06-09T00:00:00.000Z",
        "Editor": "",
        "how_old_ar": "46+",
        "what_do_yo": "Retired",
        "what_is_yo": "",
        "how_often_": "Every_day",
        "how_do_you": 5,
        "have_you_e": "No",
        "if_so_what": "",
        "what_do__1": "Digital mapping of the earth and data analytics",
        "does_somet": "Greenland does not look right",
        "would_you_": "Yes",
        "email": "Sami.Levi7@gmail.com",
        "what_is__1": "",
        "what_is__2": "",
        "what_is__3": "Maui, USA",
        "do_you_thi": "essential_to_daily_life"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          27.56546000000003,
          53.90374000000002
        ]
      },
      "properties": {
        "globalid": "739696a4-a5e1-4b96-8c5f-49f4dd1c6ea9",
        "CreationDa": "2021-06-09T00:00:00.000Z",
        "Creator": "",
        "EditDate": "2021-06-09T00:00:00.000Z",
        "Editor": "",
        "how_old_ar": "19_25",
        "what_do_yo": "I'm Data Curation Associate.",
        "what_is_yo": "",
        "how_often_": "Every_day",
        "how_do_you": 5,
        "have_you_e": "Yes",
        "if_so_what": "I work with map and fix issues on map for improving navigation",
        "what_do__1": "It's a vary interesting deal, that connected with work with map to help people in their life in different moments. For example in navigation, to know more about history, to know more about economy and in general to know more about world. It's a part if g",
        "does_somet": "All looks fine, apart from that Greenland is bigger than America. But it's only because chosen such projection, where squares are distorted",
        "would_you_": "No",
        "email": "",
        "what_is__1": "Russian",
        "what_is__2": "",
        "what_is__3": "Azores",
        "do_you_thi": "essential_to_daily_life"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          27.563955927538373,
          53.90748829552329
        ]
      },
      "properties": {
        "globalid": "dc575002-979f-4427-8954-aac54d3f7be7",
        "CreationDa": "2021-06-09T00:00:00.000Z",
        "Creator": "",
        "EditDate": "2021-06-09T00:00:00.000Z",
        "Editor": "",
        "how_old_ar": "19_25",
        "what_do_yo": "Work",
        "what_is_yo": "",
        "how_often_": "Every_day",
        "how_do_you": 4,
        "have_you_e": "Yes",
        "if_so_what": "Different",
        "what_do__1": "Something beautiful and useful",
        "does_somet": "Projection",
        "would_you_": "No",
        "email": "",
        "what_is__1": "Byelorussian",
        "what_is__2": "",
        "what_is__3": "Canada",
        "do_you_thi": "important_for_many_tasks"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -76.51941323127967,
          3.447302374013379
        ]
      },
      "properties": {
        "globalid": "d8654e0c-f737-4a56-807d-9cbe86239e02",
        "CreationDa": "2021-06-09T00:00:00.000Z",
        "Creator": "",
        "EditDate": "2021-06-09T00:00:00.000Z",
        "Editor": "",
        "how_old_ar": "26_35",
        "what_do_yo": "Studying and working",
        "what_is_yo": "",
        "how_often_": "Every_day",
        "how_do_you": 5,
        "have_you_e": "Yes",
        "if_so_what": "Traffic death hotspots",
        "what_do__1": "Old-fashion word . Art, science and technology.",
        "does_somet": "Horrible projection",
        "would_you_": "Yes",
        "email": "cacarto@gmail.com",
        "what_is__1": "Spanish",
        "what_is__2": "",
        "what_is__3": "New Delhi, India",
        "do_you_thi": "essential_to_daily_life"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          9.731219529248676,
          52.42567674210817
        ]
      },
      "properties": {
        "globalid": "95403a22-af4c-4633-813b-2b96390e38ce",
        "CreationDa": "2021-06-09T00:00:00.000Z",
        "Creator": "",
        "EditDate": "2021-06-09T00:00:00.000Z",
        "Editor": "",
        "how_old_ar": "26_35",
        "what_do_yo": "Work, Geography",
        "what_is_yo": "",
        "how_often_": "Every_day",
        "how_do_you": 5,
        "have_you_e": "Yes",
        "if_so_what": "Agriculture",
        "what_do__1": "How to make a map.",
        "does_somet": "Projection is unusual",
        "would_you_": "Yes",
        "email": "Hanna.hancharova@web.de",
        "what_is__1": "Russian",
        "what_is__2": "",
        "what_is__3": "Germany, Hanover",
        "do_you_thi": "essential_to_daily_life"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.57456999999995,
          6.245901980664566
        ]
      },
      "properties": {
        "globalid": "1dc0dd06-e719-4cd1-81d2-66f663301a0b",
        "CreationDa": "2021-06-09T00:00:00.000Z",
        "Creator": "",
        "EditDate": "2021-06-09T00:00:00.000Z",
        "Editor": "",
        "how_old_ar": "26_35",
        "what_do_yo": "Study",
        "what_is_yo": "",
        "how_often_": "Never",
        "how_do_you": 3,
        "have_you_e": "No",
        "if_so_what": "",
        "what_do__1": "Study of maps",
        "does_somet": "I don't know",
        "would_you_": "Yes",
        "email": "valepelaez@outlook.com",
        "what_is__1": "Spanish",
        "what_is__2": "",
        "what_is__3": "Spain",
        "do_you_thi": "important_for_many_tasks"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          11.629399979314485,
          48.09483998832052
        ]
      },
      "properties": {
        "globalid": "1301d53c-83d7-4ede-8ec7-5f7c27138f14",
        "CreationDa": "2021-06-09T00:00:00.000Z",
        "Creator": "",
        "EditDate": "2021-06-09T00:00:00.000Z",
        "Editor": "",
        "how_old_ar": "19_25",
        "what_do_yo": "Student",
        "what_is_yo": "",
        "how_often_": "Once_a_week",
        "how_do_you": 5,
        "have_you_e": "No",
        "if_so_what": "",
        "what_do__1": "Maps",
        "does_somet": "no",
        "would_you_": "No",
        "email": "",
        "what_is__1": "Spanish",
        "what_is__2": "",
        "what_is__3": "Barcelona",
        "do_you_thi": "helpful_in_some_cases"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          0,
          0
        ]
      },
      "properties": {
        "globalid": "52ef5842-64d6-428c-843c-4a445c154e59",
        "CreationDa": "2021-06-09T00:00:00.000Z",
        "Creator": "",
        "EditDate": "2021-06-09T00:00:00.000Z",
        "Editor": "",
        "how_old_ar": "26_35",
        "what_do_yo": "Scolaship",
        "what_is_yo": "",
        "how_often_": "Once_in_a_while",
        "how_do_you": 2,
        "have_you_e": "No",
        "if_so_what": "",
        "what_do__1": "Maps \n",
        "does_somet": "",
        "would_you_": "Yes",
        "email": "beahuit@hotmail.com",
        "what_is__1": "Spanish",
        "what_is__2": "",
        "what_is__3": "Mexico",
        "do_you_thi": "important_for_many_tasks"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          27.626838684074972,
          53.93335288805827
        ]
      },
      "properties": {
        "globalid": "f259a15b-3894-4c1a-8862-2605bc5f4699",
        "CreationDa": "2021-06-09T00:00:00.000Z",
        "Creator": "",
        "EditDate": "2021-06-09T00:00:00.000Z",
        "Editor": "",
        "how_old_ar": "26_35",
        "what_do_yo": "Team Lead of Mapping Training team (RideSharing Data Curation)",
        "what_is_yo": "",
        "how_often_": "Every_day",
        "how_do_you": 5,
        "have_you_e": "Yes",
        "if_so_what": "Various topographic maps and terrain plans for road and airfield design, thematic maps to represent the results of geographical surveys",
        "what_do__1": "Science and work are my first associations with the word. Because I have been working with maps for many years and have received special education in this field",
        "does_somet": "Map projection, no grid and unrealistic colours",
        "would_you_": "No",
        "email": "",
        "what_is__1": "Russian",
        "what_is__2": "",
        "what_is__3": "Rotorua, New Zealand",
        "do_you_thi": "essential_to_daily_life"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          27.677463378072947,
          53.949296120846995
        ]
      },
      "properties": {
        "globalid": "a731754e-d724-4669-8f5e-2608ec196723",
        "CreationDa": "2021-06-09T00:00:00.000Z",
        "Creator": "",
        "EditDate": "2021-06-09T00:00:00.000Z",
        "Editor": "",
        "how_old_ar": "26_35",
        "what_do_yo": "Family, work, dance, painting",
        "what_is_yo": "",
        "how_often_": "Every_day",
        "how_do_you": 5,
        "have_you_e": "Yes",
        "if_so_what": "Europe, world, Belarus… many maps",
        "what_do__1": "It’s a combination of art and since",
        "does_somet": "Antarctic is too large",
        "would_you_": "No",
        "email": "",
        "what_is__1": "Russian",
        "what_is__2": "",
        "what_is__3": "Nirvana",
        "do_you_thi": "helpful_in_some_cases"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          24.98825354643865,
          52.534985131255766
        ]
      },
      "properties": {
        "globalid": "e2ce571d-0531-4f4b-8947-c0dd3ab2b96d",
        "CreationDa": "2021-06-09T00:00:00.000Z",
        "Creator": "",
        "EditDate": "2021-06-09T00:00:00.000Z",
        "Editor": "",
        "how_old_ar": "26_35",
        "what_do_yo": "Geographer",
        "what_is_yo": "",
        "how_often_": "Every_day",
        "how_do_you": 5,
        "have_you_e": "Yes",
        "if_so_what": "Emergency plan at oil spills disaster",
        "what_do__1": "Philosophy of life",
        "does_somet": "World Mercator",
        "would_you_": "No",
        "email": "",
        "what_is__1": "Byelorussian",
        "what_is__2": "",
        "what_is__3": "Mongolia",
        "do_you_thi": "essential_to_daily_life"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -76.734211028434,
          3.3270388910184394
        ]
      },
      "properties": {
        "globalid": "5f1e49da-6c5e-4bd1-83bb-3c813ef00042",
        "CreationDa": "2021-06-09T00:00:00.000Z",
        "Creator": "",
        "EditDate": "2021-06-09T00:00:00.000Z",
        "Editor": "",
        "how_old_ar": "26_35",
        "what_do_yo": "Research",
        "what_is_yo": "",
        "how_often_": "Once_a_week",
        "how_do_you": 4,
        "have_you_e": "Yes",
        "if_so_what": "Catchment characteristics",
        "what_do__1": "Doing maps and locating places spatially",
        "does_somet": "I could not notice it",
        "would_you_": "Yes",
        "email": "rojasg.karen@gmail.com",
        "what_is__1": "Spanish",
        "what_is__2": "",
        "what_is__3": "NA",
        "do_you_thi": "important_for_many_tasks"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          27.55199643774772,
          53.90188625330837
        ]
      },
      "properties": {
        "globalid": "1a3c5ee8-6af8-43c7-8a1a-6cb5b28bf5e4",
        "CreationDa": "2021-06-09T00:00:00.000Z",
        "Creator": "",
        "EditDate": "2021-06-09T00:00:00.000Z",
        "Editor": "",
        "how_old_ar": "19_25",
        "what_do_yo": "Cartography",
        "what_is_yo": "",
        "how_often_": "Every_day",
        "how_do_you": 5,
        "have_you_e": "Yes",
        "if_so_what": "For children (cars, inventions), touristic, economical, social, geopolitical",
        "what_do__1": "I'm in :) \nFocusing, imagination, rules, design",
        "does_somet": "Not really. But i agree that polar areas look weird in this projection",
        "would_you_": "No",
        "email": "",
        "what_is__1": "Russian",
        "what_is__2": "",
        "what_is__3": "Porto, Portugal",
        "do_you_thi": "important_for_many_tasks"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -118.22531824879697,
          34.19815585812446
        ]
      },
      "properties": {
        "globalid": "da514ed8-3aaa-43cf-8217-a25c4fe82926",
        "CreationDa": "2021-06-09T00:00:00.000Z",
        "Creator": "",
        "EditDate": "2021-06-09T00:00:00.000Z",
        "Editor": "",
        "how_old_ar": "19_25",
        "what_do_yo": "Business consultant",
        "what_is_yo": "",
        "how_often_": "Every_day",
        "how_do_you": 5,
        "have_you_e": "No",
        "if_so_what": "",
        "what_do__1": "Maps",
        "does_somet": "No",
        "would_you_": "No",
        "email": "",
        "what_is__1": "Armenian",
        "what_is__2": "",
        "what_is__3": "London, England",
        "do_you_thi": "helpful_in_some_cases"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          127.33593106266515,
          37.356180888006385
        ]
      },
      "properties": {
        "globalid": "aecbae3b-ee95-49d2-8306-1ce6012723b9",
        "CreationDa": "2021-06-09T00:00:00.000Z",
        "Creator": "",
        "EditDate": "2021-06-09T00:00:00.000Z",
        "Editor": "",
        "how_old_ar": "19_25",
        "what_do_yo": "Stipendium",
        "what_is_yo": "",
        "how_often_": "Every_day",
        "how_do_you": 5,
        "have_you_e": "Yes",
        "if_so_what": "Covid and other topics that were given out as assignment",
        "what_do__1": "PTSD from Munich and redemption in Vienna",
        "does_somet": "WM?",
        "would_you_": "Yes",
        "email": "seoroleeeee@gmail.com",
        "what_is__1": "Korean",
        "what_is__2": "",
        "what_is__3": "",
        "do_you_thi": "essential_to_daily_life"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          27.54755268276868,
          53.87831434515347
        ]
      },
      "properties": {
        "globalid": "c23e30c6-1291-4bcc-8a3d-963e54b6c5e0",
        "CreationDa": "2021-06-09T00:00:00.000Z",
        "Creator": "",
        "EditDate": "2021-06-09T00:00:00.000Z",
        "Editor": "",
        "how_old_ar": "26_35",
        "what_do_yo": "Banking",
        "what_is_yo": "",
        "how_often_": "Every_day",
        "how_do_you": 4,
        "have_you_e": "No",
        "if_so_what": "",
        "what_do__1": "A science about making maps.",
        "does_somet": "Yep",
        "would_you_": "No",
        "email": "",
        "what_is__1": "Russian",
        "what_is__2": "",
        "what_is__3": "London",
        "do_you_thi": "essential_to_daily_life"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -118.26644514454163,
          34.047078368244144
        ]
      },
      "properties": {
        "globalid": "1d84e20e-13a4-45ae-8dac-c256a1de74cf",
        "CreationDa": "2021-06-09T00:00:00.000Z",
        "Creator": "",
        "EditDate": "2021-06-09T00:00:00.000Z",
        "Editor": "",
        "how_old_ar": "19_25",
        "what_do_yo": "Writer",
        "what_is_yo": "",
        "how_often_": "Once_in_a_while",
        "how_do_you": 5,
        "have_you_e": "Yes",
        "if_so_what": "Fantasy world",
        "what_do__1": "Maps and directions. Exploration.",
        "does_somet": "Antarctica is maybe too big. Europe is too big.",
        "would_you_": "Yes",
        "email": "carl.david.albert@gmail.com",
        "what_is__1": "English",
        "what_is__2": "",
        "what_is__3": "Tokyo, Japan",
        "do_you_thi": "important_for_many_tasks"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.07356172485358,
          33.71159789409502
        ]
      },
      "properties": {
        "globalid": "826bf30e-6e98-4209-846d-07a3f84c8bfd",
        "CreationDa": "2021-06-09T00:00:00.000Z",
        "Creator": "",
        "EditDate": "2021-06-09T00:00:00.000Z",
        "Editor": "",
        "how_old_ar": "26_35",
        "what_do_yo": "ERASMUS Scholarship :)",
        "what_is_yo": "",
        "how_often_": "Every_day",
        "how_do_you": 5,
        "have_you_e": "Yes",
        "if_so_what": "A lot of maps you know",
        "what_do__1": "It is something related to me",
        "does_somet": "Too tired to look critically but seems ok",
        "would_you_": "Yes",
        "email": "hassam.ms20@mail.com",
        "what_is__1": "Urdu",
        "what_is__2": "",
        "what_is__3": "Dubai, UAE",
        "do_you_thi": "important_for_many_tasks"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          32.64909750843878,
          39.997857821337725
        ]
      },
      "properties": {
        "globalid": "0de6cfe3-8dd4-433a-822f-8e59aa8fe47f",
        "CreationDa": "2021-06-09T00:00:00.000Z",
        "Creator": "",
        "EditDate": "2021-06-09T00:00:00.000Z",
        "Editor": "",
        "how_old_ar": "26_35",
        "what_do_yo": "English teaching",
        "what_is_yo": "",
        "how_often_": "Every_day",
        "how_do_you": 5,
        "have_you_e": "No",
        "if_so_what": "",
        "what_do__1": "It is a study related to map-making.",
        "does_somet": "The sizes of the continents are not accurate.",
        "would_you_": "No",
        "email": "",
        "what_is__1": "Turkish",
        "what_is__2": "",
        "what_is__3": "Wellington, New Zealand",
        "do_you_thi": "essential_to_daily_life"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          28.65089566128183,
          55.53730428533033
        ]
      },
      "properties": {
        "globalid": "cb1637a0-59af-4ede-824c-47019fd041a8",
        "CreationDa": "2021-06-09T00:00:00.000Z",
        "Creator": "",
        "EditDate": "2021-06-09T00:00:00.000Z",
        "Editor": "",
        "how_old_ar": "26_35",
        "what_do_yo": "working in it-company",
        "what_is_yo": "",
        "how_often_": "Every_day",
        "how_do_you": 5,
        "have_you_e": "No",
        "if_so_what": "",
        "what_do__1": "making maps, creative work",
        "does_somet": "the area of Antarctica is too big by comparison with other continents",
        "would_you_": "No",
        "email": "",
        "what_is__1": "Russian",
        "what_is__2": "",
        "what_is__3": "Dublin, Ireland",
        "do_you_thi": "essential_to_daily_life"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          27.44878866602745,
          53.84641153741755
        ]
      },
      "properties": {
        "globalid": "6af7b5cf-d048-4154-8cae-95b0496bc1d2",
        "CreationDa": "2021-06-09T00:00:00.000Z",
        "Creator": "",
        "EditDate": "2021-06-09T00:00:00.000Z",
        "Editor": "",
        "how_old_ar": "26_35",
        "what_do_yo": "Work",
        "what_is_yo": "",
        "how_often_": "Every_day",
        "how_do_you": 5,
        "have_you_e": "Yes",
        "if_so_what": "Vegetation map of islands in national park",
        "what_do__1": "Making maps",
        "does_somet": "No",
        "would_you_": "Yes",
        "email": "Kulakam@mail.ru",
        "what_is__1": "Russian",
        "what_is__2": "",
        "what_is__3": "Cape Verde",
        "do_you_thi": "important_for_many_tasks"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          81.97723388669726,
          23.467025501556524
        ]
      },
      "properties": {
        "globalid": "bd2dd53b-e186-4396-8496-1bf0e92d7d58",
        "CreationDa": "2021-06-09T00:00:00.000Z",
        "Creator": "",
        "EditDate": "2021-06-09T00:00:00.000Z",
        "Editor": "",
        "how_old_ar": "26_35",
        "what_do_yo": "I am a student",
        "what_is_yo": "",
        "how_often_": "Once_a_week",
        "how_do_you": 4,
        "have_you_e": "Yes",
        "if_so_what": "Covid-19, Landcover changes, SDG",
        "what_do__1": "The art and science of map making.",
        "does_somet": "The projection doesn't seem suitable.",
        "would_you_": "Yes",
        "email": "syedmiftah@gmail.com",
        "what_is__1": "Hindi",
        "what_is__2": "",
        "what_is__3": "Monte Carlo, Monaco",
        "do_you_thi": "essential_to_daily_life"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          27.63044232022212,
          53.86769470144943
        ]
      },
      "properties": {
        "globalid": "36ead776-e19a-429a-80fb-d30f9589de49",
        "CreationDa": "2021-06-09T00:00:00.000Z",
        "Creator": "",
        "EditDate": "2021-06-09T00:00:00.000Z",
        "Editor": "",
        "how_old_ar": "26_35",
        "what_do_yo": "Mapping, teaching",
        "what_is_yo": "",
        "how_often_": "Once_a_week",
        "how_do_you": 5,
        "have_you_e": "No",
        "if_so_what": "",
        "what_do__1": "Some military guys making maps of secret places from aerial pictures.",
        "does_somet": "Antarctica is massive",
        "would_you_": "Yes",
        "email": "bellabambinaliz@gmail.com",
        "what_is__1": "Byelorussian",
        "what_is__2": "",
        "what_is__3": "New Zealand",
        "do_you_thi": "essential_to_daily_life"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          25.910291899999564,
          53.13749699999911
        ]
      },
      "properties": {
        "globalid": "90fc9fcc-c44b-43b8-8eb9-cbd49f5f40de",
        "CreationDa": "2021-06-09T00:00:00.000Z",
        "Creator": "",
        "EditDate": "2021-06-09T00:00:00.000Z",
        "Editor": "",
        "how_old_ar": "26_35",
        "what_do_yo": "Work in Lyft",
        "what_is_yo": "",
        "how_often_": "Every_day",
        "how_do_you": 5,
        "have_you_e": "Yes",
        "if_so_what": "Fixes in OSM",
        "what_do__1": "I remember university and my geographical faculty",
        "does_somet": "Antarctica is too large",
        "would_you_": "No",
        "email": "",
        "what_is__1": "Russian",
        "what_is__2": "",
        "what_is__3": "Reykjavík, Iceland",
        "do_you_thi": "essential_to_daily_life"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          12.572148304877338,
          55.68309760263878
        ]
      },
      "properties": {
        "globalid": "ad690910-53f6-44de-8760-3973ce08e5b5",
        "CreationDa": "2021-06-09T00:00:00.000Z",
        "Creator": "",
        "EditDate": "2021-06-09T00:00:00.000Z",
        "Editor": "",
        "how_old_ar": "26_35",
        "what_do_yo": "Working as an engineer",
        "what_is_yo": "",
        "how_often_": "Every_day",
        "how_do_you": 5,
        "have_you_e": "No",
        "if_so_what": "",
        "what_do__1": "For me it is a science that creates the 3d map of the earth including buildings and any solid things.",
        "does_somet": "Sure it is. The shape of the some continents (i.e. Antarctica, Greenland) seem bigger than it is supposed to be.",
        "would_you_": "No",
        "email": "",
        "what_is__1": "Turkish",
        "what_is__2": "",
        "what_is__3": "New york",
        "do_you_thi": "important_for_many_tasks"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -97.74569366668692,
          30.27078464182924
        ]
      },
      "properties": {
        "globalid": "dc3b6c2c-c403-4f0c-8858-1f8057bee497",
        "CreationDa": "2021-06-10T00:00:00.000Z",
        "Creator": "",
        "EditDate": "2021-06-10T00:00:00.000Z",
        "Editor": "",
        "how_old_ar": "19_25",
        "what_do_yo": "Game Development",
        "what_is_yo": "",
        "how_often_": "Once_a_week",
        "how_do_you": 4,
        "have_you_e": "No",
        "if_so_what": "",
        "what_do__1": "Front page of a fantasy novel or treasure maps",
        "does_somet": "Antarctica seems larger than it should be.",
        "would_you_": "Yes",
        "email": "noah.k.haile@gmail.com",
        "what_is__1": "English",
        "what_is__2": "",
        "what_is__3": "Singapore",
        "do_you_thi": "important_for_many_tasks"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -0.8782596238440757,
          41.65392763483937
        ]
      },
      "properties": {
        "globalid": "57bd2440-db68-44d0-8523-c6d8930eed87",
        "CreationDa": "2021-06-10T00:00:00.000Z",
        "Creator": "",
        "EditDate": "2021-06-10T00:00:00.000Z",
        "Editor": "",
        "how_old_ar": "36_45",
        "what_do_yo": "Researcher",
        "what_is_yo": "",
        "how_often_": "Every_day",
        "how_do_you": 5,
        "have_you_e": "Yes",
        "if_so_what": "Everything... I'm a Geographer :-P",
        "what_do__1": "I love it!",
        "does_somet": "OMG! Mercator!! All except around the ecuator :-P",
        "would_you_": "Yes",
        "email": "miguel.sevilla@geografos.org",
        "what_is__1": "Spanish",
        "what_is__2": "",
        "what_is__3": "Girona, Spain",
        "do_you_thi": "essential_to_daily_life"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          111.37029179949398,
          30.74152358164937
        ]
      },
      "properties": {
        "globalid": "0bdb7312-374b-4a2d-88be-2aeb9931109c",
        "CreationDa": "2021-06-11T00:00:00.000Z",
        "Creator": "",
        "EditDate": "2021-06-11T00:00:00.000Z",
        "Editor": "",
        "how_old_ar": "26_35",
        "what_do_yo": "Previous savings",
        "what_is_yo": "",
        "how_often_": "Every_day",
        "how_do_you": 5,
        "have_you_e": "Yes",
        "if_so_what": "Taobao Village in the Yangtze River Delta",
        "what_do__1": "Let me think about maps",
        "does_somet": "No labels and Russia is separated into two parts",
        "would_you_": "Yes",
        "email": "whuyangzhuo@outlook.com",
        "what_is__1": "Chinese",
        "what_is__2": "",
        "what_is__3": "Not sure yet",
        "do_you_thi": "essential_to_daily_life"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          112.96667000000002,
          28.200000000000053
        ]
      },
      "properties": {
        "globalid": "9240b088-2cd0-49e5-84b3-fd748f487d4e",
        "CreationDa": "2021-06-11T00:00:00.000Z",
        "Creator": "",
        "EditDate": "2021-06-11T00:00:00.000Z",
        "Editor": "",
        "how_old_ar": "26_35",
        "what_do_yo": "Masters student",
        "what_is_yo": "",
        "how_often_": "Every_day",
        "how_do_you": 5,
        "have_you_e": "Yes",
        "if_so_what": "how the covid-19 pandemic spread in Europe and the corresponding precautions, for the course Project Map Creation",
        "what_do__1": "An interdisciplinary subject or research area about the roles maps play in art, science, and technology",
        "does_somet": "Greenland looks a lot larger than Australia which is geographically incorrect (it's a side-effect of the projection used to create this map)",
        "would_you_": "Yes",
        "email": "sherrysweety213@gmail.com",
        "what_is__1": "Chinese",
        "what_is__2": "",
        "what_is__3": "Not sure yet, but at least I would like to visit Italy once while I am still in Europe",
        "do_you_thi": "important_for_many_tasks"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          6.566772759619623,
          53.21829279436918
        ]
      },
      "properties": {
        "globalid": "691964f7-d96a-4f04-8b9d-cabac10fe454",
        "CreationDa": "2021-06-11T00:00:00.000Z",
        "Creator": "",
        "EditDate": "2021-06-11T00:00:00.000Z",
        "Editor": "",
        "how_old_ar": "19_25",
        "what_do_yo": "Student",
        "what_is_yo": "",
        "how_often_": "Every_day",
        "how_do_you": 5,
        "have_you_e": "Yes",
        "if_so_what": "Hiking map in Sweden",
        "what_do__1": "Making maps <3",
        "does_somet": "A lot seems inaccurate",
        "would_you_": "Yes",
        "email": "vivienvdongen@gmail.com",
        "what_is__1": "Dutch",
        "what_is__2": "",
        "what_is__3": "Iceland (not a particular city)",
        "do_you_thi": "essential_to_daily_life"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -97.54792928693134,
          35.536469384550486
        ]
      },
      "properties": {
        "globalid": "4c34b26a-6c5a-48d3-83ab-6867d411a757",
        "CreationDa": "2021-06-11T00:00:00.000Z",
        "Creator": "",
        "EditDate": "2021-06-11T00:00:00.000Z",
        "Editor": "",
        "how_old_ar": "19_25",
        "what_do_yo": "Video Game Developer",
        "what_is_yo": "",
        "how_often_": "Once_a_week",
        "how_do_you": 5,
        "have_you_e": "Yes",
        "if_so_what": "I've created a few maps for games I've made, of both fictional and real places, but was never focused on accuracy.",
        "what_do__1": "I think of people sailing across the world, creating maps as they find new areas they've never seen. I think of older, fancier looking maps with a picture of a whale in the ocean and a big compass in the corner.",
        "does_somet": "Not as far as I can tell.",
        "would_you_": "Yes",
        "email": "pt92528@gmail.com",
        "what_is__1": "English",
        "what_is__2": "",
        "what_is__3": "Oshino Hakkai, Japan",
        "do_you_thi": "essential_to_daily_life"
      }
    }
  ]
};

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
          
          "<h5><b>Age:</b></h5>" + "<h5>" + marker.properties.how_old_ar + "</h5"+ "</br>" +
          "<h5><b>Occupation:</b></h5>" + "<h5>" + marker.properties.what_do_yo + "</h5" + "</br>"+
          "<h5><b>Mother language:</b></h5>" + "<h5>" + marker.properties.what_is__1 + "</h5>" + "</br>"+
          "<h5><b>Desired travel destination:</b></h5>" + "<h5>" + marker.properties.what_is__3 + "</h5>"
        )
    )
    .addTo(map);


  // San Francisco
  var origin = marker.geometry.coordinates;

  // Washington DC
  var destination = [-77.032, 38.913];

  el.addEventListener('mouseenter', () => mapArc(origin, destination));
  el.addEventListener('mouseleave', () => removeMapArc());
});

function removeMapArc() {
  if (map.getLayer("route")) {
    map.removeLayer("route");
  }
  if (map.getSource("route")) {
    map.removeSource("route");
  }
  if (map.getLayer("point")) {
    map.removeLayer("point");
  }
  if (map.getSource("point")) {
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


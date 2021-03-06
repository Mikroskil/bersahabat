// Require Node modules in the browser thanks to Browserify: http://browserify.org
var bespoke = require('bespoke'),
  mozillaSandstone = require('bespoke-theme-mozilla-sandstone'),
  master = require('bespoke.js-master'),
  greeny = require('bespoke-theme-greeny'),
  cube = require('bespoke-theme-cube'),
  keys = require('bespoke-keys'),
  touch = require('bespoke-touch'),
  bullets = require('bespoke-bullets'),
  backdrop = require('bespoke-backdrop'),
  scale = require('bespoke-scale'),
  hash = require('bespoke-hash'),
  progress = require('bespoke-progress'),
  forms = require('bespoke-forms'),
  loop = require('bespoke-loop'),
  markdown = require('bespoke-markdown'),
  secondary = require('bespoke-secondary'),
  vcr = require('bespoke-vcr'),
  state = require('bespoke-state'),
  //spotlight = require('bespoke-spotlight'),
  classes = require('bespoke-classes')

// Bespoke.js
bespoke.from('article', [
  //terminal(),
  //fancy(),
  //voltaire(),
  //mozillaSandstone();
  //greeny(),
  //master(),
  cube(),
  keys(),
  touch(),
  bullets('li, .bullet'),
  backdrop(),
  scale(),
  hash(),
  progress(),
  forms(),
  secondary(),
  vcr(),
  loop(),
  state(),
  classes()
  //spotlight()
  //markdown()
]);

// Prism syntax highlighting
// This is actually loaded from "bower_components" thanks to
// debowerify: https://github.com/eugeneware/debowerify
require('prism');
require('bespoke-spotlight');

$(function() {
  var body = $('body');
  var backgrounds = ['url(http://static.jsbin.com/images/jsbin_static.png)', 'url(http://static.jsbin.com/images/popout.png)'];
  var current = 0;

  function nextBackground() {
    body.css(
    'background',
      backgrounds[current = ++current % backgrounds.length]
    );

   setTimeout(nextBackground, 5000);
   }
   setTimeout(nextBackground, 5000);
     body.css('background', backgrounds[0]);
   });
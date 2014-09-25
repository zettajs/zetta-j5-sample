var zetta = require('zetta');
var j5 = require('./index');
var Camera = require('zetta-jsmpeg-camera');

zetta()
  .name('greenville')
  .link('http://hello-zetta.herokuapp.com/')
  .use(j5)
  .listen(1337);

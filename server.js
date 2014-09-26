var zetta = require('zetta');
var j5 = require('./index');

var app = require('./app');

zetta()
  .name('greenville')
  .link('http://hello-zetta.herokuapp.com/')
  .use(j5)
  .use(app)
  .listen(1337);

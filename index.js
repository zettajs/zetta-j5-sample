var Scout = require('zetta-scout');
var util = require('util');
var j5 = require('johnny-five');
var LED = require('./led_driver');
var Sound = require('./sound_driver');


var j5Scout = module.exports = function() {
  Scout.call(this);
};
util.inherits(j5Scout, Scout);

j5Scout.prototype.init = function(next) {
  var board = new j5.Board({repl: false});
  var self = this;
  board.on('ready', function() {
    var led = new j5.Led({
      pin: 13
    });

    var sound = new j5.Sensor({
      pin: 'A0'
    });

    self.discover(LED, led);
//    self.discover(Sound, sound);
    next();
  });
};

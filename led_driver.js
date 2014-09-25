var Device = require('zetta-device');
var util = require('util');

var LEDDriver = module.exports = function(j5Led) {
  Device.call(this);
  this._j5 = j5Led;
  this._j5.off();
};
util.inherits(LEDDriver, Device);

LEDDriver.prototype.init = function(config) {
  var self = this;
  config
    .name('j5-led')
    .type('led')
    .state('off')
    .when('on', { allow: ['turn-off'] })
    .when('off', { allow: ['turn-on'] })
    .map('turn-on', function turnOn(cb){
      self.state = 'on';
      self._j5.on();

      if(cb) {
        cb();
      }
    })
    .map('turn-off', function turnOff(cb){
      self.state = 'off';
      self._j5.off();
      if(cb) {
        cb();
      }
    });
};



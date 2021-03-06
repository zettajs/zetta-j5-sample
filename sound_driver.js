var Device = require('zetta-device');
var util = require('util');

var SoundSensor = module.exports = function(j5sound) {
  Device.call(this);
  this._j5sound = j5sound;
  this.volume = 0;
};
util.inherits(SoundSensor, Device);

SoundSensor.prototype.init = function(config) {
  config
    .type('sound')
    .name('j5 sound')
    .monitor('volume');

    var self = this;
    this._j5sound.on('data', function() {
      self.volume = this.value;
    });
};


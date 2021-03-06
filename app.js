module.exports = function clapper(server) {
  var microphoneQuery = server.where({type: 'sound'});
  var ledQuery = server.where({type: 'led'});


  server.observe([microphoneQuery, ledQuery], function(microphone, led) {
    microphone.streams.volume.on('data', function(d) {
      if(d.data > 800) {
        if(led.state === 'off') {
          led.call('turn-on', function(e) {
            if(e) {
              console.log(e);
            }
          });
        } else {
          led.call('turn-off', function(e) {
            if(e) {
              console.log(e);
            }
          });
        }
      }
    });
  });
  
}

const stan = require('./stan');

var publisher = function() {

  stan.publish(
    process.env.QUEUE_EVENT_TO_PUBLISH,
    "",
    function(err, guid) {
      if (err) {
        console.log('publish failed: ' + err);
      } else {
        console.log('published message with guid: ' + guid);
      }
    }
  );
};

module.exports = publisher;
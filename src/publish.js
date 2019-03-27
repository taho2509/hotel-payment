const stan = require('./stan');

var publisher = function(data) {

  stan.publish(
    process.env.QUEUE_EVENT_FOR_SUCCESS,
    JSON.stringify(data),
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
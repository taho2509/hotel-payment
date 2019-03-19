const eventEmitter = require('./emitter');

var paymentHandler = function() {
    //simulate payment
  setTimeout(()=>eventEmitter.emit('paid'),1000);
};

module.exports = paymentHandler;
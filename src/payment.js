const eventEmitter = require('./emitter');

var paymentHandler = function(data) {
    //simulate payment
    
  setTimeout(()=>eventEmitter.emit('paid',data),1000);

  //eventEmitter.emit('rejected',data);
};

module.exports = paymentHandler;
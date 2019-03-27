const eventEmitter = require('./emitter');

var paymentHandler = function(data) {
    //simulate payment with a chance of 30% of rejection 
  setTimeout(()=>Math.random()>=0.3
    ?eventEmitter.emit('paid',data)
    :eventEmitter.emit('rejected',data),
  1000);
};

module.exports = paymentHandler;
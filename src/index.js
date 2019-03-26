'use-strict';

const eventEmitter = require('./emitter');
const subscriptionHandler = require('./subscribe');
const paymentHandler = require('./payment');
const successHandler = require('./publish');
const rejectionHandler = require('./rejection');

//Assign the event handler to an event:
eventEmitter.on('connected', subscriptionHandler);
eventEmitter.on('reserved', paymentHandler);
eventEmitter.on('paid', successHandler);
eventEmitter.on('rejected',rejectionHandler);
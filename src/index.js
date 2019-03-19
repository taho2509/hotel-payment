'use-strict';

const eventEmitter = require('./emitter');
const subscriptionHandler = require('./subscribe');
const paymentHandler = require('./payment');
const publisherHandler = require('./publish');

//Assign the event handler to an event:
eventEmitter.on('connected', subscriptionHandler);
eventEmitter.on('reserved', paymentHandler);
eventEmitter.on('paid', publisherHandler);
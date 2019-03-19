'use-strict';

const eventEmitter = require('./emitter');
const subscriptionHandler = require('./subscribe');

//Assign the event handler to an event:
eventEmitter.on('connected', subscriptionHandler);
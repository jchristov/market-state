const Consumer = require('./transports/Consumer');

// Defines the consumer configuration object with the address of the
// streaming platform.
const address = {
  ip: '127.0.0.1',
  port: 2181,
};

const consumer = new Consumer(address);

// Subscribes to the streaming platform topic to receive price updates.
consumer.listen({
  name: 'price.update',
  offset: 80,
  partition: 0,
});

consumer.start();

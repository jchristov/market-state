const Consumer = require('./transports/Consumer');
const Repository = require('./database/Repository');
const MongoDB = require('./database/MongoDB');

// Defines the configuration object with the addresses of the streaming
// platform and the database.
const config = {
  database: {
    ip: '127.0.0.1',
    port: 27017,
    database: 'cryptosense-tickers',
  },
  streaming: {
    ip: '127.0.0.1',
    port: 2181,
  },
};

// Instantiates a new repository based on a MongoDB connection.
const mongo = new MongoDB(config.database);
const repo = new Repository(mongo);

// Instantiates a new streaming platform consumer.
const consumer = new Consumer(config.streaming);

// Subscribes to the streaming platform topic to receive price updates.
consumer.listen({
  name: 'price.update',
  offset: 0,
  partition: 0,
});

consumer.start();

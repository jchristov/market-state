const { MongoClient } = require('mongodb');

class MongoDB {
  constructor({ ip, port, database }) {
    this.url = `mongodb://${ip}:${port}/${database}`;
  }

  connect() {
    return MongoClient.connect(this.url);
  }
}

module.exports = MongoDB;

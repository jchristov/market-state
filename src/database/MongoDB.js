const { MongoClient } = require('mongodb');

class MongoDB {
  constructor({ ip, port, database }) {
    this.url = `mongodb://${ip}:${port}`;
    this.database = database;
  }

  getConnection() {
    if (!this.connection) {
      this.connection = new Promise((resolve, reject) => {
        MongoClient.connect(this.url)
          .then((client) => {
            const db = client.db(this.database);
            resolve(db);
          })
          .catch(err => reject(err));
      });
    }

    return this.connection;
  }
}

module.exports = MongoDB;

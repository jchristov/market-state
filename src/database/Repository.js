class Repository {
  constructor(database) {
    this.database = database;
  }

  test() {
    this.database
      .getConnection()
      .then(() => {
        console.log('Connected to the database successfully.');
      })
      .catch((err) => {
        console.error(`Failed to connect to the database: ${err}`);
      });
  }

  insert(collection, json) {
    this.database
      .getConnection()
      .then((con) => {
        con.collection(collection).insertOne(json);
      })
      .catch((err) => {
        console.error(err);
      });
  }
}

module.exports = Repository;

class Repository {
  constructor(database) {
    this.database = database;
  }

  test() {
    this.database
      .connect()
      .then((db) => {
        console.log('Connected to the database successfully.');
        db.close();
      })
      .catch((err) => {
        console.error(`Failed to connect to the database: ${err}`);
      });
  }
}

module.exports = Repository;

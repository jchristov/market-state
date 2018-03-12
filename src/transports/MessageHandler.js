class MessageHandler {
  constructor(repository, consumer) {
    this.repository = repository;
    this.consumer = consumer;
  }

  listenPriceUpdate() {
    this.consumer.on('price.update', (data) => {
      console.log(data);
      console.log();
      // this.repository.save('tickers', data);
    });
  }

  start() {
    this.listenPriceUpdate();
  }
}

module.exports = MessageHandler;

const kafka = require('kafka-node');

class Consumer {
  constructor({ ip, port }) {
    const host = `${ip}:${port}`;
    const client = new kafka.Client(host);

    this.consumer = new kafka.Consumer(client, [], { fromOffset: true });
  }

  listen({ name, offset, partition }) {
    const topic = {
      name,
      offset,
      partition,
    };

    const callback = (err, topicName) => {
      if (err) {
        console.error(err);
        return;
      }

      console.log(`Listening ${topicName}`);
    };

    this.consumer.addTopics([topic], callback, true);
  }

  start() {
    this.consumer.on('message', (msg) => {
      console.log(msg);
    });
  }
}

module.exports = Consumer;

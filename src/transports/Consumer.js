const EventEmmiter = require('events');
const kafka = require('kafka-node');

class Consumer extends EventEmmiter {
  constructor({ ip, port }) {
    super();
    const host = `${ip}:${port}`;
    const client = new kafka.Client(host);

    this.consumer = new kafka.Consumer(client, [], { fromOffset: true });
  }

  listen({ name, offset, partition }) {
    const topic = {
      topic: name,
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
      this.emit(msg.topic, msg.value);
    });
  }
}

module.exports = Consumer;

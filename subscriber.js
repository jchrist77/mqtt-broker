const mqtt = require('mqtt');

const APP_NAME = process.env.HEROKU_APP_NAME || 'mqtt-private-broker';
const client = mqtt.connect(`ws://${APP_NAME}.herokuapp.com`);

client.on('connect', function() {
  client.subscribe('myTopic');
});
client.on('message', function(topic, message) {
  context = message.toString();
  console.log(context);
});

const mqtt = require('mqtt');

const APP_NAME = process.env.HEROKU_APP_NAME || 'mqtt-private-broker';
const client = mqtt.connect(`ws://${APP_NAME}.herokuapp.com`);

client.on('connect', function() {
  setInterval(function() {
    client.publish('myTopic', 'Hello mqtt');
    console.log('Message Sent');
  }, 5000);
});

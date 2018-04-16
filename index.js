const http = require('http');
const mosca = require('mosca');

const PORT = process.env.PORT || 8080;

const httpServ = http.createServer();

const mqttServ = new mosca.Server({});
mqttServ.attachHttpServer(httpServ);

httpServ.listen(PORT);
console.log('MQTT broker server started on port', PORT);

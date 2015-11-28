var redis = require('redis');
var host = process.env.REDIS_PORT_6379_TCP_ADDR || 'localhost';
var client = redis.createClient(6379, host);

var commands = require('./commands');

client.on('message', messageHandler);
client.subscribe('global', process.argv[2]);

function messageHandler (channel, commandName) {
  commands[commandName]();
}


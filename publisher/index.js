var redis = require('redis');
var host = process.env.REDIS_PORT_6379_TCP_ADDR || 'localhost';
var client = redis.createClient(6379, host);

var channel = process.argv[2];
var command = process.argv[3];

client.publish(channel, command);

client.quit();

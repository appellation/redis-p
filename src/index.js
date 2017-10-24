const redis = require('redis');
const { promisify } = require('tsubaki');

const props = require('./cmds.json');

function promisifyAll(obj) {
  for (const k of props) {
    const upper = k.toUpperCase();
    if (typeof obj[upper] === 'function') obj[upper] = promisify(obj[upper]);
    if (typeof obj[k] === 'function') obj[k] = promisify(obj[k]);
  }
}

promisifyAll(redis.RedisClient.prototype);
promisifyAll(redis.Multi.prototype);

module.exports = redis;

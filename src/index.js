const redis = require('redis');
const { promisify } = require('tsubaki');

const props = [
  'monitor',
  'info',
  'ping',
  'publish',
  'auth',
  'client',
  'hmset',
  'subscribe',
  'unsubscribe',
  'psubscribe',
  'punsubscribe',
  'append',
  'bgwriteaof',
  'bgsave',
  'bitcount',
  'bitfield',
  'bitop',
  'bitpos',
  'blpop',
  'brpop',
  'brpoplpush',
  'cluster',
  'command',
  'config',
  'dbsize',
  'debug',
  'decr',
  'decrby',
  'del',
  'discard',
];

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

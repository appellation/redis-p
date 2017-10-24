const redis = require('redis');
const { promisify } = require('tsubaki');

const ignore = [
  // redis
  'muli',
  'duplicate',
  'auth',
  'createClient',
  'quit',
  'end',
  'unref',
  'batch',

  // events
  'addListener',
  'emit',
  'eventNames',
  'getMaxListeners',
  'listenerCount',
  'listeners',
  'on',
  'once',
  'prependListener',
  'prependOnceListener',
  'removeAllListeners',
  'removeListener',
  'setMaxListeners',
];

function promisifyAll(obj) {
  for (const k of Object.keys(obj).filter(k => !ignore.includes(k))) if (typeof obj[k] === 'function') obj[k] = promisify(obj[k]);
}

promisifyAll(redis.RedisClient.prototype);
promisifyAll(redis.Multi.prototype);

module.exports = redis;

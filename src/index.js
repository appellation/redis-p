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
  for (const k of Object.keys(obj)) if (typeof obj[k] === 'function' && !ignore.includes(k)) obj[k] = promisify(obj[k]);
}

promisifyAll(redis.RedisClient.prototype);
promisifyAll(redis.Multi.prototype);

module.exports = redis;

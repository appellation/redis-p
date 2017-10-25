const redis = require('redis');
const { promisify } = require('tsubaki');

const cl = redis.RedisClient.prototype;
for (const k of require('./cmds.json')) {
  const upper = k.toUpperCase();
  if (typeof cl[upper] === 'function') cl[upper] = promisify(cl[upper]);
  if (typeof cl[k] === 'function') cl[k] = promisify(cl[k]);
}

const multi = redis.Multi.prototype;
for (const k of ['exec', 'exec_atomic']) if (typeof multi[k] === 'functin') multi[k] = promisify(multi[k]);

module.exports = redis;

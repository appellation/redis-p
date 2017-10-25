import redis from '../src';

const client = redis.createClient();
const regMon = client.monitor();

const multi = client.multi();
const multiSet = multi.set('foo', 'bar');

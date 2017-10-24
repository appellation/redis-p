const redis = require('../src');
const client = redis.createClient();
client.dbsize().then(console.log);

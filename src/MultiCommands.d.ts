import { Multi } from './';

export default interface Commands {
  /**
   * Listen for all requests received by the server in real time.
   */
  monitor(): Multi;
  MONITOR(): Multi;

  /**
   * Get information and statistics about the server.
   */
  info(section?: string | string[]): Multi;
  INFO(section?: string | string[]): Multi;

  /**
   * Ping the server.
   */
  ping(message?: string): Multi;

  /**
   * Post a message to a channel.
   */
  publish(channel: string, value: string): Multi;

  /**
   * Authenticate to the server.
   */
  auth(password: string): Multi;
  AUTH(password: string): Multi;

  /**
   * KILL - Kill the connection of a client.
   * LIST - Get the list of client connections.
   * GETNAME - Get the current connection name.
   * PAUSE - Stop processing commands from clients for some time.
   * REPLY - Instruct the server whether to reply to commands.
   * SETNAME - Set the current connection name.
   */
  client: Multi;
  CLIENT: Multi;

  /**
   * Set multiple hash fields to multiple values.
   */
  hmset: Multi;
  HMSET: Multi;

  /**
   * Listen for messages published to the given channels.
   */
  subscribe: Multi;
  SUBSCRIBE: Multi;

  /**
   * Stop listening for messages posted to the given channels.
   */
  unsubscribe: Multi;
  UNSUBSCRIBE: Multi;

  /**
   * Listen for messages published to channels matching the given patterns.
   */
  psubscribe: Multi;
  PSUBSCRIBE: Multi;

  /**
   * Stop listening for messages posted to channels matching the given patterns.
   */
  punsubscribe: Multi;
  PUNSUBSCRIBE: Multi;

  /**
   * Append a value to a key.
   */
  append(key: string, value: string): Multi;
  APPEND(key: string, value: string): Multi;

  /**
   * Asynchronously rewrite the append-only file.
   */
  bgwriteaof(): Multi;
  BGWRITEAOF(): Multi;

  /**
   * Asynchronously save the dataset to disk.
   */
  bgsave(): Multi;
  BGSAVE(): Multi;

  /**
   * Count set bits in a string.
   */
  bitcount(key: string): Multi;
  bitcount(key: string, start: number, end: number): Multi;
  BITCOUNT(key: string): Multi;
  BITCOUNT(key: string, start: number, end: number): Multi;

  /**
   * Perform arbitrary bitfield integer operations on strings.
   */
  bitfield: Multi;
  BITFIELD: Multi;

  /**
   * Perform bitwise operations between strings.
   */
  bitop(op: string, dest: string, ...args: string[]): Multi;
  BITOP(op: string, dest: string, ...args: string[]): Multi;

  /**
   * Find first bit set or clear in a string.
   */
  bitpos(key: string, bit: number, start: number, end: number): Multi;
  bitpos(key: string, bit: number, start: number): Multi;
  bitpos(key: string, bit: number): Multi;
  BITPOS(key: string, bit: number, start: number, end: number): Multi;
  BITPOS(key: string, bit: number, start: number): Multi;
  BITPOS(key: string, bit: number): Multi;

  /**
   * Remove and get the first element in a list, or block until one is available.
   */
  blpop: Multi;
  BLPOP: Multi;

  /**
   * Remove and get the last element in a list, or block until one is available.
   */
  brpop: Multi;
  BRPOP: Multi;

  /**
   * Pop a value from a list, push it to another list and return it; or block until one is available.
   */
  brpoplpush(source: string, dest: string, timeout: number): Multi;
  BRPOPLPUSH(source: string, dest: string, timeout: number): Multi;

  /**
   * ADDSLOTS - Assign new hash slots to receiving node.
   * COUNT-FAILURE-REPORTS - Return the number of failure reports active for a given node.
   * COUNTKEYSINSLOT - Return the number of local keys in the specified hash slot.
   * DELSLOTS - Set hash slots as unbound in receiving node.
   * FAILOVER - Forces a slave to perform a manual failover of its master.
   * FORGET - Remove a node from the nodes table.
   * GETKEYSINSLOT - Return local key names in the specified hash slot.
   * INFO - Provides info about Redis Cluster node state.
   * KEYSLOT - Returns the hash slot of the specified key.
   * MEET - Force a node cluster to handshake with another node.
   * NODES - Get cluster config for the node.
   * REPLICATE - Reconfigure a node as a slave of the specified master node.
   * RESET - Reset a Redis Cluster node.
   * SAVECONFIG - Forces the node to save cluster state on disk.
   * SET-CONFIG-EPOCH - Set the configuration epoch in a new node.
   * SETSLOT - Bind a hash slot to a specified node.
   * SLAVES - List slave nodes of the specified master node.
   * SLOTS - Get array of Cluster slot to node mappings.
   */
  cluster: Multi;
  CLUSTER: Multi;

  /**
   * Get array of Redis command details.
   *
   * COUNT - Get total number of Redis commands.
   * GETKEYS - Extract keys given a full Redis command.
   * INFO - Get array of specific REdis command details.
   */
  command(): Multi;
  COMMAND(): Multi;

  /**
   * Get array of Redis command details.
   *
   * COUNT - Get array of Redis command details.
   * GETKEYS - Extract keys given a full Redis command.
   * INFO - Get array of specific Redis command details.
   * GET - Get the value of a configuration parameter.
   * REWRITE - Rewrite the configuration file with the in memory configuration.
   * SET - Set a configuration parameter to the given value.
   * RESETSTAT - Reset the stats returned by INFO.
   */
  config: Multi;
  CONFIG: Multi;

  /**
   * Return the number of keys in the selected database.
   */
  dbsize(): Multi;
  DBSIZE(): Multi;

  /**
   * OBJECT - Get debugging information about a key.
   * SEGFAULT - Make the server crash.
   */
  debug(): Multi;
  DEBUG(): Multi;

  /**
   * Decrement the integer value of a key by one.
   */
  decr(key: string): Multi;
  DECR(key: string): Multi;

  /**
   * Decrement the integer value of a key by the given number.
   */
  decrby(key: string, dec: number): Multi;
  DECRBY(key: string, dec: number): Multi;

  /**
   * Delete a key.
   */
  del: Multi;
  DEL: Multi;

  /**
   * Discard all commands issued after MULTI.
   */
  discard: Multi;
  DISCARD: Multi;

  /**
   * Return a serialized version of the value stored at the specified key.
   */
  dump(key: string): Multi;
  DUMP(key: string): Multi;

  /**
   * Echo the given string.
   */
  Multi;
  Multi;

  /**
   * Execute a Lua script server side.
   */
  eval: Multi;
  EVAL: Multi;

  /**
   * Execute a Lue script server side.
   */
  evalsha: Multi;
  EVALSHA: Multi;

  /**
   * Determine if a key exists.
   */
  exists: Multi;
  EXISTS: Multi;

  /**
   * Set a key's time to live in seconds.
   */
  expire(key: string, seconds: number): Multi;
  EXPIRE(key: string, seconds: number): Multi;

  /**
   * Set the expiration for a key as a UNIX timestamp.
   */
  expireat(key: string, timestamp: number): Multi;
  EXPIREAT(key: string, timestamp: number): Multi;

  /**
   * Remove all keys from all databases.
   */
  flushall(): Multi;
  FLUSHALL(): Multi;

  /**
   * Remove all keys from the current database.
   */
  flushdb(): Multi;
  FLUSHDB(): Multi;

  /**
   * Add one or more geospatial items in the geospatial index represented using a sorted set.
   */
  geoadd: Multi;
  GEOADD: Multi;

  /**
   * Returns members of a geospatial index as standard geohash strings.
   */
  geohash: Multi;
  GEOHASH: Multi;

  /**
   * Returns longitude and latitude of members of a geospatial index.
   */
  geopos: Multi;
  GEOPOS: Multi;

  /**
   * Returns the distance between two members of a geospatial index.
   */
  geodist: Multi;
  GEODIST: Multi;

  /**
   * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point.
   */
  georadius: Multi;
  GEORADIUS: Multi;

  /**
   * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member.
   */
  georadiusbymember: Multi;
  GEORADIUSBYMEMBER: Multi;

  /**
   * Get the value of a key.
   */
  get(key: string): Multi;
  GET(key: string): Multi;

  /**
   * Returns the bit value at offset in the string value stored at key.
   */
  getbit(key: string, offset: number): Multi;
  GETBIT(key: string, offset: number): Multi;

  /**
   * Get a substring of the string stored at a key.
   */
  getrange(key: string, start: number, end: number): Multi;
  GETRANGE(key: string, start: number, end: number): Multi;

  /**
   * Set the string value of a key and return its old value.
   */
  getset(key: string, value: string): Multi;
  GETSET(key: string, value: string): Multi;

  /**
   * Delete on or more hash fields.
   */
  hdel: Multi;
  HDEL: Multi;

  /**
   * Determine if a hash field exists.
   */
  hexists(key: string, field: string): Multi;
  HEXISTS(key: string, field: string): Multi;

  /**
   * Get the value of a hash field.
   */
  hget(key: string, field: string): Multi;
  HGET(key: string, field: string): Multi;

  /**
   * Get all fields and values in a hash.
   */
  hgetall(key: string): Multi;
  HGETALL(key: string): Multi;

  /**
   * Increment the integer value of a hash field by the given number.
   */
  hincrby(key: string, field: string, incr: number): Multi;
  HINCRBY(key: string, field: string, incr: number): Multi;

  /**
   * Increment the float value of a hash field by the given amount.
   */
  hincrbyfloat(key: string, field: string, incr: number): Multi;
  HINCRBYFLOAT(key: string, field: string, incr: number): Multi;

  /**
   * Get all the fields of a hash.
   */
  hkeys(key: string): Multi;
  HKEYS(key: string): Multi;

  /**
   * Get the number of fields in a hash.
   */
  hlen(key: string): Multi;
  HLEN(key: string): Multi;

  /**
   * Get the values of all the given hash fields.
   */
  hmget: Multi;
  HMGET: Multi;

  /**
   * Set the string value of a hash field.
   */
  hset(key: string, field: string, value: string): Multi;
  HSET(key: string, field: string, value: string): Multi;

  /**
   * Set the value of a hash field, only if the field does not exist.
   */
  hsetnx(key: string, field: string, value: string): Multi;
  HSETNX(key: string, field: string, value: string): Multi;

  /**
   * Get the length of the value of a hash field.
   */
  hstrlen(key: string, field: string): Multi;
  HSTRLEN(key: string, field: string): Multi;

  /**
   * Get all the values of a hash.
   */
  hvals(key: string): Multi;
  HVALS(key: string): Multi;

  /**
   * Increment the integer value of a key by one.
   */
  incr(key: string): Multi;
  INCR(key: string): Multi;

  /**
   * Increment the integer value of a key by the given amount.
   */
  incrby(key: string, increment: number): Multi;
  INCRBY(key: string, increment: number): Multi;

  /**
   * Increment the float value of a key by the given amount.
   */
  incrbyfloat(key: string, increment: number): Multi;
  INCRBYFLOAT(key: string, increment: number): Multi;

  /**
   * Find all keys matching the given pattern.
   */
  keys(pattern: string): Multi;
  KEYS(pattern: string): Multi;

  /**
   * Get the UNIX time stamp of the last successful save to disk.
   */
  lastsave(): Multi;
  LASTSAVE(): Multi;

  /**
   * Get an element from a list by its index.
   */
  lindex(key: string, index: number): Multi;
  LINDEX(key: string, index: number): Multi;

  /**
   * Insert an element before or after another element in a list.
   */
  linsert(key: string, dir: 'BEFORE' | 'AFTER', pivot: string, value: string): Multi;
  LINSERT(key: string, dir: 'BEFORE' | 'AFTER', pivot: string, value: string): Multi;

  /**
   * Get the length of a list.
   */
  llen(key: string): Multi;
  LLEN(key: string): Multi;

  /**
   * Remove and get the first element in a list.
   */
  lpop(key: string): Multi;
  LPOP(key: string): Multi;

  /**
   * Prepend one or multiple values to a list.
   */
  lpush: Multi;
  LPUSH: Multi;

  /**
   * Prepend a value to a list, only if the list exists.
   */
  lpushx(key: string, value: string): Multi;
  LPUSHX(key: string, value: string): Multi;

  /**
   * Get a range of elements from a list.
   */
  lrange(key: string, start: number, stop: number): Multi;
  LRANGE(key: string, start: number, stop: number): Multi;

  /**
   * Remove elements from a list.
   */
  lrem(key: string, count: number, value: string): Multi;
  LREM(key: string, count: number, value: string): Multi;

  /**
   * Set the value of an element in a list by its index.
   */
  lset(key: string, index: number, value: string): Multi;
  LSET(key: string, index: number, value: string): Multi;

  /**
   * Trim a list to the specified range.
   */
  ltrim(key: string, start: number, stop: number): Multi;
  LTRIM(key: string, start: number, stop: number): Multi;

  /**
   * Get the values of all given keys.
   */
  mget: Multi;
  MGET: Multi;

  /**
   * Atomically tranfer a key from a Redis instance to another one.
   */
  migrate: Multi;
  MIGRATE: Multi;

  /**
   * Move a key to another database.
   */
  move(key: string, db: string | number): Multi;
  MOVE(key: string, db: string | number): Multi;

  /**
   * Set multiple keys to multiple values.
   */
  mset: Multi;
  MSET: Multi;

  /**
   * Set multiple keys to multiple values, only if none of the keys exist.
   */
  msetnx: Multi;
  MSETNX: Multi;

  /**
   * Inspect the internals of Redis objects.
   */
  object: Multi;
  OBJECT: Multi;

  /**
   * Remove the expiration from a key.
   */
  persist(key: string): Multi;
  PERSIST(key: string): Multi;

  /**
   * Remove a key's time to live in milliseconds.
   */
  pexpire(key: string, milliseconds: number): Multi;
  PEXPIRE(key: string, milliseconds: number): Multi;

  /**
   * Set the expiration for a key as a UNIX timestamp specified in milliseconds.
   */
  pexpireat(key: string, millisecondsTimestamp: number): Multi;
  PEXPIREAT(key: string, millisecondsTimestamp: number): Multi;

  /**
   * Adds the specified elements to the specified HyperLogLog.
   */
  pfadd: Multi;
  PFADD: Multi;

  /**
   * Return the approximated cardinality of the set(s) observed by the HyperLogLog at key(s).
   */
  pfcount: Multi;
  PFCOUNT: Multi;

  /**
   * Merge N different HyperLogLogs into a single one.
   */
  pfmerge: Multi;
  PFMERGE: Multi;

  /**
   * Set the value and expiration in milliseconds of a key.
   */
  psetex(key: string, milliseconds: number, value: string): Multi;
  PSETEX(key: string, milliseconds: number, value: string): Multi;

  /**
   * Inspect the state of the Pub/Sub subsytem.
   */
  pubsub: Multi;
  PUBSUB: Multi;

  /**
   * Get the time to live for a key in milliseconds.
   */
  pttl(key: string): Multi;
  PTTL(key: string): Multi;

  /**
   * Close the connection.
   */
  quit(): Multi;
  QUIT(): Multi;

  /**
   * Return a random key from the keyspace.
   */
  randomkey(): Multi;
  RANDOMKEY(): Multi;

  /**
   * Enables read queries for a connection to a cluster slave node.
   */
  readonly(): Multi;
  READONLY(): Multi;

  /**
   * Disables read queries for a connection to cluster slave node.
   */
  readwrite(): Multi;
  READWRITE(): Multi;

  /**
   * Rename a key.
   */
  rename(key: string, newkey: string): Multi;
  RENAME(key: string, newkey: string): Multi;

  /**
   * Rename a key, only if the new key does not exist.
   */
  renamenx(key: string, newkey: string): Multi;
  RENAMENX(key: string, newkey: string): Multi;

  /**
   * Create a key using the provided serialized value, previously obtained using DUMP.
   */
  restore(key: string, ttl: number, serializedValue: string): Multi;
  RESTORE(key: string, ttl: number, serializedValue: string): Multi;

  /**
   * Return the role of the instance in the context of replication.
   */
  role(): Multi;
  ROLE(): Multi;

  /**
   * Remove and get the last element in a list.
   */
  rpop(key: string): Multi;
  RPOP(key: string): Multi;

  /**
   * Remove the last element in a list, prepend it to another list and return it.
   */
  rpoplpush(source: string, destination: string): Multi;
  RPOPLPUSH(source: string, destination: string): Multi;

  /**
   * Append one or multiple values to a list.
   */
  rpush: Multi;
  RPUSH: Multi;

  /**
   * Append a value to a list, only if the list exists.
   */
  rpushx(key: string, value: string): Multi;
  RPUSHX(key: string, value: string): Multi;

  /**
   * Append one or multiple members to a set.
   */
  sadd: Multi;
  SADD: Multi;

  /**
   * Synchronously save the dataset to disk.
   */
  save(): Multi;
  SAVE(): Multi;

  /**
   * Get the number of members in a set.
   */
  scard(key: string): Multi;
  SCARD(key: string): Multi;

  /**
   * DEBUG - Set the debug mode for executed scripts.
   * EXISTS - Check existence of scripts in the script cache.
   * FLUSH - Remove all scripts from the script cache.
   * KILL - Kill the script currently in execution.
   * LOAD - Load the specified Lua script into the script cache.
   */
  script: Multi;
  SCRIPT: Multi;

  /**
   * Subtract multiple sets.
   */
  sdiff: Multi;
  SDIFF: Multi;

  /**
   * Subtract multiple sets and store the resulting set in a key.
   */
  sdiffstore: Multi;
  SDIFFSTORE: Multi;

  /**
   * Change the selected database for the current connection.
   */
  select(index: number | string): Multi;
  SELECT(index: number | string): Multi;

  /**
   * Set the string value of a key.
   */
  set(key: string, value: string): Multi;
  set(key: string, value: string, flag: string): Multi;
  set(key: string, value: string, mode: string, duration: number): Multi;
  set(key: string, value: string, mode: string, duration: number, flag: string): Multi;
  SET(key: string, value: string): Multi;
  SET(key: string, value: string, flag: string): Multi;
  SET(key: string, value: string, mode: string, duration: number): Multi;
  SET(key: string, value: string, mode: string, duration: number, flag: string): Multi;

  /**
   * Sets or clears the bit at offset in the string value stored at key.
   */
  setbit(key: string, offset: number, value: string): Multi;
  SETBIT(key: string, offset: number, value: string): Multi;

  /**
   * Set the value and expiration of a key.
   */
  setex(key: string, seconds: number, value: string): Multi;
  SETEX(key: string, seconds: number, value: string): Multi;

  /**
   * Set the value of a key, only if the key does not exist.
   */
  setnx(key: string, value: string): Multi;
  SETNX(key: string, value: string): Multi;

  /**
   * Overwrite part of a string at key starting at the specified offset.
   */
  setrange(key: string, offset: number, value: string): Multi;
  SETRANGE(key: string, offset: number, value: string): Multi;

  /**
   * Synchronously save the dataset to disk and then shut down the server.
   */
  shutdown: Multi;
  SHUTDOWN: Multi;

  /**
   * Intersect multiple sets.
   */
  sinter: Multi;
  SINTER: Multi;

  /**
   * Intersect multiple sets and store the resulting set in a key.
   */
  sinterstore: Multi;
  SINTERSTORE: Multi;

  /**
   * Determine if a given value is a member of a set.
   */
  sismember(key: string, member: string): Multi;
  SISMEMBER(key: string, member: string): Multi;

  /**
   * Make the server a slave of another instance, or promote it as master.
   */
  slaveof(host: string, port: string | number): Multi;
  SLAVEOF(host: string, port: string | number): Multi;

  /**
   * Manages the Redis slow queries log.
   */
  slowlog: Multi;
  SLOWLOG: Multi;

  /**
   * Get all the members in a set.
   */
  smembers(key: string): Multi;
  SMEMBERS(key: string): Multi;

  /**
   * Move a member from one set to another.
   */
  smove(source: string, destination: string, member: string): Multi;
  SMOVE(source: string, destination: string, member: string): Multi;

  /**
   * Sort the elements in a list, set or sorted set.
   */
  sort: Multi;
  SORT: Multi;

  /**
   * Remove and return one or multiple random members from a set.
   */
  spop(key: string): Multi;
  spop(key: string, count: number): Multi;
  SPOP(key: string): Multi;
  SPOP(key: string, count: number): Multi;

  /**
   * Get one or multiple random members from a set.
   */
  srandmember(key: string): Multi;
  srandmember(key: string, count: number): Multi;
  SRANDMEMBER(key: string): Multi;
  SRANDMEMBER(key: string, count: number): Multi;

  /**
   * Remove one or more members from a set.
   */
  srem: Multi;
  SREM: Multi;

  /**
   * Get the length of the value stored in a key.
   */
  strlen(key: string): Multi;
  STRLEN(key: string): Multi;

  /**
   * Add multiple sets.
   */
  sunion: Multi;
  SUNION: Multi;

  /**
   * Add multiple sets and store the resulting set in a key.
   */
  sunionstore: Multi;
  SUNIONSTORE: Multi;

  /**
   * Internal command used for replication.
   */
  sync(): Multi;
  SYNC(): Multi;

  /**
   * Return the current server time.
   */
  time(): Multi;
  TIME(): Multi;

  /**
   * Get the time to live for a key.
   */
  ttl(key: string): Multi;
  TTL(key: string): Multi;

  /**
   * Determine the type stored at key.
   */
  type(key: string): Multi;
  TYPE(key: string): Multi;

  /**
   * Forget about all watched keys.
   */
  unwatch(): Multi;
  UNWATCH(): Multi;

  /**
   * Wait for the synchronous replication of all the write commands sent in the context of the current connection.
   */
  wait(numslaves: number, timeout: number): Multi;
  WAIT(numslaves: number, timeout: number): Multi;

  /**
   * Watch the given keys to determine execution of the MULTI/EXEC block.
   */
  watch: Multi;
  WATCH: Multi;

  /**
   * Add one or more members to a sorted set, or update its score if it already exists.
   */
  zadd: Multi;
  ZADD: Multi;

  /**
   * Get the number of members in a sorted set.
   */
  zcard(key: string): Multi;
  ZCARD(key: string): Multi;

  /**
   * Count the members in a sorted set with scores between the given values.
   */
  zcount(key: string, min: number | string, max: number | string): Multi;
  ZCOUNT(key: string, min: number | string, max: number | string): Multi;

  /**
   * Increment the score of a member in a sorted set.
   */
  zincrby(key: string, increment: number, member: string): Multi;
  ZINCRBY(key: string, increment: number, member: string): Multi;

  /**
   * Intersect multiple sorted sets and store the resulting sorted set in a new key.
   */
  zinterstore: Multi;
  ZINTERSTORE: Multi;

  /**
   * Count the number of members in a sorted set between a given lexicographic range.
   */
  zlexcount(key: string, min: string, max: string): Multi;
  ZLEXCOUNT(key: string, min: string, max: string): Multi;

  /**
   * Return a range of members in a sorted set, by index.
   */
  zrange(key: string, start: number, stop: number): Multi;
  zrange(key: string, start: number, stop: number, withscores: string): Multi;
  ZRANGE(key: string, start: number, stop: number): Multi;
  ZRANGE(key: string, start: number, stop: number, withscores: string): Multi;

  /**
   * Return a range of members in a sorted set, by lexicographical range.
   */
  zrangebylex(key: string, min: string, max: string): Multi;
  zrangebylex(key: string, min: string, max: string, limit: string, offset: number, count: number): Multi;
  ZRANGEBYLEX(key: string, min: string, max: string): Multi;
  ZRANGEBYLEX(key: string, min: string, max: string, limit: string, offset: number, count: number): Multi;

  /**
   * Return a range of members in a sorted set, by lexicographical range, ordered from higher to lower strings.
   */
  zrevrangebylex(key: string, min: string, max: string): Multi;
  zrevrangebylex(key: string, min: string, max: string, limit: string, offset: number, count: number): Multi;
  ZREVRANGEBYLEX(key: string, min: string, max: string): Multi;
  ZREVRANGEBYLEX(key: string, min: string, max: string, limit: string, offset: number, count: number): Multi;

  /**
   * Return a range of members in a sorted set, by score.
   */
  zrangebyscore(key: string, min: number | string, max: number | string): Multi;
  zrangebyscore(key: string, min: number | string, max: number | string, withscores: string): Multi;
  zrangebyscore(key: string, min: number | string, max: number | string, limit: string, offset: number, count: number): Multi;
  zrangebyscore(key: string, min: number | string, max: number | string, withscores: string, limit: string, offset: number, count: number): Multi;
  ZRANGEBYSCORE(key: string, min: number | string, max: number | string): Multi;
  ZRANGEBYSCORE(key: string, min: number | string, max: number | string, withscores: string): Multi;
  ZRANGEBYSCORE(key: string, min: number | string, max: number | string, limit: string, offset: number, count: number): Multi;
  ZRANGEBYSCORE(key: string, min: number | string, max: number | string, withscores: string, limit: string, offset: number, count: number): Multi;

  /**
   * Determine the index of a member in a sorted set.
   */
  zrank(key: string, member: string): Multi;
  ZRANK(key: string, member: string): Multi;

  /**
   * Remove one or more members from a sorted set.
   */
  zrem: Multi;
  ZREM: Multi;

  /**
   * Remove all members in a sorted set between the given lexicographical range.
   */
  zremrangebylex(key: string, min: string, max: string): Multi;
  ZREMRANGEBYLEX(key: string, min: string, max: string): Multi;

  /**
   * Remove all members in a sorted set within the given indexes.
   */
  zremrangebyrank(key: string, start: number, stop: number): Multi;
  ZREMRANGEBYRANK(key: string, start: number, stop: number): Multi;

  /**
   * Remove all members in a sorted set within the given indexes.
   */
  zremrangebyscore(key: string, min: string | number, max: string | number): Multi;
  ZREMRANGEBYSCORE(key: string, min: string | number, max: string | number): Multi;

  /**
   * Return a range of members in a sorted set, by index, with scores ordered from high to low.
   */
  zrevrange(key: string, start: number, stop: number): Multi;
  zrevrange(key: string, start: number, stop: number, withscores: string): Multi;
  ZREVRANGE(key: string, start: number, stop: number): Multi;
  ZREVRANGE(key: string, start: number, stop: number, withscores: string): Multi;

  /**
   * Return a range of members in a sorted set, by score, with scores ordered from high to low.
   */
  zrevrangebyscore(key: string, min: number | string, max: number | string): Multi;
  zrevrangebyscore(key: string, min: number | string, max: number | string, withscores: string): Multi;
  zrevrangebyscore(key: string, min: number | string, max: number | string, limit: string, offset: number, count: number): Multi;
  zrevrangebyscore(key: string, min: number | string, max: number | string, withscores: string, limit: string, offset: number, count: number): Multi;
  ZREVRANGEBYSCORE(key: string, min: number | string, max: number | string): Multi;
  ZREVRANGEBYSCORE(key: string, min: number | string, max: number | string, withscores: string): Multi;
  ZREVRANGEBYSCORE(key: string, min: number | string, max: number | string, limit: string, offset: number, count: number): Multi;
  ZREVRANGEBYSCORE(key: string, min: number | string, max: number | string, withscores: string, limit: string, offset: number, count: number): Multi;

  /**
   * Determine the index of a member in a sorted set, with scores ordered from high to low.
   */
  zrevrank(key: string, member: string): Multi;
  ZREVRANK(key: string, member: string): Multi;

  /**
   * Get the score associated with the given member in a sorted set.
   */
  zscore(key: string, member: string): Multi;
  ZSCORE(key: string, member: string): Multi;

  /**
   * Add multiple sorted sets and store the resulting sorted set in a new key.
   */
  zunionstore: Multi;
  ZUNIONSTORE: Multi;

  /**
   * Incrementally iterate the keys space.
   */
  scan: Multi;
  SCAN: Multi;

  /**
   * Incrementally iterate Set elements.
   */
  sscan: Multi;
  SSCAN: Multi;

  /**
   * Incrementally iterate hash fields and associated values.
   */
  hscan: Multi;
  HSCAN: Multi;

  /**
   * Incrementally iterate sorted sets elements and associated scores.
   */
  zscan: Multi;
  ZSCAN: Multi;
}

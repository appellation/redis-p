import { this, Command, SetCommand, ListCommand, LastCommand, KeyCommand } from './';


export default interface Commands {
  /**
   * Listen for all requests received by the server in real time.
   */
  monitor(): this;
  MONITOR(): this;

  /**
   * Get information and statistics about the server.
   */
  info(section?: string | string[]): this;
  INFO(section?: string | string[]): this;

  /**
   * Ping the server.
   */
  ping(message?: string): this;

  /**
   * Post a message to a channel.
   */
  publish(channel: string, value: string): this;

  /**
   * Authenticate to the server.
   */
  auth(password: string): this;
  AUTH(password: string): this;

  /**
   * KILL - Kill the connection of a client.
   * LIST - Get the list of client connections.
   * GETNAME - Get the current connection name.
   * PAUSE - Stop processing commands from clients for some time.
   * REPLY - Instruct the server whether to reply to commands.
   * SETNAME - Set the current connection name.
   */
  client: Command<string, any, this>;
  CLIENT: Command<string, any, this>;

  /**
   * Set multiple hash fields to multiple values.
   */
  hmset: SetCommand<string | number, string, this>;
  HMSET: SetCommand<string | number, string, this>;

  /**
   * Listen for messages published to the given channels.
   */
  subscribe: ListCommand<string, string, this>;
  SUBSCRIBE: ListCommand<string, string, this>;

  /**
   * Stop listening for messages posted to the given channels.
   */
  unsubscribe: ListCommand<string, string, this>;
  UNSUBSCRIBE: ListCommand<string, string, this>;

  /**
   * Listen for messages published to channels matching the given patterns.
   */
  psubscribe: ListCommand<string, string, this>;
  PSUBSCRIBE: ListCommand<string, string, this>;

  /**
   * Stop listening for messages posted to channels matching the given patterns.
   */
  punsubscribe: ListCommand<string, string, this>;
  PUNSUBSCRIBE: ListCommand<string, string, this>;

  /**
   * Append a value to a key.
   */
  append(key: string, value: string): this;
  APPEND(key: string, value: string): this;

  /**
   * Asynchronously rewrite the append-only file.
   */
  bgwriteaof(): this;
  BGWRITEAOF(): this;

  /**
   * Asynchronously save the dataset to disk.
   */
  bgsave(): this;
  BGSAVE(): this;

  /**
   * Count set bits in a string.
   */
  bitcount(key: string): this;
  bitcount(key: string, start: number, end: number): this;
  BITCOUNT(key: string): this;
  BITCOUNT(key: string, start: number, end: number): this;

  /**
   * Perform arbitrary bitfield integer operations on strings.
   */
  bitfield: KeyCommand<string | number, [number, number], this>;
  BITFIELD: KeyCommand<string | number, [number, number], this>;

  /**
   * Perform bitwise operations between strings.
   */
  bitop(op: string, dest: string, ...args: string[]): this;
  BITOP(op: string, dest: string, ...args: string[]): this;

  /**
   * Find first bit set or clear in a string.
   */
  bitpos(key: string, bit: number, start: number, end: number): this;
  bitpos(key: string, bit: number, start: number): this;
  bitpos(key: string, bit: number): this;
  BITPOS(key: string, bit: number, start: number, end: number): this;
  BITPOS(key: string, bit: number, start: number): this;
  BITPOS(key: string, bit: number): this;

  /**
   * Remove and get the first element in a list, or block until one is available.
   */
  blpop: LastCommand<string, number, [string, string], this>;
  BLPOP: LastCommand<string, number, [string, string], this>;

  /**
   * Remove and get the last element in a list, or block until one is available.
   */
  brpop: this;
  BRPOP: this;

  /**
   * Pop a value from a list, push it to another list and return it; or block until one is available.
   */
  brpoplpush(source: string, dest: string, timeout: number): this;
  BRPOPLPUSH(source: string, dest: string, timeout: number): this;

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
  cluster: Command<string, any, this>;
  CLUSTER: Command<string, any, this>;

  /**
   * Get array of Redis command details.
   *
   * COUNT - Get total number of Redis commands.
   * GETKEYS - Extract keys given a full Redis command.
   * INFO - Get array of specific REdis command details.
   */
  command(): this;
  COMMAND(): this;

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
  config: Command<string, boolean, this>;
  CONFIG: Command<string, boolean, this>;

  /**
   * Return the number of keys in the selected database.
   */
  dbsize(): this;
  DBSIZE(): this;

  /**
   * OBJECT - Get debugging information about a key.
   * SEGFAULT - Make the server crash.
   */
  debug(): this;
  DEBUG(): this;

  /**
   * Decrement the integer value of a key by one.
   */
  decr(key: string): this;
  DECR(key: string): this;

  /**
   * Decrement the integer value of a key by the given number.
   */
  decrby(key: string, dec: number): this;
  DECRBY(key: string, dec: number): this;

  /**
   * Delete a key.
   */
  del: Command<string, number, this>;
  DEL: Command<string, number, this>;

  /**
   * Discard all commands issued after MULTI.
   */
  discard(): Promise<'OK'>;
  DISCARD(): Promise<'OK'>;

  /**
   * Return a serialized version of the value stored at the specified key.
   */
  dump(key: string): this;
  DUMP(key: string): this;

  /**
   * Echo the given string.
   */
  echo<T extends string>(message: T): this;
  ECHO<T extends string>(message: T): this;

  /**
   * Execute a Lua script server side.
   */
  eval: Command<string | number, any, this>;
  EVAL: Command<string | number, any, this>;

  /**
   * Execute a Lue script server side.
   */
  evalsha: Command<string | number, any, this>;
  EVALSHA: Command<string | number, any, this>;

  /**
   * Determine if a key exists.
   */
  exists: Command<string, number, this>;
  EXISTS: Command<string, number, this>;

  /**
   * Set a key's time to live in seconds.
   */
  expire(key: string, seconds: number): this;
  EXPIRE(key: string, seconds: number): this;

  /**
   * Set the expiration for a key as a UNIX timestamp.
   */
  expireat(key: string, timestamp: number): this;
  EXPIREAT(key: string, timestamp: number): this;

  /**
   * Remove all keys from all databases.
   */
  flushall(): this;
  FLUSHALL(): this;

  /**
   * Remove all keys from the current database.
   */
  flushdb(): this;
  FLUSHDB(): this;

  /**
   * Add one or more geospatial items in the geospatial index represented using a sorted set.
   */
  geoadd: KeyCommand<string | number, number, this>;
  GEOADD: KeyCommand<string | number, number, this>;

  /**
   * Returns members of a geospatial index as standard geohash strings.
   */
  geohash: KeyCommand<string, number, this>;
  GEOHASH: KeyCommand<string, number, this>;

  /**
   * Returns longitude and latitude of members of a geospatial index.
   */
  geopos: KeyCommand<string, Array<[number, number]>, this>;
  GEOPOS: KeyCommand<string, Array<[number, number]>, this>;

  /**
   * Returns the distance between two members of a geospatial index.
   */
  geodist: KeyCommand<string, string, this>;
  GEODIST: KeyCommand<string, string, this>;

  /**
   * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point.
   */
  georadius: KeyCommand<string | number, Array<string | [string, string | [string, string]]>, this>;
  GEORADIUS: KeyCommand<string | number, Array<string | [string, string | [string, string]]>, this>;

  /**
   * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member.
   */
  georadiusbymember: KeyCommand<string | number, Array<string | [string, string | [string, string]]>, this>;
  GEORADIUSBYMEMBER: KeyCommand<string | number, Array<string | [string, string | [string, string]]>, this>;

  /**
   * Get the value of a key.
   */
  get(key: string): this;
  GET(key: string): this;

  /**
   * Returns the bit value at offset in the string value stored at key.
   */
  getbit(key: string, offset: number): this;
  GETBIT(key: string, offset: number): this;

  /**
   * Get a substring of the string stored at a key.
   */
  getrange(key: string, start: number, end: number): this;
  GETRANGE(key: string, start: number, end: number): this;

  /**
   * Set the string value of a key and return its old value.
   */
  getset(key: string, value: string): this;
  GETSET(key: string, value: string): this;

  /**
   * Delete on or more hash fields.
   */
  hdel: KeyCommand<string, number, this>;
  HDEL: KeyCommand<string, number, this>;

  /**
   * Determine if a hash field exists.
   */
  hexists(key: string, field: string): this;
  HEXISTS(key: string, field: string): this;

  /**
   * Get the value of a hash field.
   */
  hget(key: string, field: string): this;
  HGET(key: string, field: string): this;

  /**
   * Get all fields and values in a hash.
   */
  hgetall(key: string): this;
  HGETALL(key: string): this;

  /**
   * Increment the integer value of a hash field by the given number.
   */
  hincrby(key: string, field: string, incr: number): this;
  HINCRBY(key: string, field: string, incr: number): this;

  /**
   * Increment the float value of a hash field by the given amount.
   */
  hincrbyfloat(key: string, field: string, incr: number): this;
  HINCRBYFLOAT(key: string, field: string, incr: number): this;

  /**
   * Get all the fields of a hash.
   */
  hkeys(key: string): this;
  HKEYS(key: string): this;

  /**
   * Get the number of fields in a hash.
   */
  hlen(key: string): this;
  HLEN(key: string): this;

  /**
   * Get the values of all the given hash fields.
   */
  hmget: KeyCommand<string, string[], this>;
  HMGET: KeyCommand<string, string[], this>;

  /**
   * Set the string value of a hash field.
   */
  hset(key: string, field: string, value: string): this;
  HSET(key: string, field: string, value: string): this;

  /**
   * Set the value of a hash field, only if the field does not exist.
   */
  hsetnx(key: string, field: string, value: string): this;
  HSETNX(key: string, field: string, value: string): this;

  /**
   * Get the length of the value of a hash field.
   */
  hstrlen(key: string, field: string): this;
  HSTRLEN(key: string, field: string): this;

  /**
   * Get all the values of a hash.
   */
  hvals(key: string): this;
  HVALS(key: string): this;

  /**
   * Increment the integer value of a key by one.
   */
  incr(key: string): this;
  INCR(key: string): this;

  /**
   * Increment the integer value of a key by the given amount.
   */
  incrby(key: string, increment: number): this;
  INCRBY(key: string, increment: number): this;

  /**
   * Increment the float value of a key by the given amount.
   */
  incrbyfloat(key: string, increment: number): this;
  INCRBYFLOAT(key: string, increment: number): this;

  /**
   * Find all keys matching the given pattern.
   */
  keys(pattern: string): this;
  KEYS(pattern: string): this;

  /**
   * Get the UNIX time stamp of the last successful save to disk.
   */
  lastsave(): this;
  LASTSAVE(): this;

  /**
   * Get an element from a list by its index.
   */
  lindex(key: string, index: number): this;
  LINDEX(key: string, index: number): this;

  /**
   * Insert an element before or after another element in a list.
   */
  linsert(key: string, dir: 'BEFORE' | 'AFTER', pivot: string, value: string): this;
  LINSERT(key: string, dir: 'BEFORE' | 'AFTER', pivot: string, value: string): this;

  /**
   * Get the length of a list.
   */
  llen(key: string): this;
  LLEN(key: string): this;

  /**
   * Remove and get the first element in a list.
   */
  lpop(key: string): this;
  LPOP(key: string): this;

  /**
   * Prepend one or multiple values to a list.
   */
  lpush: KeyCommand<string, number, this>;
  LPUSH: KeyCommand<string, number, this>;

  /**
   * Prepend a value to a list, only if the list exists.
   */
  lpushx(key: string, value: string): this;
  LPUSHX(key: string, value: string): this;

  /**
   * Get a range of elements from a list.
   */
  lrange(key: string, start: number, stop: number): this;
  LRANGE(key: string, start: number, stop: number): this;

  /**
   * Remove elements from a list.
   */
  lrem(key: string, count: number, value: string): this;
  LREM(key: string, count: number, value: string): this;

  /**
   * Set the value of an element in a list by its index.
   */
  lset(key: string, index: number, value: string): this;
  LSET(key: string, index: number, value: string): this;

  /**
   * Trim a list to the specified range.
   */
  ltrim(key: string, start: number, stop: number): this;
  LTRIM(key: string, start: number, stop: number): this;

  /**
   * Get the values of all given keys.
   */
  mget: Command<string, string[], this>;
  MGET: Command<string, string[], this>;

  /**
   * Atomically tranfer a key from a Redis instance to another one.
   */
  migrate: Command<string, boolean, this>;
  MIGRATE: Command<string, boolean, this>;

  /**
   * Move a key to another database.
   */
  move(key: string, db: string | number): this;
  MOVE(key: string, db: string | number): this;

  /**
   * Set multiple keys to multiple values.
   */
  mset: Command<string, boolean, this>;
  MSET: Command<string, boolean, this>;

  /**
   * Set multiple keys to multiple values, only if none of the keys exist.
   */
  msetnx: Command<string, boolean, this>;
  MSETNX: Command<string, boolean, this>;

  /**
   * Inspect the internals of Redis objects.
   */
  object: Command<string, any, this>;
  OBJECT: Command<string, any, this>;

  /**
   * Remove the expiration from a key.
   */
  persist(key: string): this;
  PERSIST(key: string): this;

  /**
   * Remove a key's time to live in milliseconds.
   */
  pexpire(key: string, milliseconds: number): this;
  PEXPIRE(key: string, milliseconds: number): this;

  /**
   * Set the expiration for a key as a UNIX timestamp specified in milliseconds.
   */
  pexpireat(key: string, millisecondsTimestamp: number): this;
  PEXPIREAT(key: string, millisecondsTimestamp: number): this;

  /**
   * Adds the specified elements to the specified HyperLogLog.
   */
  pfadd: KeyCommand<string, number, this>;
  PFADD: KeyCommand<string, number, this>;

  /**
   * Return the approximated cardinality of the set(s) observed by the HyperLogLog at key(s).
   */
  pfcount: KeyCommand<string, number, this>;
  PFCOUNT: KeyCommand<string, number, this>;

  /**
   * Merge N different HyperLogLogs into a single one.
   */
  pfmerge: Command<string, boolean, this>;
  PFMERGE: Command<string, boolean, this>;

  /**
   * Set the value and expiration in milliseconds of a key.
   */
  psetex(key: string, milliseconds: number, value: string): this;
  PSETEX(key: string, milliseconds: number, value: string): this;

  /**
   * Inspect the state of the Pub/Sub subsytem.
   */
  pubsub: Command<string, number, this>;
  PUBSUB: Command<string, number, this>;

  /**
   * Get the time to live for a key in milliseconds.
   */
  pttl(key: string): this;
  PTTL(key: string): this;

  /**
   * Close the connection.
   */
  quit(): this;
  QUIT(): this;

  /**
   * Return a random key from the keyspace.
   */
  randomkey(): this;
  RANDOMKEY(): this;

  /**
   * Enables read queries for a connection to a cluster slave node.
   */
  readonly(): this;
  READONLY(): this;

  /**
   * Disables read queries for a connection to cluster slave node.
   */
  readwrite(): this;
  READWRITE(): this;

  /**
   * Rename a key.
   */
  rename(key: string, newkey: string): this;
  RENAME(key: string, newkey: string): this;

  /**
   * Rename a key, only if the new key does not exist.
   */
  renamenx(key: string, newkey: string): this;
  RENAMENX(key: string, newkey: string): this;

  /**
   * Create a key using the provided serialized value, previously obtained using DUMP.
   */
  restore(key: string, ttl: number, serializedValue: string): this;
  RESTORE(key: string, ttl: number, serializedValue: string): this;

  /**
   * Return the role of the instance in the context of replication.
   */
  role(): this;
  ROLE(): this;

  /**
   * Remove and get the last element in a list.
   */
  rpop(key: string): this;
  RPOP(key: string): this;

  /**
   * Remove the last element in a list, prepend it to another list and return it.
   */
  rpoplpush(source: string, destination: string): this;
  RPOPLPUSH(source: string, destination: string): this;

  /**
   * Append one or multiple values to a list.
   */
  rpush: KeyCommand<string, number, this>;
  RPUSH: KeyCommand<string, number, this>;

  /**
   * Append a value to a list, only if the list exists.
   */
  rpushx(key: string, value: string): this;
  RPUSHX(key: string, value: string): this;

  /**
   * Append one or multiple members to a set.
   */
  sadd: KeyCommand<string, number, this>;
  SADD: KeyCommand<string, number, this>;

  /**
   * Synchronously save the dataset to disk.
   */
  save(): this;
  SAVE(): this;

  /**
   * Get the number of members in a set.
   */
  scard(key: string): this;
  SCARD(key: string): this;

  /**
   * DEBUG - Set the debug mode for executed scripts.
   * EXISTS - Check existence of scripts in the script cache.
   * FLUSH - Remove all scripts from the script cache.
   * KILL - Kill the script currently in execution.
   * LOAD - Load the specified Lua script into the script cache.
   */
  script: Command<string, any, this>;
  SCRIPT: Command<string, any, this>;

  /**
   * Subtract multiple sets.
   */
  sdiff: Command<string, string[], this>;
  SDIFF: Command<string, string[], this>;

  /**
   * Subtract multiple sets and store the resulting set in a key.
   */
  sdiffstore: KeyCommand<string, number, this>;
  SDIFFSTORE: KeyCommand<string, number, this>;

  /**
   * Change the selected database for the current connection.
   */
  select(index: number | string): this;
  SELECT(index: number | string): this;

  /**
   * Set the string value of a key.
   */
  set(key: string, value: string): this;
  set(key: string, value: string, flag: string): this;
  set(key: string, value: string, mode: string, duration: number): this;
  set(key: string, value: string, mode: string, duration: number, flag: string): this;
  SET(key: string, value: string): this;
  SET(key: string, value: string, flag: string): this;
  SET(key: string, value: string, mode: string, duration: number): this;
  SET(key: string, value: string, mode: string, duration: number, flag: string): this;

  /**
   * Sets or clears the bit at offset in the string value stored at key.
   */
  setbit(key: string, offset: number, value: string): this;
  SETBIT(key: string, offset: number, value: string): this;

  /**
   * Set the value and expiration of a key.
   */
  setex(key: string, seconds: number, value: string): this;
  SETEX(key: string, seconds: number, value: string): this;

  /**
   * Set the value of a key, only if the key does not exist.
   */
  setnx(key: string, value: string): this;
  SETNX(key: string, value: string): this;

  /**
   * Overwrite part of a string at key starting at the specified offset.
   */
  setrange(key: string, offset: number, value: string): this;
  SETRANGE(key: string, offset: number, value: string): this;

  /**
   * Synchronously save the dataset to disk and then shut down the server.
   */
  shutdown: Command<string, string, this>;
  SHUTDOWN: Command<string, string, this>;

  /**
   * Intersect multiple sets.
   */
  sinter: KeyCommand<string, string[], this>;
  SINTER: KeyCommand<string, string[], this>;

  /**
   * Intersect multiple sets and store the resulting set in a key.
   */
  sinterstore: Command<string, number, this>;
  SINTERSTORE: Command<string, number, this>;

  /**
   * Determine if a given value is a member of a set.
   */
  sismember(key: string, member: string): this;
  SISMEMBER(key: string, member: string): this;

  /**
   * Make the server a slave of another instance, or promote it as master.
   */
  slaveof(host: string, port: string | number): this;
  SLAVEOF(host: string, port: string | number): this;

  /**
   * Manages the Redis slow queries log.
   */
  slowlog: Command<string, Array<[number, number, number, string[]]>, this>;
  SLOWLOG: Command<string, Array<[number, number, number, string[]]>, this>;

  /**
   * Get all the members in a set.
   */
  smembers(key: string): this;
  SMEMBERS(key: string): this;

  /**
   * Move a member from one set to another.
   */
  smove(source: string, destination: string, member: string): this;
  SMOVE(source: string, destination: string, member: string): this;

  /**
   * Sort the elements in a list, set or sorted set.
   */
  sort: Command<string, string[], this>;
  SORT: Command<string, string[], this>;

  /**
   * Remove and return one or multiple random members from a set.
   */
  spop(key: string): this;
  spop(key: string, count: number): this;
  SPOP(key: string): this;
  SPOP(key: string, count: number): this;

  /**
   * Get one or multiple random members from a set.
   */
  srandmember(key: string): this;
  srandmember(key: string, count: number): this;
  SRANDMEMBER(key: string): this;
  SRANDMEMBER(key: string, count: number): this;

  /**
   * Remove one or more members from a set.
   */
  srem: KeyCommand<string, number, this>;
  SREM: KeyCommand<string, number, this>;

  /**
   * Get the length of the value stored in a key.
   */
  strlen(key: string): this;
  STRLEN(key: string): this;

  /**
   * Add multiple sets.
   */
  sunion: Command<string, string[], this>;
  SUNION: Command<string, string[], this>;

  /**
   * Add multiple sets and store the resulting set in a key.
   */
  sunionstore: Command<string, number, this>;
  SUNIONSTORE: Command<string, number, this>;

  /**
   * Internal command used for replication.
   */
  sync(): this;
  SYNC(): this;

  /**
   * Return the current server time.
   */
  time(): this;
  TIME(): this;

  /**
   * Get the time to live for a key.
   */
  ttl(key: string): this;
  TTL(key: string): this;

  /**
   * Determine the type stored at key.
   */
  type(key: string): this;
  TYPE(key: string): this;

  /**
   * Forget about all watched keys.
   */
  unwatch(): this;
  UNWATCH(): this;

  /**
   * Wait for the synchronous replication of all the write commands sent in the context of the current connection.
   */
  wait(numslaves: number, timeout: number): this;
  WAIT(numslaves: number, timeout: number): this;

  /**
   * Watch the given keys to determine execution of the MULTI/EXEC block.
   */
  watch: Command<string, 'OK', this>;
  WATCH: Command<string, 'OK', this>;

  /**
   * Add one or more members to a sorted set, or update its score if it already exists.
   */
  zadd: KeyCommand<string | number, number, this>;
  ZADD: KeyCommand<string | number, number, this>;

  /**
   * Get the number of members in a sorted set.
   */
  zcard(key: string): this;
  ZCARD(key: string): this;

  /**
   * Count the members in a sorted set with scores between the given values.
   */
  zcount(key: string, min: number | string, max: number | string): this;
  ZCOUNT(key: string, min: number | string, max: number | string): this;

  /**
   * Increment the score of a member in a sorted set.
   */
  zincrby(key: string, increment: number, member: string): this;
  ZINCRBY(key: string, increment: number, member: string): this;

  /**
   * Intersect multiple sorted sets and store the resulting sorted set in a new key.
   */
  zinterstore: Command<string | number, number, this>;
  ZINTERSTORE: Command<string | number, number, this>;

  /**
   * Count the number of members in a sorted set between a given lexicographic range.
   */
  zlexcount(key: string, min: string, max: string): this;
  ZLEXCOUNT(key: string, min: string, max: string): this;

  /**
   * Return a range of members in a sorted set, by index.
   */
  zrange(key: string, start: number, stop: number): this;
  zrange(key: string, start: number, stop: number, withscores: string): this;
  ZRANGE(key: string, start: number, stop: number): this;
  ZRANGE(key: string, start: number, stop: number, withscores: string): this;

  /**
   * Return a range of members in a sorted set, by lexicographical range.
   */
  zrangebylex(key: string, min: string, max: string): this;
  zrangebylex(key: string, min: string, max: string, limit: string, offset: number, count: number): this;
  ZRANGEBYLEX(key: string, min: string, max: string): this;
  ZRANGEBYLEX(key: string, min: string, max: string, limit: string, offset: number, count: number): this;

  /**
   * Return a range of members in a sorted set, by lexicographical range, ordered from higher to lower strings.
   */
  zrevrangebylex(key: string, min: string, max: string): this;
  zrevrangebylex(key: string, min: string, max: string, limit: string, offset: number, count: number): this;
  ZREVRANGEBYLEX(key: string, min: string, max: string): this;
  ZREVRANGEBYLEX(key: string, min: string, max: string, limit: string, offset: number, count: number): this;

  /**
   * Return a range of members in a sorted set, by score.
   */
  zrangebyscore(key: string, min: number | string, max: number | string): this;
  zrangebyscore(key: string, min: number | string, max: number | string, withscores: string): this;
  zrangebyscore(key: string, min: number | string, max: number | string, limit: string, offset: number, count: number): this;
  zrangebyscore(key: string, min: number | string, max: number | string, withscores: string, limit: string, offset: number, count: number): this;
  ZRANGEBYSCORE(key: string, min: number | string, max: number | string): this;
  ZRANGEBYSCORE(key: string, min: number | string, max: number | string, withscores: string): this;
  ZRANGEBYSCORE(key: string, min: number | string, max: number | string, limit: string, offset: number, count: number): this;
  ZRANGEBYSCORE(key: string, min: number | string, max: number | string, withscores: string, limit: string, offset: number, count: number): this;

  /**
   * Determine the index of a member in a sorted set.
   */
  zrank(key: string, member: string): this;
  ZRANK(key: string, member: string): this;

  /**
   * Remove one or more members from a sorted set.
   */
  zrem: KeyCommand<string, number>;
  ZREM: this;

  /**
   * Remove all members in a sorted set between the given lexicographical range.
   */
  zremrangebylex(key: string, min: string, max: string): this;
  ZREMRANGEBYLEX(key: string, min: string, max: string): this;

  /**
   * Remove all members in a sorted set within the given indexes.
   */
  zremrangebyrank(key: string, start: number, stop: number): this;
  ZREMRANGEBYRANK(key: string, start: number, stop: number): this;

  /**
   * Remove all members in a sorted set within the given indexes.
   */
  zremrangebyscore(key: string, min: string | number, max: string | number): this;
  ZREMRANGEBYSCORE(key: string, min: string | number, max: string | number): this;

  /**
   * Return a range of members in a sorted set, by index, with scores ordered from high to low.
   */
  zrevrange(key: string, start: number, stop: number): this;
  zrevrange(key: string, start: number, stop: number, withscores: string): this;
  ZREVRANGE(key: string, start: number, stop: number): this;
  ZREVRANGE(key: string, start: number, stop: number, withscores: string): this;

  /**
   * Return a range of members in a sorted set, by score, with scores ordered from high to low.
   */
  zrevrangebyscore(key: string, min: number | string, max: number | string): this;
  zrevrangebyscore(key: string, min: number | string, max: number | string, withscores: string): this;
  zrevrangebyscore(key: string, min: number | string, max: number | string, limit: string, offset: number, count: number): this;
  zrevrangebyscore(key: string, min: number | string, max: number | string, withscores: string, limit: string, offset: number, count: number): this;
  ZREVRANGEBYSCORE(key: string, min: number | string, max: number | string): this;
  ZREVRANGEBYSCORE(key: string, min: number | string, max: number | string, withscores: string): this;
  ZREVRANGEBYSCORE(key: string, min: number | string, max: number | string, limit: string, offset: number, count: number): this;
  ZREVRANGEBYSCORE(key: string, min: number | string, max: number | string, withscores: string, limit: string, offset: number, count: number): this;

  /**
   * Determine the index of a member in a sorted set, with scores ordered from high to low.
   */
  zrevrank(key: string, member: string): this;
  ZREVRANK(key: string, member: string): this;

  /**
   * Get the score associated with the given member in a sorted set.
   */
  zscore(key: string, member: string): this;
  ZSCORE(key: string, member: string): this;

  /**
   * Add multiple sorted sets and store the resulting sorted set in a new key.
   */
  zunionstore: Command<string | number, number, this>;
  ZUNIONSTORE: Command<string | number, number, this>;

  /**
   * Incrementally iterate the keys space.
   */
  scan: Command<string, [string, string[]], this>;
  SCAN: Command<string, [string, string[]], this>;

  /**
   * Incrementally iterate Set elements.
   */
  sscan: KeyCommand<string, [string, string[]], this>;
  SSCAN: KeyCommand<string, [string, string[]], this>;

  /**
   * Incrementally iterate hash fields and associated values.
   */
  hscan: KeyCommand<string, [string, string[]], this>;
  HSCAN: KeyCommand<string, [string, string[]], this>;

  /**
   * Incrementally iterate sorted sets elements and associated scores.
   */
  zscan: KeyCommand<string, [string, string[]], this>;
  ZSCAN: KeyCommand<string, [string, string[]], this>;
}

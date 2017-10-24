// adapted from https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/redis/index.d.ts

/// <reference types="node" />
import { EventEmitter } from 'events';
import { Duplex } from 'stream';

export interface PromiseetryStrategyOptions {
  error: NodeJS.ErrnoException;
  total_retry_time: number;
  times_connected: number;
  attempt: number;
}

export type PromiseetryStrategy = (options: PromiseetryStrategyOptions) => number | Error;

export interface ClientOpts {
  host?: string;
  port?: number;
  path?: string;
  url?: string;
  parser?: string;
  string_numbers?: boolean;
  return_buffers?: boolean;
  detect_buffers?: boolean;
  socket_keepalive?: boolean;
  no_ready_check?: boolean;
  enable_offline_queue?: boolean;
  retry_max_delay?: number;
  connect_timeout?: number;
  max_attempts?: number;
  retry_unfulfilled_commands?: boolean;
  auth_pass?: string;
  password?: string;
  db?: string;
  family?: string;
  rename_commands?: { [command: string]: string };
  tls?: any;
  prefix?: string;
  retry_strategy?: PromiseetryStrategy;
}

export type Callback<T> = (err: Error | null, reply: T) => void;

export interface ServerInfo {
  redis_version: string;
  versions: number[];
}

export interface Command<T, U, R = Promise<U>> {
  (...args: T[]): R;
}

export interface KeyCommand<T, U, R = Promise<U>> {
  (key: string, ...args: T[]): R;
}

export interface SetCommand<T, U, R = Promise<U>> {
  (key: string, obj: { [key: string]: T }): R;
  (key: string, ...args: T[]): R;
}

export interface ListCommand<T, U, R = Promise<U>> {
  (arg1: T, ...args: T[]): R;
}

export interface LastCommand<T1, T2, U, R = Promise<U>> {
  (...args: Array<T1 | T2>): R;
}

export interface Commands {
  monitor(): Promise<void>;
  MONITOPromise(): Promise<void>;

  info(section?: string | string[]): Promise<ServerInfo>;
  INFO(section?: string | string[]): Promise<ServerInfo>;

  ping(message?: string): Promise<string>;

  publish(channel: string, value: string): Promise<number>;

  auth(password: string): Promise<string>;
  AUTH(password: string): Promise<string>;

  client: Command<string, any>;
  CLIENT: Command<string, any>;

  hmset: SetCommand<string | number, string>;
  HMSET: SetCommand<string | number, string>;

  subscribe: ListCommand<string, string>;
  SUBSCPromiseIBE: ListCommand<string, string>;

  unsubscribe: ListCommand<string, string>;
  UNSUBSCPromiseIBE: ListCommand<string, string>;

  psubscribe: ListCommand<string, string>;
  PSUBSCPromiseIBE: ListCommand<string, string>;

  punsubscribe: ListCommand<string, string>;
  PUNSUBSCPromiseIBE: ListCommand<string, string>;

  append(key: string, value: string): Promise<number>;
  APPEND(key: string, value: string): Promise<number>;

  bgwriteaof(): Promise<'OK'>;
  BGWPromiseITEAOF(): Promise<'OK'>;

  bgsave(): Promise<string>;
  BGSAVE(): Promise<string>;

  bitcount(key: string): Promise<number>;
  bitcount(key: string, start: number, end: number): Promise<number>;
  BITCOUNT(key: string): Promise<number>;
  BITCOUNT(key: string, start: number, end: number): Promise<number>;

  bitfield: KeyCommand<string | number, [number, number]>;
  BITFIELD: KeyCommand<string | number, [number, number]>;

  bitop(op: string, dest: string, ...args: string[]): Promise<number>;
  BITOP(op: string, dest: string, ...args: string[]): Promise<number>;

  bitpos(key: string, bit: number, start: number, end: number): Promise<number>;
  bitpos(key: string, bit: number, start: number): Promise<number>;
  bitpos(key: string, bit: number): Promise<number>;
  BITPOS(key: string, bit: number, start: number, end: number): Promise<number>;
  BITPOS(key: string, bit: number, start: number): Promise<number>;
  BITPOS(key: string, bit: number): Promise<number>;

  blpop: LastCommand<string, number, [string, string]>;
  BLPOP: LastCommand<string, number, [string, string]>;

  brpop: LastCommand<string, number, [string, string]>;
  BPromisePOP: LastCommand<string, number, [string, string]>;

  brpoplpush(source: string, dest: string, timeout: number): Promise<[string, string]>;
  BPromisePOPLPUSH(source: string, dest: string, timeout: number): Promise<[string, string]>;

  cluster: Command<string, any, this>;
  CLUSTEPromise: Command<string, any, this>;

  command(): Promise<Array<[string, number, string[], number, number, number]>>;
  COMMAND(): Promise<Array<[string, number, string[], number, number, number]>>;

  config: Command<string, boolean>;
  CONFIG: Command<string, boolean>;

  dbsize(): Promise<number>;
  DBSIZE(): Promise<number>;

  debug(): Command<string, boolean>;
  DEBUG(): Command<string, boolean>;

  decr(key: string): Promise<number>;
  DECR(key: string): Promise<number>;

  decrby(key: string, dec: number): Promise<number>;
  DECRBY(key: string, dec: number): Promise<number>;

  del: Command<string, number>;
  DEL: Command<string, number>;

  discard: Promise<'OK'>;
  DISCARD: Promise<'OK'>;

  dump(key: string): Promise<string>;
  DUMP(key: string): Promise<string>;

  echo<T extends string>(message: T): Promise<T>;
  ECHO<T extends string>(message: T): Promise<T>;

  eval: Command<string | number, any>;
  EVAL: Command<string | number, any>;

  evalsha: Command<string | number, any>;
  EVALSHA: Command<string | number, any>;

  exists: Command<string, number>;
  EXISTS: Command<string, number>;

  expire(key: string, seconds: number): Promise<number>;
  EXPIRE(key: string, seconds: number): Promise<number>;

  expireat(key: string, timestamp: number): Promise<number>;
  EXPIREAT(key: string, timestamp: number): Promise<number>;

  flushall(): Promise<string>;
  FLUSHALL(): Promise<string>;

  flushdb(): Promise<string>;
  FLUSHDB(): Promise<string>;

  geoadd: KeyCommand<string | number, number>;
  GEOADD: KeyCommand<string | number, number>;

  geohash: KeyCommand<string, number>;
  GEOHASH: KeyCommand<string, number>;

  geopos: KeyCommand<string, Array<[number, number]>>;
  GEOPOS: KeyCommand<string, Array<[number, number]>>;

  geodist: KeyCommand<string, string>;
  GEODIST: KeyCommand<string, string>;

  georadius: KeyCommand<string | number, Array<string | [string, string | [string, string]]>>;
  GEORADIUS: KeyCommand<string | number, Array<string | [string, string | [string, string]]>>;

  georadiusbymember: KeyCommand<string | number, Array<string | [string, string | [string, string]]>>;
  GEORADIUSBYMEMBER: KeyCommand<string | number, Array<string | [string, string | [string, string]]>>;

  get(key: string): Promise<string>;
  GET(key: string): Promise<string>;

  getbit(key: string, offset: number): Promise<number>;
  GETBIT(key: string, offset: number): Promise<number>;

  getrange(key: string, start: number, end: number): Promise<string>;
  GETRANGE(key: string, start: number, end: number): Promise<string>;

  getset(key: string, value: string): Promise<string>;
  GETSET(key: string, value: string): Promise<string>;

  hdel: KeyCommand<string, number>;
  HDEL: KeyCommand<string, number>;

  hexists(key: string, field: string): Promise<number>;
  HEXISTS(key: string, field: string): Promise<number>;

  hget(key: string, field: string): Promise<string>;
  HGET(key: string, field: string): Promise<string>;

  hgetall(key: string): Promise<{ [key: string]: string }>;
  HGETALL(key: string): Promise<{ [key: string]: string }>;

  hincrby(key: string, field: string, incr: number): Promise<number>;
  HINCRBY(key: string, field: string, incr: number): Promise<number>;

  hincrbyfloat(key: string, field: string, incr: number): Promise<number>;
  HINCRBYFLOAT(key: string, field: string, incr: number): Promise<number>;

  hkeys(key: string): Promise<string[]>;
  HKEYS(key: string): Promise<string[]>;

  hlen(key: string): Promise<number>;
  HLEN(key: string): Promise<number>;

  hmget: KeyCommand<string, string[]>;
  HMGET: KeyCommand<string, string[]>;

  hset(key: string, field: string, value: string): Promise<number>;
  HSET(key: string, field: string, value: string): Promise<number>;

  hsetnx(key: string, field: string, value: string): Promise<number>;
  HSETNX(key: string, field: string, value: string): Promise<number>;

  hstrlen(key: string, field: string): Promise<number>;
  HSTRLEN(key: string, field: string): Promise<number>;

  hvals(key: string): Promise<string[]>;
  HVALS(key: string): Promise<string[]>;

  incr(key: string): Promise<string[]>;
  INCR(key: string): Promise<string[]>;

  incrby(key: string, increment: number): Promise<number>;
  INCRBY(key: string, increment: number): Promise<number>;

  incrbyfloat(key: string, increment: number): Promise<number>;
  INCRBYFLOAT(key: string, increment: number): Promise<number>;

  keys(pattern: string): Promise<string[]>;
  KEYS(pattern: string): Promise<string[]>;

  lastsave(): Promise<number>;
  LASTSAVE(): Promise<number>;

  /**
   * Get an element from a list by its index.
   */
  lindex(key: string, index: number): Promise<string>;
  LINDEX(key: string, index: number): Promise<string>;

  /**
   * Insert an element before or after another element in a list.
   */
  linsert(key: string, dir: 'BEFORE' | 'AFTER', pivot: string, value: string): Promise<string>;
  LINSERT(key: string, dir: 'BEFORE' | 'AFTER', pivot: string, value: string): Promise<string>;

  /**
   * Get the length of a list.
   */
  llen(key: string): Promise<number>;
  LLEN(key: string): Promise<number>;

  /**
   * Remove and get the first element in a list.
   */
  lpop(key: string): Promise<string>;
  LPOP(key: string): Promise<string>;

  /**
   * Prepend one or multiple values to a list.
   */
  lpush: KeyCommand<string, number>;
  LPUSH: KeyCommand<string, number>;

  /**
   * Prepend a value to a list, only if the list exists.
   */
  lpushx(key: string, value: string): Promise<number>;
  LPUSHX(key: string, value: string): Promise<number>;

  /**
   * Get a range of elements from a list.
   */
  lrange(key: string, start: number, stop: number): Promise<string[]>;
  LRANGE(key: string, start: number, stop: number): Promise<string[]>;

  /**
   * Remove elements from a list.
   */
  lrem(key: string, count: number, value: string): Promise<number>;
  LREM(key: string, count: number, value: string): Promise<number>;

  /**
   * Set the value of an element in a list by its index.
   */
  lset(key: string, index: number, value: string): Promise<'OK'>;
  LSET(key: string, index: number, value: string): Promise<'OK'>;

  /**
   * Trim a list to the specified range.
   */
  ltrim(key: string, start: number, stop: number): Promise<'OK'>;
  LTRIM(key: string, start: number, stop: number): Promise<'OK'>;

  /**
   * Get the values of all given keys.
   */
  mget: Command<string, string[]>;
  MGET: Command<string, string[]>;

  /**
   * Atomically tranfer a key from a Redis instance to another one.
   */
  migrate: Command<string, boolean>;
  MIGRATE: Command<string, boolean>;

  /**
   * Move a key to another database.
   */
  move(key: string, db: string | number): Promise<void>;
  MOVE(key: string, db: string | number): Promise<void>;

  /**
   * Set multiple keys to multiple values.
   */
  mset: Command<string, boolean>;
  MSET: Command<string, boolean>;

  /**
   * Set multiple keys to multiple values, only if none of the keys exist.
   */
  msetnx: Command<string, boolean>;
  MSETNX: Command<string, boolean>;

  /**
   * Inspect the internals of Redis objects.
   */
  object: Command<string, any>;
  OBJECT: Command<string, any>;

  /**
   * Remove the expiration from a key.
   */
  persist(key: string): Promise<number>;
  PERSIST(key: string): Promise<number>;

  /**
   * Remove a key's time to live in milliseconds.
   */
  pexpire(key: string, milliseconds: number): Promise<number>;
  PEXPIRE(key: string, milliseconds: number): Promise<number>;

  /**
   * Set the expiration for a key as a UNIX timestamp specified in milliseconds.
   */
  pexpireat(key: string, millisecondsTimestamp: number): Promise<number>;
  PEXPIREAT(key: string, millisecondsTimestamp: number): Promise<number>;

  /**
   * Adds the specified elements to the specified HyperLogLog.
   */
  pfadd: KeyCommand<string, number>;
  PFADD: KeyCommand<string, number>;

  /**
   * Return the approximated cardinality of the set(s) observed by the HyperLogLog at key(s).
   */
  pfcount: Command<string, number>;
  PFCOUNT: Command<string, number>;

  /**
   * Merge N different HyperLogLogs into a single one.
   */
  pfmerge: Command<string, boolean>;
  PFMERGE: Command<string, boolean>;

  /**
   * Set the value and expiration in milliseconds of a key.
   */
  psetex(key: string, milliseconds: number, value: string): Promise<'OK'>;
  PSETEX(key: string, milliseconds: number, value: string): Promise<'OK'>;

  /**
   * Inspect the state of the Pub/Sub subsytem.
   */
  pubsub: Command<string, number>;
  PUBSUB: Command<string, number>;

  /**
   * Get the time to live for a key in milliseconds.
   */
  pttl(key: string): Promise<number>;
  PTTL(key: string): Promise<number>;

  /**
   * Close the connection.
   */
  quit(): Promise<'OK'>;
  QUIT(): Promise<'OK'>;

  /**
   * Return a random key from the keyspace.
   */
  randomkey(): Promise<string>;
  RANDOMKEY(): Promise<string>;

  /**
   * Enables read queries for a connection to a cluster slave node.
   */
  readonly(): Promise<string>;
  READONLY(): Promise<string>;

  /**
   * Disables read queries for a connection to cluster slave node.
   */
  readwrite(): Promise<string>;
  READWRITE(): Promise<string>;

  /**
   * Rename a key.
   */
  rename(key: string, newkey: string): Promise<'OK'>;
  RENAME(key: string, newkey: string): Promise<'OK'>;

  /**
   * Rename a key, only if the new key does not exist.
   */
  renamenx(key: string, newkey: string): Promise<number>;
  RENAMENX(key: string, newkey: string): Promise<number>;

  /**
   * Create a key using the provided serialized value, previously obtained using DUMP.
   */
  restore(key: string, ttl: number, serializedValue: string): Promise<'OK'>;
  RESTORE(key: string, ttl: number, serializedValue: string): Promise<'OK'>;

  /**
   * Return the role of the instance in the context of replication.
   */
  role(): Promise<[string, number, Array<[string, string, string]>]>;
  ROLE(): Promise<[string, number, Array<[string, string, string]>]>;

  /**
   * Remove and get the last element in a list.
   */
  rpop(key: string): Promise<string>;
  RPOP(key: string): Promise<string>;

  /**
   * Remove the last element in a list, prepend it to another list and return it.
   */
  rpoplpush(source: string, destination: string): Promise<string>;
  RPOPLPUSH(source: string, destination: string): Promise<string>;

  /**
   * Append one or multiple values to a list.
   */
  rpush: KeyCommand<string, number>;
  RPUSH: KeyCommand<string, number>;

  /**
   * Append a value to a list, only if the list exists.
   */
  rpushx(key: string, value: string): Promise<number>;
  RPUSHX(key: string, value: string): Promise<number>;

  /**
   * Append one or multiple members to a set.
   */
  sadd: KeyCommand<string, number>;
  SADD: KeyCommand<string, number>;

  /**
   * Synchronously save the dataset to disk.
   */
  save(): Promise<string>;
  SAVE(): Promise<string>;

  /**
   * Get the number of members in a set.
   */
  scard(key: string): Promise<number>;
  SCARD(key: string): Promise<number>;

  /**
   * DEBUG - Set the debug mode for executed scripts.
   * EXISTS - Check existence of scripts in the script cache.
   * FLUSH - Remove all scripts from the script cache.
   * KILL - Kill the script currently in execution.
   * LOAD - Load the specified Lua script into the script cache.
   */
  script: Command<string, any>;
  SCRIPT: Command<string, any>;

  /**
   * Subtract multiple sets.
   */
  sdiff: Command<string, string[]>;
  SDIFF: Command<string, string[]>;

  /**
   * Subtract multiple sets and store the resulting set in a key.
   */
  sdiffstore: KeyCommand<string, number>;
  SDIFFSTORE: KeyCommand<string, number>;

  /**
   * Change the selected database for the current connection.
   */
  select(index: number | string): Promise<string>;
  SELECT(index: number | string): Promise<string>;

  /**
   * Set the string value of a key.
   */
  set(key: string, value: string): Promise<'OK'>;
  set(key: string, value: string, flag: string): Promise<'OK'>;
  set(key: string, value: string, mode: string, duration: number): Promise<'OK'>;
  set(key: string, value: string, mode: string, duration: number, flag: string): Promise<'OK'>;
  SET(key: string, value: string): Promise<'OK'>;
  SET(key: string, value: string, flag: string): Promise<'OK'>;
  SET(key: string, value: string, mode: string, duration: number): Promise<'OK'>;
  SET(key: string, value: string, mode: string, duration: number, flag: string): Promise<'OK'>;

  /**
   * Sets or clears the bit at offset in the string value stored at key.
   */
  setbit(key: string, offset: number, value: string): Promise<number>;
  SETBIT(key: string, offset: number, value: string): Promise<number>;

  /**
   * Set the value and expiration of a key.
   */
  setex(key: string, seconds: number, value: string): Promise<string>;
  SETEX(key: string, seconds: number, value: string): Promise<string>;

  /**
   * Set the value of a key, only if the key does not exist.
   */
  setnx(key: string, value: string): Promise<number>;
  SETNX(key: string, value: string): Promise<number>;

  /**
   * Overwrite part of a string at key starting at the specified offset.
   */
  setrange(key: string, offset: number, value: string): Promise<number>;
  SETRANGE(key: string, offset: number, value: string): Promise<number>;

  /**
   * Synchronously save the dataset to disk and then shut down the server.
   */
  shutdown: Command<string, string>;
  SHUTDOWN: Command<string, string>;

  /**
   * Intersect multiple sets.
   */
  sinter: KeyCommand<string, string[]>;
  SINTER: KeyCommand<string, string[]>;

  /**
   * Intersect multiple sets and store the resulting set in a key.
   */
  sinterstore: Command<string, number>;
  SINTERSTORE: Command<string, number>;

  /**
   * Determine if a given value is a member of a set.
   */
  sismember(key: string, member: string): Promise<number>;
  SISMEMBER(key: string, member: string): Promise<number>;

  /**
   * Make the server a slave of another instance, or promote it as master.
   */
  slaveof(host: string, port: string | number): Promise<string>;
  SLAVEOF(host: string, port: string | number): Promise<string>;

  /**
   * Manages the Redis slow queries log.
   */
  slowlog: Command<string, Array<[number, number, number, string[]]>>;
  SLOWLOG: Command<string, Array<[number, number, number, string[]]>>;

  /**
   * Get all the members in a set.
   */
  smembers(key: string): Promise<string[]>;
  SMEMBERS(key: string): Promise<string[]>;

  /**
   * Move a member from one set to another.
   */
  smove(source: string, destination: string, member: string): Promise<number>;
  SMOVE(source: string, destination: string, member: string): Promise<number>;

  /**
   * Sort the elements in a list, set or sorted set.
   */
  sort: Command<string, string[]>;
  SORT: Command<string, string[]>;

  /**
   * Remove and return one or multiple random members from a set.
   */
  spop(key: string): Promise<string>;
  spop(key: string, count: number): Promise<string[]>;
  SPOP(key: string): Promise<string>;
  SPOP(key: string, count: number): Promise<string[]>;

  /**
   * Get one or multiple random members from a set.
   */
  srandmember(key: string): Promise<string>;
  srandmember(key: string, count: number): Promise<string[]>;
  SRANDMEMBER(key: string): Promise<string>;
  SRANDMEMBER(key: string, count: number): Promise<string[]>;

  /**
   * Remove one or more members from a set.
   */
  srem: KeyCommand<string, number>;
  SREM: KeyCommand<string, number>;

  /**
   * Get the length of the value stored in a key.
   */
  strlen(key: string): Promise<number>;
  STRLEN(key: string): Promise<number>;

  /**
   * Add multiple sets.
   */
  sunion: Command<string, string[]>;
  SUNION: Command<string, string[]>;

  /**
   * Add multiple sets and store the resulting set in a key.
   */
  sunionstore: Command<string, number>;
  SUNIONSTORE: Command<string, number>;

  /**
   * Internal command used for replication.
   */
  sync(): Promise<void>;
  SYNC(): Promise<void>;

  /**
   * Return the current server time.
   */
  time(): Promise<[string, string]>;
  TIME(): Promise<[string, string]>;

  /**
   * Get the time to live for a key.
   */
  ttl(key: string): Promise<number>;
  TTL(key: string): Promise<number>;

  /**
   * Determine the type stored at key.
   */
  type(key: string): Promise<string>;
  TYPE(key: string): Promise<string>;

  /**
   * Forget about all watched keys.
   */
  unwatch(): Promise<'OK'>;
  UNWATCH(): Promise<'OK'>;

  /**
   * Wait for the synchronous replication of all the write commands sent in the context of the current connection.
   */
  wait(numslaves: number, timeout: number): Promise<number>;
  WAIT(numslaves: number, timeout: number): Promise<number>;

  /**
   * Watch the given keys to determine execution of the MULTI/EXEC block.
   */
  watch: Command<string, 'OK'>;
  WATCH: Command<string, 'OK'>;

  /**
   * Add one or more members to a sorted set, or update its score if it already exists.
   */
  zadd: KeyCommand<string | number, number>;
  ZADD: KeyCommand<string | number, number>;

  /**
   * Get the number of members in a sorted set.
   */
  zcard(key: string): Promise<number>;
  ZCARD(key: string): Promise<number>;

  /**
   * Count the members in a sorted set with scores between the given values.
   */
  zcount(key: string, min: number | string, max: number | string): Promise<number>;
  ZCOUNT(key: string, min: number | string, max: number | string): Promise<number>;

  /**
   * Increment the score of a member in a sorted set.
   */
  zincrby(key: string, increment: number, member: string): Promise<number>;
  ZINCRBY(key: string, increment: number, member: string): Promise<number>;

  /**
   * Intersect multiple sorted sets and store the resulting sorted set in a new key.
   */
  zinterstore: Command<string | number, number>;
  ZINTERSTORE: Command<string | number, number>;

  /**
   * Count the number of members in a sorted set between a given lexicographic range.
   */
  zlexcount(key: string, min: string, max: string): Promise<number>;
  ZLEXCOUNT(key: string, min: string, max: string): Promise<number>;

  /**
   * Return a range of members in a sorted set, by index.
   */
  zrange(key: string, start: number, stop: number): Promise<string[]>;
  zrange(key: string, start: number, stop: number, withscores: string): Promise<string[]>;
  ZRANGE(key: string, start: number, stop: number): Promise<string[]>;
  ZRANGE(key: string, start: number, stop: number, withscores: string): Promise<string[]>;

  /**
   * Return a range of members in a sorted set, by lexicographical range.
   */
  zrangebylex(key: string, min: string, max: string): Promise<string[]>;
  zrangebylex(key: string, min: string, max: string, limit: string, offset: number, count: number): Promise<string[]>;
  ZRANGEBYLEX(key: string, min: string, max: string): Promise<string[]>;
  ZRANGEBYLEX(key: string, min: string, max: string, limit: string, offset: number, count: number): Promise<string[]>;

  /**
   * Return a range of members in a sorted set, by lexicographical range, ordered from higher to lower strings.
   */
  zrevrangebylex(key: string, min: string, max: string): Promise<string[]>;
  zrevrangebylex(key: string, min: string, max: string, limit: string, offset: number, count: number): Promise<string[]>;
  ZREVRANGEBYLEX(key: string, min: string, max: string): Promise<string[]>;
  ZREVRANGEBYLEX(key: string, min: string, max: string, limit: string, offset: number, count: number): Promise<string[]>;

  /**
   * Return a range of members in a sorted set, by score.
   */
  zrangebyscore(key: string, min: number | string, max: number | string): Promise<string[]>;
  zrangebyscore(key: string, min: number | string, max: number | string, withscores: string): Promise<string[]>;
  zrangebyscore(key: string, min: number | string, max: number | string, limit: string, offset: number, count: number): Promise<string[]>;
  zrangebyscore(key: string, min: number | string, max: number | string, withscores: string, limit: string, offset: number, count: number): Promise<string[]>;
  ZRANGEBYSCORE(key: string, min: number | string, max: number | string): Promise<string[]>;
  ZRANGEBYSCORE(key: string, min: number | string, max: number | string, withscores: string): Promise<string[]>;
  ZRANGEBYSCORE(key: string, min: number | string, max: number | string, limit: string, offset: number, count: number): Promise<string[]>;
  ZRANGEBYSCORE(key: string, min: number | string, max: number | string, withscores: string, limit: string, offset: number, count: number): Promise<string[]>;

  /**
   * Determine the index of a member in a sorted set.
   */
  zrank(key: string, member: string): Promise<number | void>;
  ZRANK(key: string, member: string): Promise<number | void>;

  /**
   * Remove one or more members from a sorted set.
   */
  zrem: KeyCommand<string, number>;
  ZREM: KeyCommand<string, number>;

  /**
   * Remove all members in a sorted set between the given lexicographical range.
   */
  zremrangebylex(key: string, min: string, max: string): Promise<number>;
  ZREMRANGEBYLEX(key: string, min: string, max: string): Promise<number>;

  /**
   * Remove all members in a sorted set within the given indexes.
   */
  zremrangebyrank(key: string, start: number, stop: number): Promise<number>;
  ZREMRANGEBYRANK(key: string, start: number, stop: number): Promise<number>;

  /**
   * Remove all members in a sorted set within the given indexes.
   */
  zremrangebyscore(key: string, min: string | number, max: string | number): Promise<number>;
  ZREMRANGEBYSCORE(key: string, min: string | number, max: string | number): Promise<number>;

  /**
   * Return a range of members in a sorted set, by index, with scores ordered from high to low.
   */
  zrevrange(key: string, start: number, stop: number): Promise<string[]>;
  zrevrange(key: string, start: number, stop: number, withscores: string): Promise<string[]>;
  ZREVRANGE(key: string, start: number, stop: number): Promise<string[]>;
  ZREVRANGE(key: string, start: number, stop: number, withscores: string): Promise<string[]>;

  /**
   * Return a range of members in a sorted set, by score, with scores ordered from high to low.
   */
  zrevrangebyscore(key: string, min: number | string, max: number | string): Promise<string[]>;
  zrevrangebyscore(key: string, min: number | string, max: number | string, withscores: string): Promise<string[]>;
  zrevrangebyscore(key: string, min: number | string, max: number | string, limit: string, offset: number, count: number): Promise<string[]>;
  zrevrangebyscore(key: string, min: number | string, max: number | string, withscores: string, limit: string, offset: number, count: number): Promise<string[]>;
  ZREVRANGEBYSCORE(key: string, min: number | string, max: number | string): Promise<string[]>;
  ZREVRANGEBYSCORE(key: string, min: number | string, max: number | string, withscores: string): Promise<string[]>;
  ZREVRANGEBYSCORE(key: string, min: number | string, max: number | string, limit: string, offset: number, count: number): Promise<string[]>;
  ZREVRANGEBYSCORE(key: string, min: number | string, max: number | string, withscores: string, limit: string, offset: number, count: number): Promise<string[]>;

  /**
   * Determine the index of a member in a sorted set, with scores ordered from high to low.
   */
  zrevrank(key: string, member: string): Promise<number | void>;
  ZREVRANK(key: string, member: string): Promise<number | void>;

  /**
   * Get the score associated with the given member in a sorted set.
   */
  zscore(key: string, member: string): Promise<string>;
  ZSCORE(key: string, member: string): Promise<string>;

  /**
   * Add multiple sorted sets and store the resulting sorted set in a new key.
   */
  zunionstore: Command<string | number, number>;
  ZUNIONSTORE: Command<string | number, number>;

  /**
   * Incrementally iterate the keys space.
   */
  scan: Command<string, [string, string[]]>;
  SCAN: Command<string, [string, string[]]>;

  /**
   * Incrementally iterate Set elements.
   */
  sscan: KeyCommand<string, [string, string[]]>;
  SSCAN: KeyCommand<string, [string, string[]]>;

  /**
   * Incrementally iterate hash fields and associated values.
   */
  hscan: KeyCommand<string, [string, string[]]>;
  HSCAN: KeyCommand<string, [string, string[]]>;

  /**
   * Incrementally iterate sorted sets elements and associated scores.
   */
  zscan: KeyCommand<string, [string, string[]]>;
  ZSCAN: KeyCommand<string, [string, string[]]>;
}

export const PromiseedisClient: {
  new (options: ClientOpts): PromiseedisClient;
};

export interface PromiseedisClient extends Commands, EventEmitter {
  connected: boolean;
  command_queue_length: number;
  offline_queue_length: number;
  retry_delay: number;
  retry_backoff: number;
  command_queue: any[];
  offline_queue: any[];
  connection_id: number;
  server_info: ServerInfo;
  stream: Duplex;

  on(event: 'message' | 'message_buffer', listener: (channel: string, message: string) => void): this;
  on(event: 'pmessage' | 'pmessage_buffer', listener: (pattern: string, channel: string, message: string) => void): this;
  on(event: 'subscribe' | 'unsubscribe', listener: (channel: string, count: number) => void): this;
  on(event: 'psubscribe' | 'punsubscribe', listener: (pattern: string, count: number) => void): this;
  on(event: string, listener: (...args: any[]) => void): this;

  /**
   * Client methods.
   */

  end(flush?: boolean): void;
  unref(): void;

  cork(): void;
  uncork(): void;

  duplicate(options?: ClientOpts): PromiseedisClient;

  sendCommand(command: string): Promise<any>;
  sendCommand(command: string, args?: any[]): Promise<any>;
  send_command(command: string): Promise<any>;
  send_command(command: string, args?: any[]): Promise<any>;

  /**
   * Mark the start of a transaction block.
   */
  multi(args?: Array<Array<string | number | Callback<any>>>): Multi;
  MULTI(args?: Array<Array<string | number | Callback<any>>>): Multi;

  batch(args?: Array<Array<string | number | Callback<any>>>): Multi;
  BATCH(args?: Array<Array<string | number | Callback<any>>>): Multi;
}

export const Multi: {
  new (): Multi;
};

export interface Multi extends Commands {
  exec(): Promise<any[]>;
  EXEC(): Promise<any>;

  exec_atomic(): Promise<any[]>;
  EXEC_ATOMIC(): Promise<any[]>;
}

export let debug_mode: boolean;

export function createClient(port: number, host?: string, options?: ClientOpts): PromiseedisClient;
export function createClient(unix_socket: string, options?: ClientOpts): PromiseedisClient;
export function createClient(redis_url: string, options?: ClientOpts): PromiseedisClient;
export function createClient(options?: ClientOpts): PromiseedisClient;

export function print(err: Error | undefined, reply: any): void;

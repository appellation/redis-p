// adapted from https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/redis/index.d.ts

/// <reference types="node" />
import { EventEmitter } from 'events';
import { Duplex } from 'stream';

import Commands from './Commands';
import MultiCommands from './MultiCommands';

export interface RetryStrategyOptions {
  error: NodeJS.ErrnoException;
  total_retry_time: number;
  times_connected: number;
  attempt: number;
}

export type RetryStrategy = (options: RetryStrategyOptions) => number | Error;

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
  retry_strategy?: RetryStrategyOptions;
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

export const RedisClient: {
  new (options: ClientOpts): RedisClient;
};

export interface RedisClient extends Commands, EventEmitter {
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

  duplicate(options?: ClientOpts): RedisClient;

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

export interface Multi extends MultiCommands {
  exec(): Promise<any[]>;
  EXEC(): Promise<any>;

  exec_atomic(): Promise<any[]>;
  EXEC_ATOMIC(): Promise<any[]>;
}

export let debug_mode: boolean;

export function createClient(port: number, host?: string, options?: ClientOpts): RedisClient;
export function createClient(unix_socket: string, options?: ClientOpts): RedisClient;
export function createClient(redis_url: string, options?: ClientOpts): RedisClient;
export function createClient(options?: ClientOpts): RedisClient;

export function print(err: Error | undefined, reply: any): void;

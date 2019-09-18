import * as Config from "webpack-chain";
import { RequestHandler } from "express";
import { EventEmitter } from 'events';

interface Entry {
  [key: string]: any 
}

interface Output {
  path?: string,
  filename?: string,
  chunkFilename?: string,
  publicPath?: string,
  [key: string]: any 
}

interface Resolve {
  extensions?: Array<string>,
  alias?: {[key: string]: any},
  [key: string]: any 
}

export interface DevServer {
  https?: string,
  host?: string,
  port?: number,
  beforeMiddlewares?: Array<RequestHandler>,
  afterMiddlewares?: Array<RequestHandler>,
}

export interface Opts {
  entry?: Entry,
  output?: Output,
  resolve?: Resolve,
  devtool?: string | boolean,
  uglifyjsOptions?: {[key: string]: any},
  devServer?: DevServer,
  plugins?: any[],
  folders?: {
    html?: string,
    js?: string,
    style?: string,
    img?: string,
  },
  [key: string]: any 
}

export interface Argv {
  _: string[];
  $0: string;

  /** 
   * 执行路径 
   */
  cwd?: string;

  /** 
   * src 文件夹名，默认 'src' 
   */
  src: string;

  /** 
   * dist 文件夹名，默认 'dist' 
   */
  dist: string;

  /** 
   * html 文件夹名，默认 'src' 
   */
  html: string;

  /** 
   * assets 文件夹名，默认 'assets' 
   */
  asset: string;

  /** 
   * 临时文件夹名，默认 '.tmp' 
   */
  tmpdir: string;

  [argName: string]: any;
}

export interface Ctx extends EventEmitter {
  /** 模式，默认 'development'  */
  mode: 'development' | 'none' | 'production',
  /** 执行路径 */
  cwd: string,
  /** src 文件夹名，默认 'src' */
  src: string,
  /** dist 文件夹名，默认 'dist' */
  dist: string,
  /** template 文件夹名，默认 'src' */
  template: string,
  /** assets 文件夹名，默认 'assets' */
  assets: string,
  /** 临时文件夹名，默认 '.tmp' */
  tmpdir: string,
  /** webpack-chain 实例 */
  config: Config,
  /** 命令行参数 */
  argv: Argv,
}

export interface Stats {
  hasErrors: Function
}

export interface DevServerOptions {
  /* 允许访问的主机 host，防止黑客伪造 */
  allowdhosts?: [string],
  beforeMiddlewares?: [],
  afterMiddlewares?: [],
  /* 响应头 */
  headers?: {},
}
import { Ctx } from "../types";

/**
 * 监测
 * @param ctx {object} tac 上下文
 * @param opts {object} tac 选项 
 */
export default function apply(ctx: Ctx) {
  const { config, mode } = ctx;

  config.watch(mode !== 'production' ? true : false);
}
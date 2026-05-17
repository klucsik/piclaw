/**
 * Centralized logger for the visual UI.
 *
 * All frontend logging goes through this module so it can be:
 * - silenced in production (set LOG_LEVEL)
 * - filtered by module prefix
 * - redirected to a remote sink later
 *
 * Usage:
 *   import { createLogger } from "../utils/logger";
 *   const log = createLogger("timeline");
 *   log.info("loaded", { count: 10 });
 *   log.warn("slow", { ms: 3000 });
 *   log.error("failed", error);
 */

export type LogLevel = "debug" | "info" | "warn" | "error" | "silent";

const LEVEL_ORDER: Record<LogLevel, number> = {
  debug: 0,
  info: 1,
  warn: 2,
  error: 3,
  silent: 4,
};

let currentLevel: LogLevel = "warn";

/** Set the global minimum log level. Below this level, messages are suppressed. */
export function setLogLevel(level: LogLevel): void {
  currentLevel = level;
}

/** Get the current log level. */
export function getLogLevel(): LogLevel {
  return currentLevel;
}

export interface Logger {
  debug(message: string, ...args: unknown[]): void;
  info(message: string, ...args: unknown[]): void;
  warn(message: string, ...args: unknown[]): void;
  error(message: string, ...args: unknown[]): void;
}

export function createLogger(module: string): Logger {
  const prefix = `[${module}]`;
  return {
    debug(message: string, ...args: unknown[]) {
      if (LEVEL_ORDER[currentLevel] <= LEVEL_ORDER.debug) console.debug(prefix, message, ...args);
    },
    info(message: string, ...args: unknown[]) {
      if (LEVEL_ORDER[currentLevel] <= LEVEL_ORDER.info) console.log(prefix, message, ...args);
    },
    warn(message: string, ...args: unknown[]) {
      if (LEVEL_ORDER[currentLevel] <= LEVEL_ORDER.warn) console.warn(prefix, message, ...args);
    },
    error(message: string, ...args: unknown[]) {
      if (LEVEL_ORDER[currentLevel] <= LEVEL_ORDER.error) console.error(prefix, message, ...args);
    },
  };
}

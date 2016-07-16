/**
 * Helpers for Parallel.js
 */

export function resolveEnvironment() {
  return typeof module !== 'undefined' && module.exports
          ? 'node'
          : 'browser';
}

/**
 * Get the number of core count of the machine
 */
export function getCoreCount() {
  return resolveEnvironment() === 'node'
		? require('os').cpus().length
		: navigator.hardwareConcurrency || 4;
}

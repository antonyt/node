'use strict';

const common = require('../common.js');

const bench = common.createBenchmark(main, {
  n: [1],
  breakOnSigint: [0, 1],
  withSigintListener: [0, 1]
});

const vm = require('vm');

function main({ n, breakOnSigint, withSigintListener }) {
  const options = breakOnSigint ? { breakOnSigint: true } : {};

  process.removeAllListeners('SIGINT');
  if (withSigintListener)
    process.on('SIGINT', () => {});

  var i = 0;

  const contextifiedSandbox = vm.createContext();

  bench.start();
  for (; i < n; i++)
    vm.runInContext('0', contextifiedSandbox, options);
  bench.end(n);
}

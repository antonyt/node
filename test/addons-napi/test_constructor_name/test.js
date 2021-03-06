'use strict';
const common = require('../../common');
const assert = require('assert');

// Testing api calls for a constructor that defines properties
const TestConstructor = require(`./build/${common.buildType}/binding`);
assert.strictEqual(TestConstructor.name, 'MyObject');

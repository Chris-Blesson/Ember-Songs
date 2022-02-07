/* eslint-env node */

'use strict';

const path = require('path');

module.exports = function(env) {
  return {
    clientAllowedKeys: ['FIREBASE_AUTH'],
    failOnMissingKey: false
  };
};

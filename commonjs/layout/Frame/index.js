'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});

var _Frame = require('./Frame');

Object.keys(_Frame).forEach(function(key) {
  if (key === 'default' || key === '__esModule') return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Frame[key];
    },
  });
});

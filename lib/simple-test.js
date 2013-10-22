var yellow = require('color-console').yellow;
var green = require('color-console').green;
var grey = require('color-console').grey;
var red = require('color-console').red;

function success(name) {
  green(name + ' ... ok');
}

function fail(name) {
  red(name + ' ... not ok');
}

var test = function (name, fn) {
  if (~fn.toString().indexOf('(done')) return test.async(name, fn);

  try {
    fn();
    success(name);
  } catch (e) {
    fail(name);
    if (e === null) e = {stack: ''};
    if (typeof e === 'undefined') e = {stack: ''};
    if (typeof e === 'string') e = {stack: e};
    grey(e.stack);
  }
}

test.async = function (name, fn) {
  var wait = 1000;

  function done() {
    clearTimeout(timeout);
    success(name);
  }

  try {
    fn(done);
  } catch (e) {
    clearTimeout(timeout);
    fail(name);
    grey(e.stack);
  }

  var timeout = setTimeout(function () {
    yellow(name + ' ... exceed ' + wait + ' milliseconds');
  }, wait);
}

exports = module.exports = test;

exports.equal = function (a, b) {
  if (a !== b) throw new Error(a + ' not equal ' + b);
}

/**
 * Alias of equal
 */
exports.eq = exports.equal;

exports.notEqual = function (a, b) {
  if (a === b) throw new Error(a + ' equal ' + b);
}

/**
 * Alias of notEqual
 */
exports.notEq = exports.notEqual;

exports.ok = function (result) {
  if (!result) throw new Error(result + ' is not ok');
}

exports.notOk = function (result) {
  if (result) throw new Error(result + ' is ok');
}

exports.throw = function (fn) {
  try {
    fn();
  } catch (e) {
    return 'complete';
  }

  throw new Error(fn.toString() + ' did not throw');
}

exports.notThrow = function (fn) {
  try {
    fn();
  } catch (e) {
    throw new Error(fn.toString() + ' throwed');
  }
}

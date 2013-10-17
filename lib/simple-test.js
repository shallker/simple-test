var green = require('../util/console-colors').green;
var red = require('../util/console-colors').red;

function ok(name) {
  green(name + ' ... ok');
}

function notOk(name) {
  red(name + ' ... not ok');
}

var test = function (name, func) {
  if (~func.toString().indexOf('(done')) return test.async(name, func);

  try {
    func();
  } catch (e) {
    notOk(name);
    console.log(e);
  }

  ok(name);
}

test.async = function (name, func) {
  var complete = false;
  var wait = 1000;

  function done() {
    complete = true;
    ok(name);
  }

  try {
    func(done);
  } catch (e) {
    complete = true;
    notOk(name);
    console.log(e);
  }

  setTimeout(function () {
    if (!complete) {
      notOk(name);
    }
  }, wait);
}

module.exports = test;

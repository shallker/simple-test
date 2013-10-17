var test = require('../lib/simple-test');

test('add user', function (done) {
  setTimeout(function () {
    done();
  });
});

test('update user', function (done) {

});

test('delete user', function (done) {
  throw new Error('forbidden');  
});

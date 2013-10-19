var test = require('../index');

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

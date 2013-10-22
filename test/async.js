var test = typeof document === 'object' ? require('simple-test') : require('../index');

test('add user', function (done) {
  done();
});

test('update user', function (done) {
  setTimeout(function () {
    done();
  }, 1000);  
});

var test = typeof document === 'object' ? require('simple-test') : require('../index');

test('ok', function () {
  test.ok(1);

  test.throw(function () {
    test.ok(0);
  });
});

test('notOk', function () {
  test.notOk(0);

  test.throw(function () {
    tset.notOk(1);
  });
});

test('throw', function () {
  test.throw(function () {
    throw new Error('error');
  });

  test.throw(function () {
    test.throw(function () {
      return 'no error';
    });
  });
});

test('notThrow', function () {
  test.notThrow(function () {
    return 'no error';
  });

  test.throw(function () {
    test.notThrow(function () {
      throw new Error('error');
    });
  });
});

test('equal', function () {
  test.throw(function () {
    test.equal(true, false);
  });

  test.throw(function () {
    test.equal(0, 1);
  });

  test.throw(function () {
    test.equal('0', '1');
  });

  test.throw(function () {
    test.equal(0, '1');
  });
});

test('notEqual', function () {
  test.throw(function () {
    test.notEqual(true, true);
  });

  test.throw(function () {
    test.notEqual(1, 1);
  });

  test.throw(function () {
    test.notEqual('0', '0');
  });

  test.throw(function () {
    test.notEqual('1', '1');
  });
});

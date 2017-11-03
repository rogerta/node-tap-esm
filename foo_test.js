
const tap = require('tap');
const foo = require('./foo');

tap.test('Foo', t => {
  t.equal(1, foo.foo(1));
  t.end();
});


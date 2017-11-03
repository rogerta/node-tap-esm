
import tap from 'tap';
import * as foo from './foo';

tap.test('Foo', t => {
  t.equal(1, foo.foo(1));
  t.end();
});


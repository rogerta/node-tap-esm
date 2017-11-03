Repo showing problem with node-tap 10.7.2 and node 8.9.0 when using ESM modules.

Run tests of code using CommonJS module syntax: 

    $ npm run cjs                       
     
    > tap-es6-import@1.0.0 cjs /home/rogerta/src/tap
    > tap foo_test.js
     
    foo_test.js ........................................... 1/1
    total ................................................. 1/1
     
      1 passing (146.874ms)
     
      ok

Run tests of same code using ECMAScript module syntax: 

    $ npm run esm
     
    > tap-es6-import@1.0.0 esm /home/rogerta/src/tap
    > tap --node-arg=--experimental-modules foo_test.mjs
     
    total ................................................. 0/0
     
      0 passing (4.348ms)
     
      ok


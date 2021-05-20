# testcafe-mobile-concurrency

Demo of a `testcafe` bug involving a mobile device and concurrency for [`DevExpress/testcafe#6244`](https://github.com/DevExpress/testcafe/issues/6244):

* `npm test` - runs a single test at a time, this will pass
* `npm test:concurrent` - runs three tests at a time, the first open browser will pass, the subsequent browsers will fail

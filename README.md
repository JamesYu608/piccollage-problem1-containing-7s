# PicCollage Assignment 1: Containing 7s

## System Requirements

* [Node.js](https://nodejs.org/) 8+

## Quick Start

API:

```javascript
const { 
  bruteForceCount, // brute force approach
  containDigitCount // effective approach
  //  params: (num, targetDigit)
  //  - num: Integer, range [1, N]
  //  - targetDigit: Integer, range [1, 9]
} = require('./index')

// Containing 7s, g(1000)
bruteForceCount(1, 1000, 7) // 271
containDigitCount(1000, 7) // 271

// Containing 3s, g(199)
bruteForceCount(1, 199, 7) // 38
containDigitCount(199, 7) // 38
```

Demo:

```bash
node ./demo.js
```

## Testing

All test cases are located under `test/`

Test cases:

* Simple test cases (from the quiz, e.g. 7, 20, 70, 100)
* Corner test cases (e.g. 100, 1000, 777, 999)
* Random test cases

Run:

```bash
npm test
```

We should see the test results in the console, and it will be like:

```bash
 PASS  test/containDigitCount.test.js
  [Function] containDigitCount
    Validate results by comparing with results of brute force approach
      ✓ targetDigit is 1 (317 ms)
      ✓ targetDigit is 5 (275 ms)
      ✓ targetDigit is 7 (273 ms)
      ✓ targetDigit is 9 (283 ms)
    Input is invalid, should return -1
      ✓ num is invalid (1 ms)
      ✓ targetDigit is invalid
```

And the test report will be like:

```bash
----------|---------|----------|---------|---------|-------------------
File      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
----------|---------|----------|---------|---------|-------------------
All files |     100 |      100 |     100 |     100 |                   
 index.js |     100 |      100 |     100 |     100 |                   
----------|---------|----------|---------|---------|-------------------
Test Suites: 2 passed, 2 total
Tests:       7 passed, 7 total
Snapshots:   0 total
Time:        3.28 s
Ran all test suites.
```

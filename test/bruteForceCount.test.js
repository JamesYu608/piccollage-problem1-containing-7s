const { bruteForceCount } = require('../index')

describe('[Function] bruteForceCount', () => {
  const testCases = [  // Array of [N, g(N)]
    [7, 1],
    [20, 2],
    [70, 8],
    [100, 19]
  ]

  test('Example test cases in quiz description', () => {
    for (const testCase of testCases) {
      const [input, expectedOutput] = testCase
      const output = bruteForceCount(input, 7)
      expect(output).toBe(expectedOutput)
    }
  })
})

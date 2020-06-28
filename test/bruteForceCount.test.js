const { bruteForceCount } = require('../index')

describe('[Function] bruteForceCount', () => {
  test('Example test cases in the quiz description', () => {
    const testCases = [ // Array of [N, g(N)]
      [7, 1],
      [20, 2],
      [70, 8],
      [100, 19]
    ]

    for (const testCase of testCases) {
      const [input, expectedOutput] = testCase
      const output = bruteForceCount(1, input, 7)
      expect(output).toBe(expectedOutput)
    }
  })
})

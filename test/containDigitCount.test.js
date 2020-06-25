const { containDigitCount, bruteForceCount } = require('../index')

describe('[Function] containDigitCount', () => {
  const exampleCases = [
    7, 20, 70, 100
  ]
  const testCases = [
    1, 10, 100, 1000, 10000,
    7, 77, 777, 7777, 77777,
    9, 99, 999, 9999, 99999
  ]
  const inputs = [...exampleCases, ...testCases]

  describe('Validate result by using brute force approach', () => {
    test('targetDigit is 7', () => {
      for (const input of inputs) {
        const expectedOutput = bruteForceCount(1, input, 7)
        const output = containDigitCount(input, 7)
        expect(output).toBe(expectedOutput)
      }
    })
  })
})

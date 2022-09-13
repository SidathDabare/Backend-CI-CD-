/** @format */

describe("Testing the library", () => {
  test("Should test that true is true", () => {
    // the keywrods are two (interchangeable) "it" or "test"
    expect(true).toBe(true)
  })

  test("Should test that true is true", () => {
    expect(true).toBe(true)
  })

  test("null", () => {
    const n = null
    expect(n).toBeNull()
    expect(n).toBeDefined()
    expect(n).not.toBeUndefined()
    expect(n).not.toBeTruthy()
    expect(n).toBeFalsy()
  })

  test("two plus two is four", () => {
    expect(2 + 2).toBe(4)
  })
})

// describe("Testing another one test", () => {
//   test("Should test that false is false", () => {
//     expect(false).toBe(false)
//   })
// })

// 1
const exercise1 = arr =>
  arr.map(element => element)

const result1 = exercise1([1, 2, 3, 4, 5])
console.log("> result 1: ", result1)

// 2
const exercise2 = arr =>
  arr.map(element =>
    Number(element) * 2 || element
  )

const result2 = exercise2([1, "hello", 2, 3, "greetings", 4, "bye!", 5])
console.log("> result 2: ", result2)

// 3
const exercise3 = arr =>
  arr.map(
    (element, index) => !(index % 2) && !Number(element) ?
      element.toUpperCase() : element
  )

const result3 = exercise3([1, "hello", 2, 3, "greetings", 4, "bye!", 5])
console.log("> result 3: ", result3)

// 4
const exercise4 = arr =>
  arr.filter(element => Number(element))

const result4 = exercise4([1, "hello", 2, 3, "greetings", 4, "bye!", 5])
console.log("> result 4: ", result4)

// 5
const exercise5 = arr =>
  arr.filter(
    element => !Number(element) && element.length % 2
  )

const result5 = exercise5([1, "hello", 2, 3, "greetings", 4, "bye!", 5])
console.log("> result 5: ", result5)

// 6
const exercise6 = arr =>
  arr.filter(
    element => Number(element) ?
      element >= 5 : element.length > 8
  )

const result6 = exercise6([1, "hello", 2, 3, "greetings", 4, "bye!", 5])
console.log("> result 6: ", result6)

// 7
const exercise7 = arr =>
  arr.reduce((acc, curr) => acc + curr, 0)

const result7 = exercise7([1, 2, 3, 4, 5])
console.log("> result 7: ", result7)

// 8
const exercise8EZVersion = arr =>
    arr.reduce((acc, curr) => {
      acc[curr] = !(curr % 2)
      return acc
    }, {})

const exercise8AdvancedVersion = arr =>
  arr.reduce((acc, curr) => ({
    ...acc,
    [curr]: !(curr % 2)
  }), {})

const result8EZVersion = exercise8EZVersion([1, 2, 3, 4, 5])
const result8AdvancedVersion = exercise8AdvancedVersion([1, 2, 3, 4, 5])
console.log("> result 8 EZ Version: ", result8EZVersion)
console.log("> result 8 Advanced Version: ", result8AdvancedVersion)

// 9
const exercise9 = arr =>
  arr
    .filter(element => Number(element) && !(element % 2))
    .map(element => Math.pow(element, 3))
    .reduce((acc, curr) => acc * curr, 1)

const result9 = exercise9(
  [
    1,
    "hello",
    2,
    true,
    { a: 1, b: 2 },
    3,
    "greetings",
    ["a", "b", false],
    4,
    false,
    "bye!",
    5,
  ]
)
console.log("> result 9: ", result9)

// 10
const getCodes = word => {
  let code = ''
  for(let i = 0; i < word.length; i++) {
    code += word.charCodeAt(i)
  }
  return code
}

const removePairs = word =>
  word
    .split('')
    .filter(letter => Number(letter) % 2)

const sumChars = word =>
  word.reduce((acc, curr) => acc + Number(curr) ,0)

const exercise10 = arr =>
  arr
    .filter(element => typeof element === 'string')
    .map(getCodes)
    .map(removePairs)
    .map(sumChars)
    .reduce((acc, curr) => acc + curr, 0) / 3
    

const result10 = exercise10(
  [
    1,
    "hello",
    2,
    true,
    { a: 1, b: 2 },
    3,
    "greetings",
    ["a", "b", false],
    4,
    false,
    "bye!",
    5,
  ]
)
console.log("> result 10: ", result10)

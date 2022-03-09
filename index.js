//1 

let array = [1, 2, 3, 4, 5]
/*
const newArray = array.map(e => e)

console.log(array.map(e => e))
*/

//2

array = [1, 'hello', 2, 3, 'greetings', 4, 'bye!', 5]
/*
const multi = array.map(e => Math.floor(e) ? e * 2 : e)

console.log(multi)
*/

//3
/*
array = [1, 'hello', 2, 3, 'greetings', 4, 'bye!', 5]

const mayusPar = array.map((e, i) => typeof e === 'string' && !(i % 2) ? e.toUpperCase() : e)

console.log(mayusPar)
*/

//4
/*

const justNum = array.filter(e => Math.floor(e))

console.log(justNum)
*/

//5
/*

const evenStrings = array.filter(e => !(Math.floor(e)) && e.length % 2)

console.log(evenStrings)
*/

//6
/*
const mixCond = array.filter(e => (Math.floor(e) && e>=5) || (!(Math.floor(e)) && e.length > 8))

console.log(mixCond)
*/

//7
array = [1, 2, 3, 4, 5]
/*
const sum = array.reduce((a, e) => a+e)
console.log(sum)
*/

//8

/*
const keysAndBoolean = array.reduce((a, e, i) => {
  a[e] = e % 2 === 0
  return a
} , {})

console.log(keysAndBoolean)
*/

//9

array = [1, 'hello', 2, true, { a: 1, b: 2 }, 3, 'greetings', ['a', 'b', false], 4, false, 'bye!', 5]
/*
console.log(array.filter(e => Math.floor(e) && e % 2 === 0).reduce((a, e) => a * (e**3), 1)) //da 512, no me coge el 2 de dentro del obj
*/


//10


//just strings
let arrayOfAsciis = []
const justStrings = array.filter(e => typeof e === 'string')

//strings of asciis

  for (let i = 0; i < justStrings.length; i++) {
    let currentWord = justStrings[i]
    let asciiWord = ''
    for (let j = 0; j < currentWord.length; j++) {

       asciiWord += currentWord.charCodeAt(j) 
      
    }
    
    arrayOfAsciis.push(asciiWord)

  }

//array of only odd numbers

let arrayOddAscii = []
let charCounter = 0
for (let i = 0; i < arrayOfAsciis.length; i++) {
  let oddAscii = ''
  currentString = arrayOfAsciis[i]
  for (let j = 0; j < currentString.length; j++) {
    
    if (currentString[j] % 2 !== 0) {
      currentString[j]
      oddAscii += currentString[j]
    }
    
  }
  arrayOddAscii.push(oddAscii)
}

// sumar numeros en cada palabra

let sumArray = []

for (let i = 0; i < arrayOddAscii.length; i++) {
  let acc = 0
  currentString = arrayOddAscii[i]
  for (let j = 0; j < currentString.length; j++) {
    acc += Math.floor(currentString[j])
  }
  sumArray.push(acc)
}

//suma elementos y media sobre total elementos array de strings

let media = sumArray.reduce((a, n) => a+n, 0)/justStrings.length

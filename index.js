//1 



const sameArray = a => a.map(e => e)

const result1 = sameArray([1, 2, 3, 4, 5])

console.log('Ejercicio 1: ', result1)


//2



const numbersMultByTwo = a =>
  a.map(e => Math.floor(e) ? e * 2 : e)

const result2 = numbersMultByTwo([1, 'hello', 2, 3, 'greetings', 4, 'bye!', 5])

console.log('Ejercicio 2: ', result2)


//3



const mayusPar = array => array.map((e, i) => typeof e === 'string' && !(i % 2) ? e.toUpperCase() : e)

const result3 = mayusPar([1, 'hello', 2, 3, 'greetings', 4, 'bye!', 5])

console.log('Ejercicio 3: ', result3)


//4


const justNum = array => array.filter(e => Math.floor(e))

const result4 = justNum([1, 'hello', 2, 3, 'greetings', 4, 'bye!', 5])

console.log('Ejercicio 4: ', result4)


//5


const evenStrings = array => array.filter(e => !(Math.floor(e)) && e.length % 2)

const result5 = evenStrings([1, 'hello', 2, 3, 'greetings', 4, 'bye!', 5])

console.log('Ejercicio 5: ', result5)


//6

const mixCond = array => array.filter(e => (Math.floor(e) && e>=5) || (!(Math.floor(e)) && e.length > 8))

const result6 = mixCond([1, 'hello', 2, 3, 'greetings', 4, 'bye!', 5])

console.log('Ejercicio 6: ', result6)


//7

const sumArray = array => array.reduce((a, e) => a+e)

const result7 = sumArray([1, 2, 3, 4, 5])

console.log('Ejercicio 7: ', result7)


//8


const ObjWithkeysAndBoolean = array => array.reduce((a, e, i) => {
  a[e] = !(e % 2)
  return a
} , {})

const result8 = ObjWithkeysAndBoolean([1, 2, 3, 4, 5])

console.log('Ejercicio 8: ', result8)

//9


const evenNumbersPowThree = array => array.filter(e => Math.floor(e) && e % 2 === 0).reduce((a, e) => a * (e**3), 1)

const result9 = evenNumbersPowThree([1, 'hello', 2, true, { a: 1, b: 2 }, 3, 'greetings', ['a', 'b', false], 4, false, 'bye!', 5])

console.log('Ejercicio 9: ', result9)

//10

let array1 = [1, 'hello', 2, 3, 'greetings', 4, 'bye!', 5]

//just strings

const justStrings = array1.filter(e => typeof e === 'string')

//strings of asciis

let arrayOfAsciis = []
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

let sumArray1 = []

for (let i = 0; i < arrayOddAscii.length; i++) {
  let acc = 0
  currentString = arrayOddAscii[i]
  for (let j = 0; j < currentString.length; j++) {
    acc += Math.floor(currentString[j])
  }
  sumArray1.push(acc)
}

//suma elementos y media sobre total elementos array de strings

let media = sumArray1.reduce((a, n) => a+n, 0)/justStrings.length



console.log('Ejercicio 10: ', media)
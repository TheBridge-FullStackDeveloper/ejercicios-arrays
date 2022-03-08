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
console.log(array.filter(e => Math.floor(e) && e % 2 === 0).reduce((a, e) => a * (e**3), 1)) //da 512
*/


//10

const otia = array.filter(e => {
  return typeof e === 'string'
})


   
  'ttgr'.codePointAt(0)
  //.concat.codePointAt(i)


console.log(otia.map(e => ));

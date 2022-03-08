//1- Reciba un array por argumentos y devuelva un nuevo array igual al recibido. Ejemplo de entrada: [1, 2, 3, 4, 5]. Ejemplo de salida: [1, 2, 3, 4, 5]
const arr = [1, 2, 3, 4, 5]

const newArr = (arr) =>{
  return array = arr.map((number, index, array) => {
    return `${number}`
  })
}
console.log(newArr(arr))

//2- Reciba un array con numbers y strings y devuelva un nuevo array de la misma longitud, pero con los números multiplicados x2.
//  Ejemplo de entrada: [1, 'hello', 2, 3, 'greetings', 4, 'bye!', 5]
//  Ejemplo de salida: Ejemplo de entrada: [2, 'hello', 4, 6, 'greetings', 8, 'bye!', 10]

const arr2 = [1, 'hello', 2, 3, 'greetings', 4, 'bye!', 5]

const newArr2 = (arr) => {
  return array = arr.map((element, index, array) => {
    return typeof element == "number"? element*2: element
  })
}
console.log(newArr2(arr2))

//3- Reciba un array con numbers y strings y devuelva un nuevo array de la misma longitud, pero los strings que estén en posición par deben estar en mayúsculas
//  Ejemplo de entrada: [1, 'hello', 2, 3, 'greetings', 4, 'bye!', 5]
//  Ejemplo de salida: [1, 'hello', 2, 3, 'GREETINGS', 4, 'BYE!', 5]

const arr3 = [1, 'hello', 2, 3, 'greetings', 4, 'bye!', 5]

const newArr3 = (arr) => {
  return array = arr.map((element,index, array) =>{
    return typeof element == "string" && index%2 === 0? element.toUpperCase(): element;
  })
}
console.log(newArr3(arr3))

//4- Reciba un array con numbers y strings y devuelva un nuevo array solo con números
//  Ejemplo de entrada: [1, 'hello', 2, 3, 'greetings', 4, 'bye!', 5]
//  Ejemplo de salida: [1, 2, 3, 4, 5]

const arr4 = [1, 'hello', 2, 3, 'greetings', 4, 'bye!', 5]

const newArr4 = (arr) =>{
  return array = arr.filter((element, index, array)=>{
      return typeof element == "number"
  })
}
console.log(newArr4(arr4))

//5- Reciba un array con numbers y strings y devuelva un nuevo array solo con strings cuya longitud sea impar
//  Ejemplo de entrada: [1, 'hello', 2, 3, 'greetings', 4, 'bye!', 5]
//  Ejemplo de salida: ['hello', 'greetings']

const arr5 = [1, 'hello', 2, 3, 'greetings', 4, 'bye!', 5]

const newArr5 = (arr) => arr.filter((element, index, array)=>typeof element == "string" && !(element.length%2 == 0))

console.log(newArr5(arr5))

//6- Reciba un array con numbers y strings y devuelva un nuevo array con aquellos elementos que, siendo números, sean mayores o iguales a 5 y, siendo strings, sus longitudes sean mayores a 8
//  Ejemplo de entrada: [1, 'hello', 2, 3, 'greetings', 4, 'bye!', 5]
//  Ejemplo de salida: ['greetings', 5]

const arr6  = [1, 'hello', 2, 3, 'greetings', 4, 'bye!', 5]

const newArr6 = (arr) => {
  return array = arr.filter((element, index, array)=>{
    return (typeof element == "string" && element.length > 8) || (typeof element == "number" && element >= 5)
  })
}
console.log(newArr6(arr6))

//7- Reciba un array con numbers y devuelva la suma de todos ellos
//  Ejemplo de entrada: [1, 2, 3, 4, 5]
//  Ejemplo de salida: 15

const arr7 = [1, 2, 3, 4, 5];
const newArr7 = (arr) => arr.reduce((acc, curr, index, array) => acc +=curr ,0);
console.log(newArr7(arr7))

//8- Reciba un array con numbers y devuelva un objeto que tenga, como keys, los elementos del array y como values de esas keys, un booleano indicando si es par o n. Ejemplo:
/*  Entrada: [1, 2, 3, 4, 5]
  Salida: {
    1: false,
    2: true,
    3: false,
    4: true,
    5: false
  }
*/
const arr8 = [1, 2, 3, 4, 5]
const newArr8 = (arr) => {
  return array = arr8.reduce((acc, curr, index, arr) =>{
    acc[curr] = curr%2==0
    return acc
  }, {})
}
console.log(newArr8(arr8))

//9- Reciba un array por argumentos con todo tipo de elementos (numbers, strings, booleans, objects y arrays) y devuelva la multiplicación de todos los números pares elevados al cubo (mezcla map, filter y reduce)
//  Ejemplo de entrada: [1, 'hello', 2, true, { a: 1, b: 2 }, 3, 'greetings', ['a', 'b', false], 4, false, 'bye!', 5]
//  Ejemplo de salida: 1728000

const arr9 = [1, 'hello', 2, true, { a: 1, b: 2 }, 3, 'greetings', ['a', 'b', false], 4, false, 'bye!', 5]

//10- Reciba un array por argumentos con todo tipo de elementos (numbers, strings, booleans, objects y arrays) y  que haga los siguientes pasos:
//  -> Quédate solo con los strings
//  -> Obtén el valor del código ASCII de cada letra y concatena dichos resultados para cada palabra. Ejemplo 'boa' -> '9811197' (98 de la 'b', 111 de la 'o' y 97 de la 'a')
//  -> Elimina, en cada string, aquellos caracteres que sean pares (HAY QUE USAR TRIPLE IGUAL!)
//  -> Para cada elemento, suma todos sus números
//  -> Obtén la suma de todos los elementos
//  -> Devuelve la media media
//  Ejemplo de entrada: [1, 'hello', 2, true, { a: 1, b: 2 }, 3, 'greetings', ['a', 'b', false], 4, false, 'bye!', 5]

const arr10 = [1, 'hello', 2, true, { a: 1, b: 2 }, 3, 'greetings', ['a', 'b', false], 4, false, 'bye!', 5]

const newArr10 = (arr) =>{
//Obtenemos los Strings solamente//
const stringOnly = (arr) =>{
  return arr.filter((element, index, array)=>{
      return stringArray = typeof element == "string"
  }) 
}
const arrayString = stringOnly(arr)

//Pasamos a código ASCII//
const stringToAscii = (arr) => {
  let toAscii = []
    for(let i = 0; i<arr.length; i++){
      let textInArray = arr[i]
      let textAscII = "";
      for(let j =0; j<textInArray.length; j++){
        textAscII += textInArray.charCodeAt(j)
      }
      toAscii.push(textAscII)
    }
  return toAscii
}
const toAscii = stringToAscii(arrayString)

//Se eliminan los números pares//
const noParNumber = (arr)=>{
  const noParArray = []
  for(num of arr){
    const newNum = num.split("")
    const noPar = newNum.filter((element, index, array)=>{
      return !(element%2===0)
    })
    const newNoPar = noPar.join('')
    noParArray.push(newNoPar)
  }
  return noParArray
}
const parOut = noParNumber(toAscii)

//Suma todos los numeros//
const sumElements = (arr) =>{
  const sumArray = []
  for(num of arr){
    const newNum = num.split("")
    const sumNew =  newNum.reduce((acc, curr, index, array) => acc + parseInt(curr) ,0);
    sumArray.push(sumNew)
  }
  return sumArray
}
const sumaElementos = sumElements(parOut)

//Suma todos los elementos//
const sumaTodo = (arr) =>{
  return arr.reduce((acc, curr, index, array) => acc + curr ,0)
}
const totalElem = sumaTodo(sumaElementos)

//Media//
const media = totalElem /sumaElementos.length

//Imprime resultado//
return {
    "Solo Strings":arrayString,
    "Código ASCII": toAscii,
    "Sin pares": parOut,
    "Suma Elementos": sumaElementos,
    "Total Elementos": totalElem,
    "media": media
  }
}

console.log(newArr10(arr10))
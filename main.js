// --> Variables <--
// var  --> old-style, function-scoped, can be updated and re-declared
// let  --> block-scoped, can be updated but not re-declared in the same scope
// const --> block-scoped, cannot be reassigned (must be initialized). Note: object/array contents can still be mutated.

// --> Data Types <--
// String --> "abc"
// number --> 1,2,3
// Boolean --> True / False
// null -->
// Undefined -->
// symbol -->
// Object -->

// --> Type Conversion <--
// Converting Strings to Numbers --> Number()
// Converting Numbers to Strings --> String()

// prompt(text, defaultText)
// console.log() --> method writes (logs) a message to the console.
// typeof() --> operator returns the type of a variable or an expression.
// isNaN() --> Not-a-Number --> method returns true if a value is NaN.
// isArray() --> checks if a value is an array (returns true/false)

// --> Arithmetic Operators <--
// + --> Addition
// - --> Subtraction
// * --> Multiplication
// **	--> Exponentiation
// / --> Division
// % --> Modulus (Remainder)
// ++ --> Increment
// -- --> Decrement

// --> Comparison Operators <--
// ==	--> equal to
// ===	--> equal value and equal type
// != --> not equal
// !== --> not equal value or not equal type
// > --> greater than
// < --> Less than
// >= --> greater than or equal to
// <= --> less than or equal to

// --> else Statement <--
// if (condition1) {
//   //  block of code to be executed if condition1 is true
// } else if (condition2) {
//   //  block of code to be executed if the condition1 is false and condition2 is true
// } else {
//   //  block of code to be executed if the condition1 is false and condition2 is false
// }

// --> Ternary <--
// (condition) ? expression1 : expression2

// --Switch Statement
// switch(expression) {
//   case x:
//     // code block
//     break;
//   case y:
//     // code block
//     break;
//   default:
//     // code block
// }

// AND --> &&
// OR --> ||

// --> Functions <--
// function name(parameters = default value) {
//   code;
//   return;
// }
// name(a,b)

// --> Math Object <--
// Math.round(x) --> Returns x rounded to its nearest integer
// Math.ceil(x)	--> Returns x rounded up to its nearest integer
// Math.floor(x) --> Returns x rounded down to its nearest integer
// Math.pow(x,y) --> returns the value of x to the power of y
// Math.sqrt(x) --> returns the square root of x
// Math.abs(x) --> returns the absolute (positive) value of x
// Math.min(a,b,c) and Math.max(a,b,c) --> can be used to find the lowest or highest value in a list of arguments:
// Math.random() -->  returns a random number between 0 (inclusive), and 1 (exclusive)

// --> Assignment <--
// = --> assigns a value (x = 5)
// += --> adds and assigns (x += 2  →  x = x + 2)
// -= --> subtracts and assigns (x -= 2  →  x = x - 2)
// *= --> multiplies and assigns (x *= 2  →  x = x * 2)
// **= --> exponentiates and assigns (x **= 2  →  x = x ** 2)
// /= --> divides and assigns (x /= 2  →  x = x / 2)
// %= --> gets remainder and assigns (x %= 2  →  x = x % 2)
// : --> used in objects or ternary operator, not an assignment (e.g. {key: value} or condition ? a : b)

// --> Loop for <--
// for (let i = 0; i = 10 ; i++) {
//   code block to be executed;
// }

// --> Loop While <--
// let i = 0;
// while (i < 10) {
//   code block to be executed;
//   i++;
// }

// --> Loop do While <--
// let i = 0;
// do {
//   text += "The number is " + i;
//   i++;
// } while (i < 10);

// for --> when you know how many times to loop
// while --> when you loop until a condition is false
// do...while --> like while, but runs at least once

// --> Arrays <--
// const arrayNmae = [item1, item2, ...];
// Arrays are Objects
// arrayName[1]  --> Accessing Array Elements
// arrayName[1] = "itemX"  --> Changing an Array Element

// --> Object <--
// const objectName = {id:1,name:"omid",pass:"1255"}
// objectName.id --> 1

// --> Nested Object and Array <--
// const name = [{},{},{}]
// const name = {x=[],y=[]}

// --> Array / Object Methods <--
// arrayName.length --> Returns the number of elements
// push() --> add element to end
// pop() --> remove element from end
// unshift() --> add element to start
// shift() --> remove element from start
// forEach() --> runs a function for each element (no return)
// Array includes() --> checks if element exists (true/false)
// some() --> returns true if any element passes condition
// every() --> returns true if all elements pass condition
// Array find() --> returns first element that matches condition
// Array findindex() --> returns index of first element that matches condition (or -1 if not found)
// Array indexOf() --> returns the index of an element, or -1 if not found
// splice() --> method can be used to add or remove new items to an array
// filter() --> returns new array with elements that pass condition
// map() --> returns new array with modified elements
// fill() --> fills array with a static value (can set start & end index)
// lastIndexOf() --> returns the last index of an element, or -1 if not found
// slice() --> returns a shallow copy of a portion of an array
// join() --> joins array elements into a string with a separator
// reverse() --> reverses the order of array elements
// split() --> splits a string into an array by a separator
// padStart() & padEnd() --> pads the start/end of a string with given characters to a desired length

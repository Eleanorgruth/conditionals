// var number = 30
// if (number % 3 === 0) {
//   console.log(`Fizz`);
// } else if (number % 5 === 0){
//   console.log(`Buzz`)
// } else if (number % 5 === 0 && number % 3 === 0){
//   console.log(`FizzBuzz`)
// } else {
//   console.log(`${number}`)
// }

var number = 30
if (number % 5 === 0 && number % 3 === 0) {
  console.log(`FizzBuzz`);
} else if (number % 5 === 0){
  console.log(`Buzz`)
} else if (number % 3 === 0){
  console.log(`Fizz`)
} else {
  console.log(`${number}`)
}

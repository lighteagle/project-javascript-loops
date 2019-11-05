let iteration = 1
do {
  console.log(iteration)
  iteration += 5
} while (iteration < 100)

for (let index = 0; index <= 100; index += 10) {
  console.log(index)
}

let input = prompt("Enter Factorial Number :")
let factorialNumber = 1
for (let i = 1; i <= input; i++) {
  factorialNumber *= i
}
console.log(`
Input : ${input}
Output :${factorialNumber}`)

let inputName = prompt("Enter Your Name :")
// let arrayName = inputName.split("")
// // arrayName.reverse()
// // let reverseName = ''
// // for (let i = 0; i < arrayName.length; i++) {
// //   reverseName += arrayName[i]
// // }

let reverseName = inputName.split('').reverse().join('')
console.log(reverseName)
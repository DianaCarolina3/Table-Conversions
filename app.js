let type = "onza"
let amount = 3
let ounce = ""
let kilograms = ""
let Pounds = ""
let gram = ""

// const toOunce = () => {
//   if (type === "gramos") {
//     ounce = amount / 28.35
//     console.log('Onzas: ', ounce);
//   } else if (type === "Onzas") {
//     gram = amount * 28.35
//     console.log('gram: ', gram)
//   }
// }
// const toKilograms = () => {
//   if (type === "gramos") {
//     kilograms = amount / 1000
//     console.log('kilogramos: ', kilograms);
//   }
// }
// const toPounds = () => {
//   if (type === "gramos") {
//     pounds = amount / 454
//     console.log('Libras: ', pounds)
//   }
// }

const toResult = () => {
  switch(type) {
    case "gramo":
      pounds = amount / 454
      console.log(`${amount} ${amount === 1 ? "gramo" : "gramos"} es igual a: ${pounds.toFixed(4)} Libras`)
    break
    case "kilo":
      pounds = amount * 2.205
      console.log(`${amount} ${amount === 1 ? "kilo" : "kilos"} es igual a: ${pounds.toFixed(4)} Libras`)
    break
    case "onza":
      pounds = amount / 16
      console.log(`${amount} ${amount === 1 ? "onza" : "onzas"} es igual a: ${pounds.toFixed(4)} libras`)
    break
  }
}
toResult()
// toOunce()
// toKilograms()
// toPounds()

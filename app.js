let type = "gramos"
let amount = 36


const toResultToPounds = () => {
  switch(type) {
    case "gramo":
      case "gramos":
      pounds = amount / 454
      console.log(`${amount} ${amount === 1 ? "gramo" : "gramos"} es igual a: ${pounds.toFixed(4)} Libras`)
        break
    case "kilo":
      case "kilos":
        pounds = amount * 2.205
        console.log(`${amount} ${amount === 1 ? "kilo" : "kilos"} es igual a: ${pounds.toFixed(4)} Libras`)
          break
    case "onza":
      case "onzas":
        pounds = amount / 16
        console.log(`${amount} ${amount === 1 ? "onza" : "onzas"} es igual a: ${pounds.toFixed(4)} libras`)
          break
    case "tonelada":
      case "toneladas":
        pounds = amount * 2205
        console.log(`${amount} ${amount === 1 ? "tonelada" : "toneladas"} es igual a: ${pounds.toFixed(5)} libras`)
          break
        }
      }
      toResultToPounds()



// let ounce = ""
// let kilograms = ""
// let Pounds = ""
// let gram = ""

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
          
          // toOunce()
          // toKilograms()
          // toPounds()
import { saludoDeCarlos, saludoDeJero } from './functions/greeting.js'
import { sumaDeCarlos } from './functions/sumaDeCarlos.js'
import { sumaDeJero } from './functions/sumaDeJero.js'

const name = 'jERO'

saludoDeCarlos(name)
console.log(saludoDeJero(name))

const num1 = 10
const num2 = 12

console.log(sumaDeCarlos(num1, num2))
console.log(sumaDeJero(num1, num2))

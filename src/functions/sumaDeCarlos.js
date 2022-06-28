export const sumaDeCarlos = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number') return `${a} o ${b} no son números`

  return `${a} + ${b} = ${a + b}`
}
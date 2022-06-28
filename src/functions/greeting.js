export const saludoDeCarlos = name => {
  if (typeof name === 'string') {
    name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
    console.log(`Hola, ${name}`)
  } else console.log('Introduce un texto')
}

export const saludoDeJero = name => {
  if (typeof name !== 'string') return `${name} no es un texto`

  return `Hola, ${name[0].toUpperCase() + name.slice(1).toLowerCase()}`
}

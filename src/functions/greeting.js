export const saludo = (name) => {
  if (typeof name !== "number") {
    console.log(`Hola, ${name}`)
    name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
  } else 
    console.log('Introduce un dato NO numérico')
}

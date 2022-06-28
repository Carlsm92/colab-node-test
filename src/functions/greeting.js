export const saludo = (name) => {
  if (typeof name === "string") {
    name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
    console.log(`Hola, ${name}`)
  } else 
    console.log('Introduce un texto')
}

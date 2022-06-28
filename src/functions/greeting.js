export const saludo = (name) => {
  name = name.charAt(0).toUpperCase() + name.slice(1)
    console.log(`Hola, ${name}`)
}

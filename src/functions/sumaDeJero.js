export const sumaDeJero = (num1, num2) =>
  typeof num1 !== 'number' || typeof num2 !== 'number'
    ? `${num1} or ${num2} is not a number`
    : `${num1} + ${num2} = ${num1 + num2}`

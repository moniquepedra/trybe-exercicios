let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// O valor da variável higherNumber poderia ser qualquer um, desde que fosse menor que o menor número do array numbers. Caso o valor 101 fosse atribuído à variável, o algoritmo estaria errado, pois ele nunca acharia um número maior que 101 no array. Para resolver esse problema, inicie a variável com o primeiro valor do array. Assim, é possível pular a posição 0 e iniciar com index = 1.

let higherNumber = numbers[0];

for (let index = 1; index < numbers.length; index += 1) {
  if (numbers[index] > higherNumber) {
    higherNumber = numbers[index];
  }
}

console.log(higherNumber);
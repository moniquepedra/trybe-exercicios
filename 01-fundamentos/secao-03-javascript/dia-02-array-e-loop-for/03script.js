let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0; // variável "sum" vai conter a soma dos elementos
for (let index = 0; index <numbers.length; index += 1) {
    sum +=numbers[index]; // somar na variável "sum", cada elemento do array. Ao final da execução do elemento "for", "sum" terá a soma de todos os elementos do array
}
//em seguida, calcula a média artmetica dos elementos, cria a variável average, que receberá o valor da soma de todos os elementos do array = sum divido pela quantidade de elementos que tem no array
let average = sum / numbers.length;
console.log (average);
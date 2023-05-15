let name ='Marta';
let lastName = 'Silva';
let age = 34;
let medals = {golden: 2, Silver: 3};

let player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: {golden: 2, Silver: 3}
}

// Para criair a chave bestinTheworld, utilize o modelo meuObjeto.chave = valor, ao acessar seu valor no objeto player, atribua a ela o array proposto.

player.bestInTheWord = [2006, 2007, 2008, 2009, 2010, 2018];

// Ao tentar acessar uma chave inexistente, o JavaScript criará essa chave automaticamente.

console.log('A jogadora ' + player.name + ' ' + player.lastName + ' tem ' + player.age + ' anos. ');
console.log('A jogadora ' + player.name + ' ' + player.lastName + ' foi eleita a melhor do mundo por ' + player['bestInTheWord'].length + ' vezes. ');

//Como a chave bestinTheWorld armazena um array, é possível utilizar funções específicas de arrays, como length, para obter o tamanho do array.
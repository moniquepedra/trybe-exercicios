const pai = document.getElementById('pai'); //Recupere o elemento com o id pai
const irmaoElementoOndeVoceEsta = document.createElement('section');
irmaoElementoOndeVoceEsta.id = 'irmaoElementoOndeVoceEsta'; //criou um id para o novo elemento
pai.appendChild(irmaoElementoOndeVoceEsta); //Adicione o elemento criado como filho do elemento com o id 'pai'.

const elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');
const filhoElementoOndeVoceEsta = document.createElement('p');
filhoElementoOndeVoceEsta.id = 'filhoElementoOndeVoceEsta';
elementoOndeVoceEsta.appendChild(filhoElementoOndeVoceEsta);

const primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho');
const filhoPrimeiroFilhoDoFilho = document.createElement('p');
filhoPrimeiroFilhoDoFilho.id = 'filhoPrimeiroFilhoDoFilho';
primeiroFilhoDoFilho.appendChild(filhoPrimeiroFilhoDoFilho);

//A partir desse filho criado, acesse terceiroFilho

const terceiroFilho = filhoPrimeiroFilhoDoFilho
.parentElement
.parentElement
.nextElementSibling

console.log(terceiroFilho);
const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');


// 1. Copie esse arquivo e edite apenas ele.
// 1.1. Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?

// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando este for clicado.
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como é possível fazer isso? Dica: Lembre-se do método `.classList.remove`.
const handleChangeTech = (event) => {
    const techElement = document.querySelector('.tech');
    techElement.classList.remove('tech'); // esse método garante que apenas um elemento possua a classe 'tech' a qualquer momento.
    event.target.classList.add('tech'); // a propriedade event.target é usada para obter o elemento que foi clicado e disparou o evento. 'event.target' representa o alvo do evento, neste caso, o elemento 'li' que foi clicado. E por fim, a função adiciona a classe 'tech' ao elemento clicado usando o método 'classList.add('tech)''
    input.value = ''; // essa linha é responsável por limpar o valor do campo de entrada de texto quando um elemento li é clicado. Ao clicar em um elemento li e chamar a função handleChangeTech, o valor do campo de entrada do texto é definido como uma string vazia
} // e o conteudo previamente digitado será removido e o campo ficará vazio.

// O código também adicona os eventos de clique aos elementos firstLi,secondLi e thirdLi
firstLi.addEventListener('click', handleChangeTech);
secondLi.addEventListener('click', handleChangeTech);
thirdLi.addEventListener('click', handleChangeTech);

// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech'.

input.addEventListener('input', (event) => {
    const techElement = document.querySelector('.tech');
    techElement.innerText = event.target.value;
});

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy',
// redirecione para alguma página.
// 4.1. Que tal redirecionar para seu portfólio? Dica: Lembre-se dos métodos `window.location.replace` e `window.open`.

myWebpage.addEventListener('dblclick', () => {
    window.location.replace('https://blogbetrybe.com');
});

//para abrir o link em nova aba: window.open('https://blog.betrybe.com/', '_blank')

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor dele.

myWebpage.addEventListener('mouseover', (event) => {
    event.target.style.color = 'red';
} );

myWebpage.addEventListener('mouseout', (event) => {
event.target.style.color = 'unset';
})

//(event) como parâmetro é opcional, como não precisa acessar informações especificas do evento, pode omitir o parâmetro ficando assim:

myWebpage.addEventListener('mouseover', () => {
    myWebpage.target.style.color = 'red';
} );

myWebpage.addEventListener('mouseout', () => {
myWebpage.target.style.color = 'unset';
})

// Segue abaixo um exemplo de uso do event.target.

    function resetText(event) {
        // O event é passado como um parâmetro para a função.
        event.target.innerText = 'Opção reiniciada';
        // O event possui várias propriedades, porém a mais usada é o event.target,
        // que retorna o objeto que disparou o evento.
    }

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na função retornará o objeto 'firstLi'.
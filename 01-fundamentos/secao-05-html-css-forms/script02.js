// SELETORES
const inputText = document.querySelector("#input-text");
const inputCheckbox = document.querySelector("#input-checkbox");
const hrefLink = document.querySelector("#href");

//Adicione um evento click no elemento a que possui o id href. Na função do evento, implemente o método preventDefault
hrefLink.addEventListener('click', (event) => {
  event.preventDefault();
});

//Adicione um evento click no elemento checkbox que possui o id input-checkbox. Na função do evento, implemente o método preventDefault
inputCheckbox.addEventListener('click', (event) => {
  event.preventDefault();

});

//Adicione um evento keypress no elemento input type="text" que possui o id input-text. Na função do evento, implemente o método preventDefault de forma que somente o caractere 'a' possa ser digitado
inputText.addEventListener('keypress', (event)=> {
  const character = event.key;
  if (character !== 'a') {
    event.preventDefault();
  }
});
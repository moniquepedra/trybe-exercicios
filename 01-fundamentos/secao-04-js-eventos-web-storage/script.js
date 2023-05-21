const header = document.getElementById('header-container');
header.style.backgroundColor = 'rgb(0, 176, 105)';

const emergencyTasks = document.getElementsByClassName('emergency-tasks')[0];
emergencyTasks.style.backgroundColor = 'rgb(255, 159, 132)';
// O seletor getElementByClassName sempre retorna um HTML collection mesmo que tenha apenas um elemento, com índice [0]. 
//Logo, para alterar um elemento de uma lista é necessário especificar o índice [0] porque não é possível acessar/alterar uma propriedade de uma lista.

const emergencyTasksHeaders = document.querySelectorAll('.emergency-tasks h3');
for (let index = 0; index < emergencyTasksHeaders.length; index += 1) {
  emergencyTasksHeaders[index].style.backgroundColor = 'rgb(165, 0, 243)';
}
// O querySelectorAll retorna uma node list com todos os elementos que possuem a classe especificada.

const noEmergencyTasks = document.querySelector('.no-emergency-tasks');
noEmergencyTasks.style.backgroundColor = 'rgb(249, 219, 94)';

// O querySelector retorna uma única vez a primeira ocorrência do elemento com a classe especificada.

const noEmergencyTasksHeaders = document.querySelectorAll('.no-emergency-tasks h3');
for (let index = 0; index < noEmergencyTasksHeaders.length; index += 1) {
  noEmergencyTasksHeaders[index].style.backgroundColor = 'rgb(35, 37, 37)';
}

const footer = document.getElementById('footer-container');
footer.style.backgroundColor = 'rgb(0, 53, 51)';

/*querySelector precisa especificar o tipo de seleção, quando for um ID # ou uma classe . assim como é feito no .css. 
qualquer outro elemento acessa direto, ex: document.querySelector("p");
querySelectorAll: substitui o getElementbyClassName
Seletor getElementByTagName: retorna sempre uma lista de elementos NUNCA apenas 1 elemento

Obs.: Html collection é uma lista de elementos html ( div, p, a, img, etc) e o Nodelist é uma coleção de nós, 
ex* pode ter um texto que não necessariamente é um elemento html.*/
const header = document.querySelector("#header-container");
header.style.backgroundColor = "rgb(0, 176, 105)";

// poderia ser o getElementById 

const emergencyTasks = document.getElementsByClassName("emergency-tasks");
emergencyTasks[0].style.backgroundColor = "rgb(255, 159, 132)";

// Retorna um HTMl collection de apenas um item, índice [0]
//O índice pode ser acessado tanto na primeira linha quanto na segunda


const emergencyTasksHeaders = document.querySelectorAll(".emergency-tasks h3");
for (let index = 0; index < emergencyTasksHeaders.length; index += 1) {
  emergencyTasksHeaders[index].style.backgroundColor = 'rgb(165, 0, 243)';
    
}

//retorna um node list com os itens h3 encontrados

const noEmergencyTasks = document.getElementsByClassName("no-emergency-tasks");
noEmergencyTasks[0].style.backgroundColor = 'rgb(249, 219, 94)'

// também poderia fazer com querySelector

const noEmergencyTasksHeaders = document.querySelectorAll(".no-emergency-tasks h3");
for (let index = 0; index < noEmergencyTasksHeaders.length; index += 1) {
    noEmergencyTasksHeaders[index].style.backgroundColor = 'rgb(35, 37, 37)'
    
}

const footer = document.getElementById("footer-container");

footer.style.backgroundColor = "rgb(0, 53, 51)";
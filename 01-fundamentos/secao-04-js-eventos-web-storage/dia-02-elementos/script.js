const whereAreYou = document.getElementById('where-are-you');
const parent = whereAreYou.parentElement;
parent.style.color = 'blue';

const firstChildOfChild = whereAreYou.firstElementChild;
firstChildOfChild.innerText = 'First child of Child';

const firstChild = parent.firstElementChild;

const firstChild2 = whereAreYou.previousElementSibling;

const elementText = whereAreYou.nextSibling;

const thirdChild = whereAreYou.nextElementSibling;

const thirdChild2 = parent.lastElementChild.previousElementSibling;


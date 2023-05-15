let student = {};

function addProperty(object,key,value) {
    object[key] = value;
};

addProperty (student, 'nome', 'Monique');
addProperty (student, 'email', 'moniquepedrinha@gmail.com');
addProperty (student, 'telefone', '(11) 968398439');
addProperty (student, 'Github', 'github.com/moniquepedra');
addProperty (student, 'Linkedin', 'linkedin.com/in/moniquepedra');


console.log(student);
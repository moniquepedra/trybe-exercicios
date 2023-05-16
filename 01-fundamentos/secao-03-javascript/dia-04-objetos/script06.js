let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };

  console.log('O livro favorito de ' + leitor.nome + ' ' + leitor.sobrenome + ' se chama "' + leitor.livrosFavoritos[0].titulo + '."'); 
  
  //não esquecer de colocar o índice para acessar o item do array

  leitor.livrosFavoritos.push({titulo:'Harry Potter e o Prisioneiro de Azkaban', autor: 'JK Rowling', editora: 'Rocco'});

  console.log(leitor.nome + ' tem ' + leitor.livrosFavoritos.length + ' livros favoritos.') //lembrar da propriedade .length para acessar a array inteira
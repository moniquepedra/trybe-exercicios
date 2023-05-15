let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

  info['recorrente'] = 'sim';

  for (let key in info) {
    console.log(info[key]); //imprimir o valor que está em uma chave do objeto
  }
  

  console.log ('Bem-vinda, ' + info.personagem);
  console.log (info);

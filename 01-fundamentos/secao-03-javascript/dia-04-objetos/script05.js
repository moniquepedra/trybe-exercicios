let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

  let info2 = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O ùltimo Patinhas',
    recorrente: 'sim'

  }

  info['recorrente'] = 'sim';

  for (let key in info) {
    console.log(info[key]); //imprimir o valor que está em uma chave do objeto
  }
  
  for (let key in info) {
    if (key === 'recorrente' && info[key]=== 'sim' && info2[key] === 'sim')
  {
    console.log('Ambos recorrentes');
  } else {
    console.log(info[key] + ' e ' + info2[key]);
  }
}

  console.log ('Bem-vinda, ' + info.personagem);
  console.log (info);

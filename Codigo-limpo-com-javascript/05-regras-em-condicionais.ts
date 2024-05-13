//? Negação dentro de ifs

//! Não escrever váriaveis utilizando negação
//* exemplo:

const isUserOlderThan18Years = true;
const isUserLivesOnBrazil = true;

if (!isUserOlderThan18Years && !isUserLivesOnBrazil) {//! esse é um modelo que não ficaria bom.
}

//* Vamos reescrever:
const isUserYoungerThan18Years = true
const doesUserLivesOutsideBrazil = true;

if (isUserYoungerThan18Years && doesUserLivesOutsideBrazil) {
}



//? Early return vs Else 

function isUserOlderThan18Years(user) {
  if (!user) {
    return { error: true};
    }else {
      return user.age >= 18  //! Vamos reescrever esse código, porém dessa vez, não usaremos o ELSE
    }
  }

  //* Dessa forma retiramos o else 

  function isUserOlderThan18Years(user) {
    if (!user) {
      return { error: true};
    }
      return user.age >= 18 
    }


//? Mas quando iremos usar o ELSE ?
//* Usaremos o ELSE quando o Early return não é facilmente visto no código. 
//* Vão ter alguns momentos em que o nosso IF é tão grande que fica dificil vizualisar um return dentro desse código.
//* Então nesses casos é melhor usar o ELSE


//? Evite condicionais aninhadas
//* Evite fazer um IF dentro do IF.Prefira fazer um IF abaixo de outro IF.
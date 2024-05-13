//? Desacoplando componentes

//* 1° Quando eu tenho algo repetitivo.
//* 2° Quando eu consigo isolar algo do contexto (sem prejudicar o comportamento original). 

//? Componentes puros

//? Funções e eventos no React
//! handle, on

//!HANDLE
//* Sempre que eu for criar uma função, dentro do meu componente e essa função é disparada atravéz de um evento do usuário(click, submit e etc). 
//* Eu prefixo essas funções com o inicio usando o HANDLE.

// EXEMPLO: 
function handleCreateNewTodo() {}
//* Dessa forma consigo identificar funções que são enviadas a partir de um evento do usuário

//!on

//* receber uma função que é disparada a partir de um evento do usuário ou seja recebendo um parametro
//* eu sempre inicio esssas funções com ON

interface HeaderProps {
  onCreateNewTodo: () => void;
}

//? Composição vs Customização.

//!pattern  de composição -> estudar
root,

//? Condicionais no render
//*Evite colocar operações JavaScript dentro do render ( IF )

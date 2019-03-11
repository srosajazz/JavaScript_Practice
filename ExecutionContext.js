// Execution Context
function printName(){
    return 'Sergio Rosa';
  }
  
  //Lexical Environment
  function findName(){
      function a() {
          
      }
    return printName();
  }
  
  function sayMyName(){
    return findName();
  }
  
  sayMyName():
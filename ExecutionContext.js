// Execution Context
function printName(){
    return 'Sergio Rosa';
  }
  
  function findName(){
    return printName();
  }
  
  function sayMyName(){
    return findName();
  }
  
  sayMyName():
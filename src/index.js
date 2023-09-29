module.exports = function check(str, bracketsConfig) {
  let stack = [];
  let openBrackets = [];
  let closeBrackets = [];

  
  for (let i = 0; i < bracketsConfig.length; i++) {
    openBrackets.push(bracketsConfig[i][0]);
    closeBrackets.push(bracketsConfig[i][1]);
  }

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    
    if (openBrackets.includes(char) && closeBrackets.includes(char)) {
      
      if (stack.length === 0 || stack[stack.length - 1] !== char) {
        stack.push(char);
      } else {
        stack.pop();
      }
    } else {
      let openIndex = openBrackets.indexOf(char);

      if (openIndex !== -1) {
        
        stack.push(char);
      } else {
        let closeIndex = closeBrackets.indexOf(char);

        if (closeIndex !== -1) {
          
          if (stack.length === 0) {
            return false; 
          }

          let lastOpenBracket = stack.pop();

          if (lastOpenBracket !== openBrackets[closeIndex]) {
            return false; 
          }
         }
       }
    }
  }

  return stack.length === 0; 
}
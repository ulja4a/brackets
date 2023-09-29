module.exports = function check(str, bracketsConfig) {
  let joinedStr = str.split('');
  let stack = [];
  let openBrackets = bracketsConfig.map(pair => pair[0]);
  let closeBrackets = bracketsConfig.map(pair => pair[1]);

  if ((joinedStr.length % 2) !== 0) {
    return false;
  }

  for (i=0; i<joinedStr.length; i++) {
    let openIndex = openBrackets.indexOf(joinedStr[i]);
    if (openIndex !==-1) {
      stack.push(openIndex);
      continue;
    }
    let closeIndex = closeBrackets.indexOf(joinedStr[i]);
    if (closeIndex !==-1) {
      openIndex = stack.pop();
    if (closeIndex !== openIndex) {
        return false;
        
      }
    }
  }
    if (stack.length !== 0) {
      return false;
    }
    return true;
}

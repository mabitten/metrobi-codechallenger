/**
 * 
 * Checks if the brackets in a given string are balanced and properly nested.
 * 
 * @param string brackets - The string containing brackets to be checked.
 * @returns {boolean|null}
 * 
 * @example
 * console.log(inputStringBrackets("{[()]}")); - true
 * console.log(inputStringBrackets("{[(])}")); - false
 */
const inputStringBrackets = (brackets) => {
    if (typeof brackets !== 'string') return null;

    const filteredBrackets = brackets.replace(/[^{}\[\]\(\)]/g, '');
    if (filteredBrackets.length === 0) return null;

    const bracketStack = [];
    const bracketsList= {
        '{': '}',
        '[': ']',
        '(': ')'
      };
  
    for (let bracket of filteredBrackets) {
        if (bracket in bracketsList) {
            bracketStack.push(bracketsList[bracket]);
          } else if (['}', ']', ')'].includes(bracket)) {
            if (bracketStack.pop() !== bracket) return false;
          } else {
            return null;
          }
    }

    return bracketStack.length === 0;
  }
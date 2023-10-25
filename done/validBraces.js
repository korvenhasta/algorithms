function validBraces(braces) {
  let stack = [];
  for (let i = 0; i < braces.length; i++) {
    if (braces[i] === "(" || braces[i] === "{" || braces[i] === "[") {
      stack.push(braces[i]);
    } else {
      let elem = stack.pop();
      if (
        (elem === "(" && braces[i] === ")") ||
        (elem === "{" && braces[i] === "}") ||
        (elem === "[" && braces[i] === "]")
      ) {
        continue;
      }
      return false;
    }
  }
  return stack.length === 0;
}

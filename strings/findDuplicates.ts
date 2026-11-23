function findDup(str: string): string {
  let result = "";

  for (const char of str) {
    if (str.indexOf(char) !== str.lastIndexOf(char)
        && !result.includes(char)) {
      result = result + char;
    }
  }

  return result;
}

console.log(findDup("hello"));
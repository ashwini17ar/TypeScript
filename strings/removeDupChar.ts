function removeDup(str: string): string {
  let result = "";

  for (const char of str) {
    if (!result.includes(char)) {
      result = result + char
    }
  }

  return result;
}

console.log(removeDup("programming")); // "progamin"

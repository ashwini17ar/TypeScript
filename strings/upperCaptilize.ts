function capitalizeWords(str: string): string {
  let words = str.split(" ");
  let result = "";

  for (let word of words) {
    let newWord = word[0].toUpperCase() + word.slice(1);
    result = result + newWord + " ";
  }

  return result.trim();
}

console.log(capitalizeWords("hello world typescript"));

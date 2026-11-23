function reverseEachWord(str: string): string {
  let words = str.split(" ");
  let result = "";

  for (let word of words) {
    let reversed = "";

    for (let i = word.length - 1; i >= 0; i--) {
      reversed = reversed + word[i];
    }

    result = result + reversed + " ";
  }

  return result.trim();
}
  
console.log(reverseEachWord("hello world typescript"));

function reverseStringEach(str: string): string {
  let reversed = "";

  for (let i = str.length - 1; i >= 0; i--) {
   reversed = reversed + str[i];
  }

  return reversed;
}

console.log(reverseStringnew("hello")); // Output: olleh
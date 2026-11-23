
function palindrome(str: string) {
    let text = str.toLowerCase();
    let reverse = "";

    for (let ch of text) {
        reverse = ch + reverse;
    }

    if (text === reverse) {
        console.log(`${str} -> Palindrome`);
    } else {
        console.log(`${str} -> Not a palindrome`);
    }
}

palindrome("madam");
palindrome("hello");
palindrome("level");

function isPalindrome(str:String) {
  let reversed = str.split("").reverse().join("");
  return str === reversed;
}

console.log(isPalindrome("madam")); // true
console.log(isPalindrome("hello")); // false

function isPalindromeNo(str:string) {
  let i = 0;
  let j = str.length - 1;

  while (i < j) {
    if (str[i] !== str[j]) {
      return false;
    }
    i++;
    j--;
  }
  return true;
}

console.log(isPalindromeNo("madam")); // true
console.log(isPalindromeNo("Happy")); // false


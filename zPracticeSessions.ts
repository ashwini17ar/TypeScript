function anagram(str1: String, str2: String): boolean {



	if (str1.length !== str2.length) {
		return false;
	}

	let sort1 = str1.split("").sort().join("");
	let sort2 = str2.split("").sort().join("");

	return sort1 === sort2;
}

console.log(anagram("net", "tin"));
console.log(anagram("text", "first"));

console.log("*********************************************");


function vowelsounting(str: string): { vowels: number, consonants: number } {
	let vowels = 0;
	let consonants = 0;

	let text = str.toLowerCase();

	for (let i = 0; i < text.length; i++) {
		let ch = text[i]

		if (ch >= 'a' && ch <= 'z') {
			if ("aeiou".includes(ch)) {
				vowels++;
			} else {
				consonants++
			}
		}
	}
	return { vowels, consonants }
}

console.log(vowelsounting("this 99999 my"));
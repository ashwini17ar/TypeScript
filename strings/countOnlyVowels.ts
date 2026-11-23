function printVowelsInEachWord(str: string): void {
    const words = str.split(" ");

    for (const word of words) {
        let vowels = "";
        let count =0;

        for (const ch of word.toLowerCase()) {
            if ("aeiou".includes(ch)) {
                vowels = vowels+ch;
                count ++;
            } 
        }

        console.log(`${word} -> ${vowels} - > ${count}`);
    }
 }

printVowelsInEachWord("Playwright with typescript automation");


console.log("                                   ");
console.log("**********************************");
console.log("                                   ");

function printVowelsInSentence(str: string): void {
    let vowels = "";

    for (const ch of str.toLowerCase()) {
        if ("aeiou".includes(ch)) {
            vowels = vowels + ch;
        }
    }

    console.log("Vowels in sentence:", vowels);
}

printVowelsInSentence("Playwright with typescript automation");







function printConsonantsInEachWord(str: string): void {
    const words = str.split(" ");

    for (const word of words) {
        let consonants = "";

        for (const ch of word.toLowerCase()) {
            if (ch >= 'a' && ch <= 'z' && !"aeiou".includes(ch)) {
                consonants = consonants + ch;
            }
        }
        console.log(`${word} -> ${consonants}`);
    }
}

printConsonantsInEachWord("Playwright with typescript automation");


console.log("                                   ");
console.log("**********************************");
console.log("                                   ");

function printConsonantsInSentence(str: string): void {
    let consonants = "";

    for (const ch of str.toLowerCase()) {
        if (ch >= 'a' && ch <= 'z' && !"aeiou".includes(ch)) {
            consonants = consonants + ch;
        }
    }

    console.log("Consonants in sentence:", consonants);
}



printConsonantsInSentence("Playwright with typescript automation");
function countVowelsAndConsonants(str: string): { vowels: number; consonants: number } {
    let vowels = 0;
    let consonants = 0;

    const text = str.toLowerCase();

    for (let i = 0; i < text.length; i++) {
        const ch = text[i];

        if (ch >= 'a' && ch <= 'z') {
            if ("aeiou".includes(ch)) {
                vowels++;
            } else {
                consonants++;
            }
        }
    }
    return { vowels, consonants };
}

console.log(countVowelsAndConsonants("Hello Worldaeiou"));
function toggleSecondCharacter(str: string): string {
    let result: string = "";
    let isSecondCharacter: boolean = false;

    for (let i = 0; i < str.length; i++) {

        // Check if current character is the second character of a word
        if (i > 0 && str[i - 1] !== " " &&
            (i === 1 || str[i - 2] === " ")) {
            isSecondCharacter = true;
        }

        if (isSecondCharacter) {

            // Lowercase to Uppercase
            if (str[i] >= 'a' && str[i] <= 'z') {
                result += str[i].toUpperCase();
            }

            // Uppercase to Lowercase
            else if (str[i] >= 'A' && str[i] <= 'Z') {
                result += str[i].toLowerCase();
            }

            else {
                result += str[i];
            }

            isSecondCharacter = false;
        }
        else {
            result += str[i];
        }
    }

    return result;
}


// Input 1
let str1: string = "My Name is Ahwini";

console.log("Input:", str1);
console.log("Output:", toggleSecondCharacter(str1));


// Input 2
let str2: string = "MY NAME IS ASHWINI";

console.log("Input:", str2);
console.log("Output:", toggleSecondCharacter(str2));



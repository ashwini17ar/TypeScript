function toggleSecondCharacternew(str: string): string {
    let result: string = "";
    let count: number = 0;

    str.split("").forEach((ch) => {

        if (ch === " ") {
            result = result + ch;
            count = 0;
        }
        else {
            count++;

            if (count === 2) {

                if (ch >= 'a' && ch <= 'z') {
                    result = result + ch.toUpperCase();
                }
                else if (ch >= 'A' && ch <= 'Z') {
                    result = result + ch.toLowerCase();
                }
                else {
                    result = result + ch;
                }

            }
            else {
                result = result + ch;
            }
        }
    });

    return result;
}

let input1: string = "My Name is Ahwini";
let input2: string = "MY NAME IS ASHWINI";

console.log("Input:", input1);
console.log("Output:", toggleSecondCharacter(input1));

console.log("Input:", input2);
console.log("Output:", toggleSecondCharacter(input2));

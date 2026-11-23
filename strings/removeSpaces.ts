function removeSpaces(str: string): string {
    let result = "";

    for (let i = 0; i < str.length; i++) {
        if (str[i] !== " ") {
            result = result + str[i];
        }
    }
    return result;
}


console.log(removeSpaces("Hello World! This is a test."));
function countDigits(num: number): number {

    let count = 0;

    while (num > 0) {
        num = Math.floor(num / 10);
        count++;
    }

    return count;
}

console.log(countDigits(123));

function countDigitsLength(num: number): number {
    return num.toString().length;
}

console.log(countDigitsLength(12345));
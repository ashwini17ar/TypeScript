function reverseInteger(num: number): number {
    let rev = 0;

    while (num > 0) {
        let digit = num % 10;
        rev = rev * 10 + digit;
        num = Math.floor(num / 10);//Math.floor() removes the decimal part by rounding down to the nearest whole number.
    }

    return rev;
}

console.log(reverseInteger(12345));
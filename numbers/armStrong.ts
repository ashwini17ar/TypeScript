function isArmstrong(num: number): boolean {
    let str = num.toString();
    let n = str.length;
    let sum = 0;

    for (let ch of str) {
        console.log(ch);
        sum =sum + Math.pow(Number(ch), n);
    }

    return sum === num;
}

console.log(isArmstrong(153));
console.log(isArmstrong(123));
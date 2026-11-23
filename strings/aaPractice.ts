let num = [1,2,3,4]

console.log(num)

num.push(10);
console.log(num)

console.log('################################################')

let newNum = ['ff', 'cc', 'aa', 'bb']

console.log(newNum)

newNum.unshift('FFA');

console.log(newNum)
console.log('################################################')

let str = ['a', 'b', 'c', 'd'];
console.log(str.slice(-2));

console.log("hi my dear".concat(" friend"))

console.log('9'.padStart(5, '0'))
console.log('9'.padStart(5, '0'))

let names = ["a", "b", "c"]
let newres = names.map((e) => e.toUpperCase());
console.log(newres)
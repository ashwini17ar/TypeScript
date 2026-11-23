let arr = [10, 25, 8, 40, 30];

let largest = arr[0];
let secondLargest = arr[0];

for (let i = 1; i < arr.length; i++) {

    if (arr[i] > largest) {
        secondLargest = largest;
        largest = arr[i];
    }

    else if (arr[i] > secondLargest && arr[i] != largest) {
        secondLargest = arr[i];
    }
}

console.log("Largest =", largest);
console.log("Second Largest =", secondLargest);
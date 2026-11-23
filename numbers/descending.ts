function sortDescending(arr: number[]): number[] {
    arr.sort((a, b) => b - a);
    return arr;
}

let resultDescending = sortDescending([1, 3, 6,0, 30, 20, 5, 40]);

console.log(resultDescending);

console.log('********************************************');

function sortDescendingArray(arr:number[]):number[] {

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {

            if (arr[i] < arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }

        }
    }

    return arr;
}



let arryResult = sortDescendingArray([10, 30, 20, 5, 40]);

console.log(arryResult);
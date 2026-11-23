function sortAscending(arr: number[]): number[] {
    arr.sort((a, b) => a - b);
    return arr;
}

let result = sortAscending([10, 30, 20, 5, 40]);

console.log(result);

console.log('********************************************');

function sortAscendingArray(arr:number[]):number[] {

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {

            if (arr[i] > arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }

        }
    }

    return arr;
}



let arryrResult = sortAscendingArray([10, 30, 20, 5, 40]);

console.log(arryrResult);
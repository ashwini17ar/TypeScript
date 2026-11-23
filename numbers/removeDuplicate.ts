function removeDuplicates(arr: number[]): number[] {

    let result: number[] = [];

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] !== arr[i + 1]) {
            result.push(arr[i]);
        }
    }

    return result;
}

console.log(removeDuplicates([1, 1, 2, 2, 3, 4, 4, 5]));

function removeDuplicates2(arr: number[]) {

    let j = 0;

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] !== arr[i + 1]) {
            arr[j] = arr[i];
            j++;
        }
    }

    return arr.slice(0, j);
}



console.log(removeDuplicates2([1, 1, 5,5,8,8,8,2, 2, 3, 4, 4, 5]));

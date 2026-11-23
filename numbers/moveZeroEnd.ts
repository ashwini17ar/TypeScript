function moveZeros(arr: number[]) {

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] === 0) {

            for (let j = i + 1; j < arr.length; j++) {

                if (arr[j] !== 0) {

                    let temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;

                    break;
                }
            }
        }
    }

    return arr;
}

console.log(moveZeros([1, 0, 2, 0, 3, 4, 0]));
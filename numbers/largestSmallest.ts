function findMinMax(arr: number[]) {
    

    let min = arr[0];
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];       
        }

        if (arr[i] > max) {
            max = arr[i];       
        }    
     }

            console.log("Smallest:",min);
            console.log("Largest:", max);
    }

findMinMax([10, 5, 8, 20, 3, -105]);

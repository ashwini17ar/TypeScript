function arraySorted() {
    let arr = [10, 30, 40, 3];
    let isSorted = true;

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            isSorted = false;
            break;
        }
    }

    console.log(isSorted ? "Sorted" : "Not Sorted");
}

 arraySorted() ;
    
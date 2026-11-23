function primeInRange(start: number, end: number) {

    for (let i = start; i <= end; i++) {

        let isPrime = true;

       // if (i <= 1) continue;

        console.log('Printing i:', i)
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }   

        if (isPrime) {
            console.log(i);
        }
    }
}

primeInRange(1, 20);
function printFibonacci(n: number): void {
    let a = 0;
    let b = 1;

    for (let i = 0; i < n; i++) {
        console.log(a);
        const next = a + b;
        a = b;
        b = next;
    }
}

printFibonacci(6);

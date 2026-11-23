function swap(a: number, b: number) {

    let temp: number;

    temp = a;
    a = b;
    b = temp;

    console.log("a =", a);
    console.log("b =", b);
}

swap(10, 20);

function swapNo(a: number, b: number) {
    [a, b] = [b, a];
    console.log(a, b);
}

swap(50, 5);
function characterFrequency(str: string): Map<string, number> {
    let frequency = new Map<string, number>();

    for (let char of str) {
        if (frequency.has(char)) {
            frequency.set(char, frequency.get(char)! + 1);
        } else {
            frequency.set(char, 1);
        }
    }
    return frequency;
}


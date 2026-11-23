function firstNonRepeating(str: string): string | null {
    let frequency = new Map<string, number>();

    // Step 1: Count frequency
    for (let char of str) {
        if (frequency.has(char)) {
            frequency.set(char, frequency.get(char)! + 1);
        } else {
            frequency.set(char, 1);
        }
    }

    // Step 2: Find first character with frequency 1
    for (let char of str) {
        if (frequency.get(char) === 1) {
            return char;
        } else {
            continue;
        }
    }

    return null;
}

console.log(firstNonRepeating("swiss"));  // w
console.log(firstNonRepeating("aabb"));   // null
console.log(firstNonRepeating("hello"));  // h


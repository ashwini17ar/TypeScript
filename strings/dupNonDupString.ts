function checkDuplicates(str: string) {
    const count: any = {};

    // Count characters
    for (const ch of str) {
        count[ch] = (count[ch] || 0) + 1;
    }

    // Check duplicates
    for (const ch in count) {
        if (count[ch] > 1) {
            console.log("Duplicate:", ch);
        } else {
            console.log("Non-duplicate:", ch);
        }
    }

    return count;
}

console.log(checkDuplicates("hello"));
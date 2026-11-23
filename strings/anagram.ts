//An anagram means two strings have the same characters in the same frequency, just in different order.

function isAnagram(str1: string, str2: string): boolean {
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();

    if (str1.length !== str2.length) 
    return false;

    let sorted1 = str1.split("").sort().join("");
    let sorted2 = str2.split("").sort().join("");

    return sorted1 === sorted2;
}

console.log(isAnagram("listen", "silent"));
console.log(isAnagram("ten", "net"));
console.log(isAnagram("listen", "list"));

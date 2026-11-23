function firstNonRepeatingChar(str: string): string | null {
  const count: Record<string, number> = {};

  // Count each character
  for (const char of str) {
    count[char] = (count[char] || 0) + 1;
  }

  // Find the first character that appears only once
  for (let i = 0; i < str.length; i++) {
    if (count[str[i]] === 1) {
      return str[i];
    }
  }

  return null;
}

console.log(firstNonRepeatingChar("swiss")); // "w"
console.log(firstNonRepeatingChar("aabbcc")); // null

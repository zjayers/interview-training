/**
 * Solution 1: Use Pointers
 * @param {string} str Input string
 * @returns {boolean} Is string a palindrome?
 */
export const isPalindrome = (str) => {
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
};

/**
 * Solution 2: Use Array Reverse
 * @param {string} str Input string
 * @returns {boolean} Is string a palindrome?
 */
export const isPalindromeCompare = (str) =>
  str === str.split("").reverse().join("");

/**
 * Solution 3: Use Array Every Check
 * @param {string} str Input string
 * @returns {boolean} Is string a palindrome?
 */
export const isPalindromeEveryCheck = (str) =>
  str.split("").every((val, i) => val === str[str.length - 1 - i]);

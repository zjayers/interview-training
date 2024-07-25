/**
 * Solution 1: Split, Reverse, and Join
 * @param {string} str Input string
 * @returns {string} Reversed input string
 */
export const reverseString = (str) => str.split("").reverse().join("");

/**
 * Solution 2: String Builder
 * @param {string} str Input string
 * @returns {string} Reversed input string
 */
export const reverseStringBuilder = (str) => {
  let reverse = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
  }
  return reverse;
};

/**
 * Solution 3: String Builder (For Of)
 * @param {string} str Input string
 * @returns {string} Reversed input string
 */
export const reverseStringBuilderForOf = (str) => {
  let reverse = "";
  for (let char of str) {
    reverse = char + reverse;
  }
  return reverse;
};

/**
 * Solution 4: Array Reduce
 * @param {string} str Input string
 * @returns {string} Reversed input string
 */
export const reverseStringByReduce = (str) =>
  str.length === 0
    ? ""
    : str.split("").reduce((reverse, char) => (reverse = char + reverse));

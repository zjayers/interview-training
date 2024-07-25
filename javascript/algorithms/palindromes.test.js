import {
  isPalindrome,
  isPalindromeCompare,
  isPalindromeEveryCheck,
} from "./palindromes";

describe("palindromes tests", () => {
  describe("isPalindrome", () => {
    // Tests with palindromes
    test('returns true for "racecar"', () => {
      expect(isPalindrome("racecar")).toBe(true);
    });

    test('returns true for "level"', () => {
      expect(isPalindrome("level")).toBe(true);
    });

    test('returns true for "deleveled"', () => {
      expect(isPalindrome("deleveled")).toBe(true);
    });

    test('returns true for "rotator"', () => {
      expect(isPalindrome("rotator")).toBe(true);
    });

    test('returns true for "madam"', () => {
      expect(isPalindrome("madam")).toBe(true);
    });

    test('returns true for "kayak"', () => {
      expect(isPalindrome("kayak")).toBe(true);
    });

    test('returns true for "reviver"', () => {
      expect(isPalindrome("reviver")).toBe(true);
    });

    test('returns true for "detartrated"', () => {
      expect(isPalindrome("detartrated")).toBe(true);
    });

    test('returns true for "solos"', () => {
      expect(isPalindrome("solos")).toBe(true);
    });

    test('returns true for "redder"', () => {
      expect(isPalindrome("redder")).toBe(true);
    });

    // Tests with non-palindromes
    test('returns false for "hello"', () => {
      expect(isPalindrome("hello")).toBe(false);
    });

    test('returns false for "world"', () => {
      expect(isPalindrome("world")).toBe(false);
    });

    test('returns false for "javascript"', () => {
      expect(isPalindrome("javascript")).toBe(false);
    });

    test('returns false for "programming"', () => {
      expect(isPalindrome("programming")).toBe(false);
    });

    test('returns false for "algorithm"', () => {
      expect(isPalindrome("algorithm")).toBe(false);
    });

    test('returns false for "computer"', () => {
      expect(isPalindrome("computer")).toBe(false);
    });

    test('returns false for "science"', () => {
      expect(isPalindrome("science")).toBe(false);
    });

    test('returns false for "technology"', () => {
      expect(isPalindrome("technology")).toBe(false);
    });

    test('returns false for "development"', () => {
      expect(isPalindrome("development")).toBe(false);
    });

    test('returns false for "software"', () => {
      expect(isPalindrome("software")).toBe(false);
    });
  });

  describe("isPalindromeCompare", () => {
    // Tests with palindromes
    test('returns true for "racecar"', () => {
      expect(isPalindromeCompare("racecar")).toBe(true);
    });

    test('returns true for "level"', () => {
      expect(isPalindromeCompare("level")).toBe(true);
    });

    test('returns true for "deleveled"', () => {
      expect(isPalindromeCompare("deleveled")).toBe(true);
    });

    test('returns true for "rotator"', () => {
      expect(isPalindromeCompare("rotator")).toBe(true);
    });

    test('returns true for "madam"', () => {
      expect(isPalindromeCompare("madam")).toBe(true);
    });

    test('returns true for "kayak"', () => {
      expect(isPalindromeCompare("kayak")).toBe(true);
    });

    test('returns true for "reviver"', () => {
      expect(isPalindromeCompare("reviver")).toBe(true);
    });

    test('returns true for "detartrated"', () => {
      expect(isPalindromeCompare("detartrated")).toBe(true);
    });

    test('returns true for "solos"', () => {
      expect(isPalindromeCompare("solos")).toBe(true);
    });

    test('returns true for "redder"', () => {
      expect(isPalindromeCompare("redder")).toBe(true);
    });

    // Tests with non-palindromes
    test('returns false for "hello"', () => {
      expect(isPalindromeCompare("hello")).toBe(false);
    });

    test('returns false for "world"', () => {
      expect(isPalindromeCompare("world")).toBe(false);
    });

    test('returns false for "javascript"', () => {
      expect(isPalindromeCompare("javascript")).toBe(false);
    });

    test('returns false for "programming"', () => {
      expect(isPalindromeCompare("programming")).toBe(false);
    });

    test('returns false for "algorithm"', () => {
      expect(isPalindromeCompare("algorithm")).toBe(false);
    });

    test('returns false for "computer"', () => {
      expect(isPalindromeCompare("computer")).toBe(false);
    });

    test('returns false for "science"', () => {
      expect(isPalindromeCompare("science")).toBe(false);
    });

    test('returns false for "technology"', () => {
      expect(isPalindromeCompare("technology")).toBe(false);
    });

    test('returns false for "development"', () => {
      expect(isPalindromeCompare("development")).toBe(false);
    });

    test('returns false for "software"', () => {
      expect(isPalindromeCompare("software")).toBe(false);
    });
  });

  describe("isPalindromeEveryCheck", () => {
    // Tests with palindromes
    test('returns true for "racecar"', () => {
      expect(isPalindromeEveryCheck("racecar")).toBe(true);
    });

    test('returns true for "level"', () => {
      expect(isPalindromeEveryCheck("level")).toBe(true);
    });

    test('returns true for "deleveled"', () => {
      expect(isPalindromeEveryCheck("deleveled")).toBe(true);
    });

    test('returns true for "rotator"', () => {
      expect(isPalindromeEveryCheck("rotator")).toBe(true);
    });

    test('returns true for "madam"', () => {
      expect(isPalindromeEveryCheck("madam")).toBe(true);
    });

    test('returns true for "kayak"', () => {
      expect(isPalindromeEveryCheck("kayak")).toBe(true);
    });

    test('returns true for "reviver"', () => {
      expect(isPalindromeEveryCheck("reviver")).toBe(true);
    });

    test('returns true for "detartrated"', () => {
      expect(isPalindromeEveryCheck("detartrated")).toBe(true);
    });

    test('returns true for "solos"', () => {
      expect(isPalindromeEveryCheck("solos")).toBe(true);
    });

    test('returns true for "redder"', () => {
      expect(isPalindromeEveryCheck("redder")).toBe(true);
    });

    // Tests with non-palindromes
    test('returns false for "hello"', () => {
      expect(isPalindromeEveryCheck("hello")).toBe(false);
    });

    test('returns false for "world"', () => {
      expect(isPalindromeEveryCheck("world")).toBe(false);
    });

    test('returns false for "javascript"', () => {
      expect(isPalindromeEveryCheck("javascript")).toBe(false);
    });

    test('returns false for "programming"', () => {
      expect(isPalindromeEveryCheck("programming")).toBe(false);
    });

    test('returns false for "algorithm"', () => {
      expect(isPalindromeEveryCheck("algorithm")).toBe(false);
    });

    test('returns false for "computer"', () => {
      expect(isPalindromeEveryCheck("computer")).toBe(false);
    });

    test('returns false for "science"', () => {
      expect(isPalindromeEveryCheck("science")).toBe(false);
    });

    test('returns false for "technology"', () => {
      expect(isPalindromeEveryCheck("technology")).toBe(false);
    });

    test('returns false for "development"', () => {
      expect(isPalindromeEveryCheck("development")).toBe(false);
    });

    test('returns false for "software"', () => {
      expect(isPalindromeEveryCheck("software")).toBe(false);
    });
  });
});

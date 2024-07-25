import {
  reverseString,
  reverseStringBuilder,
  reverseStringBuilderForOf,
  reverseStringByReduce,
} from "./string-reversal";

describe("string-reversal tests", () => {
  describe("reverseString", () => {
    test("reverses an empty string correctly", () => {
      expect(reverseString("")).toBe("");
    });

    test("reverses a single character string correctly", () => {
      expect(reverseString("a")).toBe("a");
    });

    test("reverses a string with even number of characters correctly", () => {
      expect(reverseString("abcd")).toBe("dcba");
    });

    test("reverses a string with odd number of characters correctly", () => {
      expect(reverseString("abc")).toBe("cba");
    });

    test("reverses a string with mixed characters correctly", () => {
      expect(reverseString("Hello, World!")).toBe("!dlroW ,olleH");
    });
  });

  describe("reverseStringBuilder", () => {
    test("reverses an empty string correctly", () => {
      expect(reverseStringBuilder("")).toBe("");
    });

    test("reverses a single character string correctly", () => {
      expect(reverseStringBuilder("a")).toBe("a");
    });

    test("reverses a string with even number of characters correctly", () => {
      expect(reverseStringBuilder("abcd")).toBe("dcba");
    });

    test("reverses a string with odd number of characters correctly", () => {
      expect(reverseStringBuilder("abc")).toBe("cba");
    });

    test("reverses a string with mixed characters correctly", () => {
      expect(reverseStringBuilder("Hello, World!")).toBe("!dlroW ,olleH");
    });
  });

  describe("reverseStringBuilderForOf", () => {
    test("reverses an empty string correctly", () => {
      expect(reverseStringBuilderForOf("")).toBe("");
    });

    test("reverses a single character string correctly", () => {
      expect(reverseStringBuilderForOf("a")).toBe("a");
    });

    test("reverses a string with even number of characters correctly", () => {
      expect(reverseStringBuilderForOf("abcd")).toBe("dcba");
    });

    test("reverses a string with odd number of characters correctly", () => {
      expect(reverseStringBuilderForOf("abc")).toBe("cba");
    });

    test("reverses a string with mixed characters correctly", () => {
      expect(reverseStringBuilderForOf("Hello, World!")).toBe("!dlroW ,olleH");
    });
  });

  describe("reverseStringByReduce", () => {
    test("reverses an empty string correctly", () => {
      expect(reverseStringByReduce("")).toBe("");
    });

    test("reverses a single character string correctly", () => {
      expect(reverseStringByReduce("a")).toBe("a");
    });

    test("reverses a string with even number of characters correctly", () => {
      expect(reverseStringByReduce("abcd")).toBe("dcba");
    });

    test("reverses a string with odd number of characters correctly", () => {
      expect(reverseStringByReduce("abc")).toBe("cba");
    });

    test("reverses a string with mixed characters correctly", () => {
      expect(reverseStringByReduce("Hello, World!")).toBe("!dlroW ,olleH");
    });
  });
});

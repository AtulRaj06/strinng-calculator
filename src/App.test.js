const sum = (numbers) => {
  // If the input string is empty, return 0
  if (numbers === "") {
    return 0;
  }

  let delimiter = ",";
  let numbersToProcess = numbers;

  // Check if the string contains a custom delimiter
  if (numbers.startsWith("//")) {
    const delimiterMatch = numbers.match(/^\/\/(.)\n/);
    if (delimiterMatch) {
      delimiter = delimiterMatch[1];
      numbersToProcess = numbers.slice(3 + delimiter.length);
    } else {
      const multiDelimiterMatch = numbers.match(/^\/\/\[(.*?)\]\n/);
      if (multiDelimiterMatch) {
        delimiter = multiDelimiterMatch[1];
        numbersToProcess = numbers.slice(4 + delimiter.length);
      }
    }
  }

  // Replace new lines and commas with the chosen delimiter
  numbersToProcess = numbersToProcess
    .replace(/\n/g, delimiter)
    .replace(/,/g, delimiter);

  // Split the numbers by the delimiter
  const numArray = numbersToProcess.split(delimiter);

  // Check for negative numbers
  const negatives = numArray.filter((num) => parseInt(num) < 0);
  if (negatives.length > 0) {
    return ("Negative numbers not allowed <negative_number>");
  }

  // Sum and return the result
  return numArray.reduce((sum, num) => sum + parseInt(num), 0);
};

describe("sum function", () => {
  it("should return sum", () => {
    expect(sum("1,2,3,4")).toBe(10);
  });

  it("should return sum if string empty", () => {
    expect(sum("")).toBe(0);
  });

  it("should return error in negetive num", () => {
    expect(sum("1,-9")).toBe("Negative numbers not allowed <negative_number>");
  });

  it("should return error in negetive num", () => {
    expect(sum("1\n2,3")).toBe(6);
  });

  it("should change delimeter", () => {
    expect(sum("//;\n1;2")).toBe(3);
  });
});

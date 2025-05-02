const Calculator = require("./calculator");

describe("Calculator", () => {
  let calc;

  beforeEach(() => {
    calc = new Calculator();
  });

  test("adds two numbers correctly", () => {
    expect(calc.add(2, 3)).toBe(5);
  });

  test("subtracts two numbers correctly", () => {
    expect(calc.subtract(5, 3)).toBe(2);
  });

  test("multiplies two numbers correctly", () => {
    expect(calc.multiply(4, 3)).toBe(12);
  });

  test("divides two numbers correctly", () => {
    expect(calc.divide(6, 2)).toBe(3);
  });

  test("throws error when dividing by zero", () => {
    expect(() => calc.divide(6, 0)).toThrow("Division by zero is not allowed");
  });
});

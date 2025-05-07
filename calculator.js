class Calculator {
  constructor() {
    this.memory = 0;
  }

  add(a, b) {
    return a + b;
  }

  pow(a, b) {
    return Math.pow(a, b);
  }

  subtract(a, b) {
    return a - b;
  }

  multiply(a, b) {
    return a * b;
  }

  divide(a, b) {
    if (b === 0) {
      throw new Error("Division by zero is not allowed");
    }
    return a / b;
  }

  setMemory(value) {
    this.memory = value;
  }

  getMemory() {
    return this.memory;
  }
}

module.exports = Calculator;

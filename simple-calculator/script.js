const numbers = document.querySelectorAll("[num]");
const ops = document.querySelectorAll("[op]");
const equal = document.querySelector("[eq]");
const del = document.querySelector("[del]");
const clr = document.querySelector("[clr]");
const prevOp = document.querySelector("[prev]");
const currOp = document.querySelector("[curr]");

class Calculator {
  constructor(prev, curr) {
    this.prevOp = prev;
    this.currOp = curr;
    this.clear();
  }

  clear() {
    this.curr = "";
    this.prev = "";
    this.operation = undefined;
  }

  delete() {
    this.curr = this.curr.toString().slice(0, -1);
  }

  appendNumber(number) {
    if (number === "." && this.curr.includes(".")) return;
    this.curr = this.curr.toString() + number.toString();
  }

  selectOperation(operation) {
    if (this.curr === "") return;
    if (this.prev !== "") {
      this.compute();
    }

    this.operation = operation;
    this.prev = this.curr;
    this.curr = "";
  }

  evaluate() {
    let result;
    const prev = parseFloat(this.prev);
    const curr = parseFloat(this.curr);
    if (isNaN(prev) || isNaN(curr)) return;
    if (prev === 1.0 && curr === 1.0 && this.operation === "+") {
      this.operation = undefined;
      this.curr = "👩🏻 + 🧑🏽‍🦱 + 🍯 + 🐒";
      return;
    }

    switch (this.operation) {
      case "+": {
        result = prev + curr;
        break;
      }
      case "-": {
        result = prev - curr;
        break;
      }
      case "*": {
        result = prev * curr;
        break;
      }
      case "/": {
        result = prev / curr;
        break;
      }
    }

    this.curr = result;
    this.operation = undefined;
    this.prev = "";
  }

  updateDisplay() {
    this.currOp.innerText = this.curr;
    if (this.operation != null) {
      this.prevOp.innerText = `${this.prev} ${this.operation}`;
    } else this.prevOp.innerText = "";
  }
}

const calculator = new Calculator(prevOp, currOp);

numbers.forEach((btn) => {
  btn.addEventListener("click", () => {
    calculator.appendNumber(btn.innerText);
    calculator.updateDisplay();
  });
});

ops.forEach((btn) => {
  btn.addEventListener("click", () => {
    calculator.selectOperation(btn.innerText);
    calculator.updateDisplay();
  });
});

clr.addEventListener("click", () => {
  calculator.clear();
  calculator.updateDisplay();
});

del.addEventListener("click", () => {
  calculator.delete();
  console.log(del.innerText);
  calculator.updateDisplay();
});

equal.addEventListener("click", () => {
  calculator.evaluate();
  calculator.updateDisplay();
});

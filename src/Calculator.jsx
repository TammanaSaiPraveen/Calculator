import React, { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [input, setInput] = useState("");  // Stores the user input
  const [output, setOutput] = useState("");  // Stores the result

  // When a button is clicked, add that value to the input
  const handleClick = (value) => {
    setInput(input + value);
  };

  // To calculate the result
  const handleResult = () => {
    try {
      setOutput(calculateResult(input));  // Call the function to get the result
    } catch (e) {
      setOutput("Error");  // If something goes wrong, show "Error"
    }
  };

  // Clears the input and output
  const handleClear = () => {
    setInput("");
    setOutput("");
  };

  // Removes the last character in the input
  const handleBackspace = () => {
    setInput(input.slice(0, -1));
  };

  // This function safely calculates the result
  const calculateResult = (expression) => {
    // Remove anything that's not a number or valid operator
    const sanitizedExpression = expression
      .replace(/[^-()\d/*+.]/g, '') // Only allow numbers and operators
      .replace(/([+\-*/])\1+/g, '$1') // Remove consecutive operators like ++
      .replace(/^\+|\+$/g, ''); // Remove leading or trailing plus signs
    
    // Calculate and return the result
    return new Function('return ' + sanitizedExpression)();
  };

  return (
    <div className="calculator">
      <div className="display">
        <div className="input">{input}</div>
        <div className="output">{output}</div>
      </div>
      <div className="buttons">
        <button className="clear" onClick={handleClear}>AC</button>
        <button className="backspace" onClick={handleBackspace}>⌫</button>
        <button onClick={() => handleClick("/")}>÷</button>
        <button onClick={() => handleClick("*")}>×</button>
        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("9")}>9</button>
        <button onClick={() => handleClick("-")}>-</button>
        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>
        <button onClick={() => handleClick("+")}>+</button>
        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("3")}>3</button>
        <button onClick={() => handleClick("0")}>0</button>
        <button onClick={() => handleClick(".")}>.</button>
        <button onClick={handleResult}>=</button>
      </div>
    </div>
  );
};

export default Calculator;

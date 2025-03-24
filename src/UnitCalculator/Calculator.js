import React, { useState } from "react";
import { motion } from "framer-motion";

const Calculator = ({ isOpen, setIsOpen }) => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleButtonClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleKeyPress = (event) => {
    const { key } = event;

    if (/^[0-9+\-*/.=]$/.test(key)) {
      handleButtonClick(key);
    } else if (key === "Enter") {
      calculateResult();
    } else if (key === "Backspace") {
      setInput((prev) => prev.slice(0, -1));
    }
  };

  const clearInput = () => {
    setInput("");
    setResult("");
  };

  const calculateResult = () => {
    try {
      setResult(new Function(`return ${input}`)().toString());
    } catch {
      setResult("Error");
    }
  };

  return (
    <motion.div
      className="fixed bottom-16 right-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 w-80"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <h2 className="text-xl font-bold mb-2 text-center">General Calculator</h2>
      <input
        type="text"
        className="w-full p-2 border rounded mb-2 text-center dark:bg-gray-700 dark:text-white"
        value={input}
        readOnly
        onKeyDown={handleKeyPress}
        autoFocus
      />
      <div className="grid grid-cols-4 gap-2">
        {[7, 8, 9, "/"].map((item) => (
          <button
            key={item}
            onClick={() => handleButtonClick(item)}
            className="p-3 bg-gray-200 rounded dark:bg-gray-600"
          >
            {item}
          </button>
        ))}
        {[4, 5, 6, "*"].map((item) => (
          <button
            key={item}
            onClick={() => handleButtonClick(item)}
            className="p-3 bg-gray-200 rounded dark:bg-gray-600"
          >
            {item}
          </button>
        ))}
        {[1, 2, 3, "-"].map((item) => (
          <button
            key={item}
            onClick={() => handleButtonClick(item)}
            className="p-3 bg-gray-200 rounded dark:bg-gray-600"
          >
            {item}
          </button>
        ))}
        {[0, ".", "=", "+"].map((item) => (
          <button
            key={item}
            onClick={() =>
              item === "=" ? calculateResult() : handleButtonClick(item)
            }
            className="p-3 bg-gray-200 rounded dark:bg-gray-600"
          >
            {item}
          </button>
        ))}
      </div>
      <button
        onClick={clearInput}
        className="w-full mt-2 p-2 bg-red-500 text-white rounded"
      >
        Clear
      </button>
      {result && (
        <p className="mt-2 text-center font-bold">Result: {result}</p>
      )}
    </motion.div>
  );
};

export default Calculator;
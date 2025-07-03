import React, { useState } from "react";
import { motion } from "framer-motion";

const FormulaFinder = ({ title, variables, formulas }) => {
  const [selectedVariables, setSelectedVariables] = useState([]);
  const [inputs, setInputs] = useState({});
  const [applicableFormulas, setApplicableFormulas] = useState([]);
  const [selectedFormula, setSelectedFormula] = useState(null);
  const [result, setResult] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const toggleVariableSelection = (variable) => {
    if (selectedVariables.includes(variable)) {
      setSelectedVariables(selectedVariables.filter((v) => v !== variable));
      // Remove the input value when deselected
      const newInputs = { ...inputs };
      delete newInputs[variable];
      setInputs(newInputs);
    } else {
      setSelectedVariables([...selectedVariables, variable]);
    }
  };

  const handleInputChange = (variable, value) => {
    const updatedInputs = { ...inputs, [variable]: parseFloat(value) };
    setInputs(updatedInputs);

    const matchedFormulas = formulas.filter((formula) => {
      const hasRequired = formula.required.every(
        (req) => updatedInputs[req] !== undefined && !isNaN(updatedInputs[req])
      );
      const hasExcluded = formula.exclude
        ? formula.exclude.every(
            (ex) => updatedInputs[ex] === undefined || isNaN(updatedInputs[ex])
          )
        : true;

      return hasRequired && hasExcluded;
    });

    setApplicableFormulas(matchedFormulas);
    setSelectedFormula(null);
    setResult(null);
  };

  const calculateResult = () => {
    if (!selectedFormula) return;
    setResult(selectedFormula.compute(inputs).toFixed(2));
    setShowResult(true);
  };

  return (
    <div className="p-6 min-h-fit bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-center text-green-600 dark:text-green-400">
        {title}
      </h1>

      <div className="mb-6 bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-4">Select Variables:</h2>
        <div className="flex flex-wrap gap-2 mb-4">
          {variables.map((variable) => (
            <button
              key={variable}
              className={`px-3 py-1 rounded-md transition ${
                selectedVariables.includes(variable)
                  ? "bg-green-500 text-white"
                  : "bg-gray-200 dark:bg-gray-700"
              }`}
              onClick={() => toggleVariableSelection(variable)}
            >
              {variable}
            </button>
          ))}
        </div>

        {selectedVariables.length > 0 && (
          <>
            <h2 className="text-xl font-semibold mb-4">
              প্রয়োজনীয় মান প্রদান কর:
            </h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {selectedVariables.map((variable) => (
                <div key={variable}>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    {variable}:
                  </label>
                  <input
                    type="number"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white"
                    onChange={(e) =>
                      handleInputChange(variable, e.target.value)
                    }
                    value={inputs[variable] || ""}
                  />
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Rest of your component remains the same */}
      {applicableFormulas.length > 0 && (
        <div className="mb-6 bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6">
          <h2 className="text-lg font-semibold text-green-700 dark:text-green-300">
            সম্ভাব্য সূত্র:
          </h2>
          <div className="flex flex-wrap gap-3 mt-3">
            {applicableFormulas.map((formula) => (
              <button
                key={formula.formula}
                className={`px-4 py-2 rounded-lg transition duration-200 ${
                  selectedFormula?.formula === formula.formula
                    ? "bg-green-500 text-white"
                    : "bg-gray-300 dark:bg-gray-700"
                }`}
                onClick={() => setSelectedFormula(formula)}
              >
                {formula.formula}
              </button>
            ))}
          </div>
        </div>
      )}

      {selectedFormula && (
        <button
          className="w-full px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-200"
          onClick={calculateResult}
        >
          Calculate
        </button>
      )}

      {showResult && result !== null && (
        <motion.div
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: "30%", opacity: 1 }}
          exit={{ x: "100%", opacity: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          className="fixed top-10 right-1/2 translate-x-2/3 bg-white dark:bg-gray-700 shadow-lg rounded-xl p-6 w-80 z-50"
        >
          <button
            className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded"
            onClick={() => setShowResult(false)}
          >
            ✖
          </button>
          <h2 className="text-xl font-semibold">Result:</h2>
          <p className="text-lg text-pink-500">
            Calculation Result: <br />
            <span className="font-extrabold text-green-600 dark:text-green-400">
              {result}
            </span>
          </p>
        </motion.div>
      )}
    </div>
  );
};

export default FormulaFinder;

import React, { useState } from "react";
import { motion } from "framer-motion";
import { formatResultNumber } from "../../commonLogics/formatResult/resultShowingFormating";

const FormulaFinder = ({ title, variables, formulas }) => {
  const [selectedVariables, setSelectedVariables] = useState([]);
  const [inputs, setInputs] = useState({});
  const [applicableFormulas, setApplicableFormulas] = useState([]);
  const [selectedFormula, setSelectedFormula] = useState(null);
  const [result, setResult] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const toggleVariableSelection = (variable) => {
    console.log(variable, "variable on toggle");
    if (selectedVariables.includes(variable)) {
      console.log(variable, "variable on if condition by includes");
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
      // console.log(formulas, "formulas");
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
  console.log(applicableFormulas, "applicable Formulas");
  // const calculateResult = () => {
  //   if (!selectedFormula) return;
  //   setResult(selectedFormula.compute(inputs).toFixed(2));
  //   setShowResult(true);
  // };
  const calculateResult = () => {
    if (!selectedFormula) return;

    try {
      const computedResult = selectedFormula.compute(inputs);
      if (isNaN(computedResult)) {
        throw new Error("Invalid calculation result");
      }
      setResult(computedResult.toFixed(2));
      setShowResult(true);
    } catch (error) {
      console.error("Calculation error:", error);
      // You might want to show an error message to the user here
    }
  };

  return (
    <div className="p-6 min-h-fit bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-center text-green-600 dark:text-green-400">
        {title}
      </h1>

      <div className="mb-6 bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-4">
          তোমার প্রশ্নে কোন কোন মান উল্লেখ করা আছে তা সিলেক্ট কর। 🙄
        </h2>
        <div>
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
          <div className="flex flex-col text-start">
            <li> u = আদিবেগ</li>
            <li> s = অতিক্রান্ত দূরত্ব</li>
            <li>v = শেষবেগ, </li>
            <li> a = ত্বরণ, </li>
            <li>t = সময়</li>
          </div>
        </div>

        {selectedVariables.length > 0 && (
          <>
            <h2 className="text-xl font-semibold mb-4">
              নিচের বক্সে নির্ধারিত মান বসাও
            </h2>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {selectedVariables.map((variable) => {
                // Find the first formula that has metadata for this variable
                const formulaWithVar = formulas.find(
                  (f) => f.variables && f.variables[variable]
                );
                const varData = formulaWithVar?.variables[variable];

                return (
                  <div key={variable}>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      {varData?.label || variable}:
                    </label>
                    <div className="relative mt-1">
                      <input
                        type="number"
                        className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white"
                        onChange={(e) =>
                          handleInputChange(variable, e.target.value)
                        }
                        value={inputs[variable] || ""}
                        placeholder={varData?.placeholder || ""}
                      />
                      {varData?.unit && (
                        <span className="absolute right-3 top-2 text-sm text-gray-500 dark:text-gray-400">
                          {varData.unit}
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>

      {/* Rest of your component remains the same */}
      {applicableFormulas.length > 0 && (
        <div className="mb-6 bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6">
          {/* <h2 className="text-lg font-semibold text-green-700 dark:text-green-300">
            নিচে সম্ভাব্য সূত্র উল্লেখ করা হলোঃ
          </h2>
          <p className="text-md text-green-400">
            তোমার কাংখিত সূত্র পেয়ে গেলে উত্তর জানার জন্য সেটির উপর ক্লিক কর।{" "}
          </p> */}
          <div className="flex flex-wrap gap-3 mt-3">
            {/* {applicableFormulas.map((formula) => (
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
            ))} */}
            {applicableFormulas.length > 0 && (
              <div className="mb-6 bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6">
                <h2 className="text-lg font-semibold text-green-700 dark:text-green-300">
                  নিচে সম্ভাব্য সূত্র উল্লেখ করা হলোঃ
                </h2>
                <p className="text-md text-green-400">
                  তোমার কাংখিত সূত্র পেয়ে গেলে উত্তর জানার জন্য সেটির উপর ক্লিক
                  কর।{" "}
                </p>
                <div className="mt-3 space-y-4">
                  {applicableFormulas.map((formula) => {
                    // Find the output variable (first variable not in inputs)
                    const outputVar =
                      formula.required.find(
                        (req) => !(req in inputs) || isNaN(inputs[req])
                      ) || formula.variables
                        ? Object.keys(formula.variables).find(
                            (v) => !(v in inputs) || isNaN(inputs[v])
                          )
                        : null;

                    return (
                      <div
                        key={formula.formula}
                        className={`p-4 rounded-lg transition duration-200 cursor-pointer ${
                          selectedFormula?.formula === formula.formula
                            ? "bg-green-100 dark:bg-green-900 border-2 border-green-500"
                            : "bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
                        }`}
                        onClick={() => setSelectedFormula(formula)}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-lg">
                            {formula.formula}
                          </span>
                          {selectedFormula?.formula === formula.formula && (
                            <span className="text-green-500">✓</span>
                          )}
                        </div>
                        {outputVar && formula.variables?.[outputVar] && (
                          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                            এই সূত্র ব্যবহার করে{" "}
                            <span className="font-bold">
                              {formula.variables[outputVar].label}
                            </span>{" "}
                            নির্ণয় করা যাবে
                          </p>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {selectedFormula && (
        <button
          className="w-full px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-200"
          onClick={calculateResult}
        >
          ফলাফলের জন্য ক্লিক কর
        </button>
      )}
      <>
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

            <h2 className="text-xl font-semibold mb-4">ফলাফল:</h2>

            <div className="space-y-2">
              <p className="text-lg">
                <span className="font-bold">সূত্র:</span>{" "}
                {selectedFormula.formula}
              </p>

              {/* Show all input values with units */}
              {Object.entries(inputs).map(
                ([varName, value]) =>
                  selectedFormula?.variables?.[varName] && (
                    <p
                      key={varName}
                      className="text-sm text-gray-600 dark:text-gray-300"
                    >
                      {selectedFormula.variables[varName].label}: {value}{" "}
                      {selectedFormula.variables[varName].unit}
                    </p>
                  )
              )}

              <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600">
                {/* Dynamically show result with correct unit */}
                {(() => {
                  // Find which variable this formula calculates (the one not in inputs)
                  const calculatedVar = Object.keys(
                    selectedFormula.variables || {}
                  ).find((v) => !(v in inputs) || isNaN(inputs[v]));

                  const unit = calculatedVar
                    ? selectedFormula.variables[calculatedVar]?.unit
                    : "";

                  return (
                    <p className="text-lg font-bold text-green-600 dark:text-green-400">
                      ফলাফল: {formatResultNumber(Number(result))} {unit}
                    </p>
                  );
                })()}
              </div>
            </div>
          </motion.div>
        )}
      </>
    </div>
  );
};

export default FormulaFinder;

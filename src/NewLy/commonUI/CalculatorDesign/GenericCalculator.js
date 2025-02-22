import React from "react";
import { getAllPlaceholderNew } from "../../commonLogics/placeholder/getAllPlaceholderNew";
import { useCalculator } from "../../hooks/useCalculator";


const GenericCalculator = ({ title, variables, lawsDetails }) => {
  const {
    variableToSolve,
    selectedLaw,
    inputValues,
    result,
    handleVariableSelection,
    handleLawSelection,
    handleInputChange,
    calculateResult,
  } = useCalculator(variables, lawsDetails);

  return (
    <div className="p-6 min-h-fit bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-center text-green-600 dark:text-green-400">
        {title}
      </h1>

      {/* Step 1: Select variable to solve */}
      <div className="mb-6 bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-4">
          তুমি কিসের মান নির্ণয় করতে চাও , সেটির সূত্র সিলেক্ট কর:
        </h2>
        <div className="flex flex-wrap gap-3">
          {variables?.map((variable) => (
            <button
              key={variable}
              onClick={() => handleVariableSelection(variable)}
              className={`px-4 py-2 rounded-lg transition duration-200 ${
                variableToSolve === variable
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300 dark:bg-gray-700"
              }`}
            >
              {variable}
            </button>
          ))}
        </div>
      </div>

      {/* Step 2: Display laws for the selected variable */}
      {variableToSolve && (
        <div className="mb-6 bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6">
          <h2 className="text-md font-semibold text-green-700 dark:text-green-300">
            Select Law:
          </h2>
          <div className="flex flex-wrap gap-3 mt-3">
            {lawsDetails[variableToSolve]?.map((law) => (
              <button
                key={law.formula}
                onClick={() => handleLawSelection(law.formula)}
                className={`px-4 py-2 rounded-lg transition duration-200 ${
                  selectedLaw === law.formula
                    ? "bg-green-500 text-white"
                    : "bg-gray-300 dark:bg-gray-700"
                }`}
              >
                {law.formula}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 3: Display input fields for the selected law */}
      {selectedLaw && (
        <div className="mb-6 bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6">
          <h2 className="text-xl font-semibold">Enter Values:</h2>
          <div className="mt-2">
            {lawsDetails[variableToSolve]
              .find((law) => law.formula === selectedLaw)
              .inputs?.map((input) => (
                <div key={input} className="mb-2">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    {input}:
                  </label>
                  <input
                    type="number"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder={getAllPlaceholderNew(input)}
                    onChange={(e) => handleInputChange(input, e.target.value)}
                  />
                </div>
              ))}
          </div>
        </div>
      )}

      {/* Step 4: Calculate and display result */}
      {selectedLaw && (
        <button
          className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-200 w-full"
          onClick={calculateResult}
        >
          Calculate
        </button>
      )}

      {result !== null && (
        <div className="mt-6 bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6">
          <h2 className="text-xl font-semibold">Result:</h2>
          <p className="text-lg text-pink-500">
            {
              lawsDetails[variableToSolve].find((law) => law.formula === selectedLaw)
                .resultInfo
            }{" "}
            <span className="font-extrabold text-green-600 dark:text-green-400">
              {result}
            </span>{" "}
            {
              lawsDetails[variableToSolve].find((law) => law.formula === selectedLaw)
                .unit
            }
          </p>
        </div>
      )}
    </div>
  );
};

export default GenericCalculator;
import React, { useState } from "react";
import {lawsForWorkPowerEnergy} from './lawsForWorkPowerEnergy'
import { formatNumber } from "../../CommonFunctionForAll/formatNumber";

const WorkPowerEnergy = () => {
  const [variableToSolve, setVariableToSolve] = useState("");
  const [selectedLaw, setSelectedLaw] = useState("");
  const [inputValues, setInputValues] = useState({});
  const [result, setResult] = useState(null);

  const variables = ["কাজ", "বিভবশক্তি", "গতিশক্তি"];
  

  const handleVariableSelection = (variable) => {
    setVariableToSolve(variable);
    setSelectedLaw("");
    setInputValues({});
    setResult(null);
  };

  const handleLawSelection = (law) => {
    setSelectedLaw(law);
    setInputValues({});
    setResult(null);
  };

  const handleInputChange = (inputName, value) => {
    setInputValues({
      ...inputValues,
      [inputName]: parseFloat(value),
    });
  };

  const calculateResult = () => {
    const selectedLawData = lawsForWorkPowerEnergy[variableToSolve].find((law) => law.formula === selectedLaw);
    if (!selectedLawData) {
      setResult("Invalid law selection");
      return;
    }
    const { formula, inputs } = selectedLawData;
    const values = inputs?.map((input) => inputValues[input]);
    if (values.includes(undefined)) {
      setResult("Please fill all required fields");
      return;
    }
    let calculatedResult;
    switch (formula) {
      case "কাজ = F x s":
        calculatedResult = (inputValues.F * inputValues.s);
        break;
      case "বিভবশক্তি = m x g x h":
        calculatedResult = (inputValues.m * 9.8 * inputValues.h);
        break;
      case "গতিশক্তি = 1/2 x m x v^2":
        calculatedResult = (0.5 * inputValues.m * inputValues.v ** 2);
        break;
      default:
        calculatedResult = "Invalid formula";
    }

    if (typeof calculatedResult === "number") {
      calculatedResult = formatNumber(calculatedResult);
    }
    setResult(calculatedResult);
  };

  return (
    <div className="p-6 min-h-fit bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-center text-green-600 dark:text-green-400">কাজ, ক্ষমতা , শক্তি অধ্যায়ের গাণিতিক সমস্যার সমাধান</h1>

      <div className="mb-6 bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-4">তুমি কিসের মান নির্নয় করতে চাও?</h2>
        <div className="flex flex-wrap gap-3">
          {variables?.map((variable) => (
            <button
              key={variable}
              onClick={() => handleVariableSelection(variable)}
              className={`px-4 py-2 rounded-lg transition duration-200 ${variableToSolve === variable ? 'bg-blue-500 text-white' : 'bg-gray-300 dark:bg-gray-700'}`}
            >
              {variable}
            </button>
          ))}
        </div>
      </div>

      {variableToSolve && (
        <div className="mb-6 bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6">
          <h2 className="text-md font-semibold text-green-700 dark:text-green-300">সূত্র সিলেক্ট করঃ</h2>
          <div className="flex flex-wrap gap-3 mt-3">
            {lawsForWorkPowerEnergy[variableToSolve]?.map((law) => (
              <button
                key={law.formula}
                onClick={() => handleLawSelection(law.formula)}
                className={`px-4 py-2 rounded-lg transition duration-200 ${selectedLaw === law.formula ? 'bg-green-500 text-white' : 'bg-gray-300 dark:bg-gray-700'}`}
              >
                {law.formula}
              </button>
            ))}
          </div>
        </div>
      )}

      {selectedLaw && (
        <div className="mb-6 bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6">
          <h2 className="text-xl font-semibold">Enter Values:</h2>
          <div className="mt-4">
            {lawsForWorkPowerEnergy[variableToSolve].find((law) => law.formula === selectedLaw).inputs?.map((input) => (
              <div key={input} className="mb-3">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">{input}:</label>
                <input
                  type="number"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder={`Enter ${input}`}
                  onChange={(e) => handleInputChange(input, e.target.value)}
                />
              </div>
            ))}
          </div>
        </div>
      )}

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
            {lawsForWorkPowerEnergy[variableToSolve]?.find((law) => law.formula === selectedLaw)?.resultInfo} 
            <span className="font-extrabold text-green-600 dark:text-green-400"> {result} </span> 
            {lawsForWorkPowerEnergy[variableToSolve].find((law) => law.formula === selectedLaw)?.unit}
          </p>
        </div>
      )}
    </div>
  );
};

export default WorkPowerEnergy;
import React, { useState } from 'react';

const ForceCalculator = () => {
  // State variables
  const [variableToSolve, setVariableToSolve] = useState(''); // Variable to solve (e.g., 'F')
  const [selectedLaw, setSelectedLaw] = useState(''); // Selected law (e.g., 'F = ma')
  const [inputValues, setInputValues] = useState({}); // Input values for the selected law
  const [result, setResult] = useState(null); // Calculated result

  // Available variables and their corresponding laws
  const variables = ['F', 'm', 'a', 's'];
  const laws = {
    F: [
      {
        formula: 'F = ma',
        inputs: ['m', 'a'],
        resultInfo: 'Final Result for F (force) is:',
        unit: 'N',
      },
      {
        formula: 'F = m(v-u)/t',
        inputs: ['m', 'v', 'u', 't'],
        resultInfo: 'Final Result for F is:',
        unit: 'N',
      }
    ],
  };

  // Handle variable selection
  const handleVariableSelection = (variable) => {
    setVariableToSolve(variable);
    setSelectedLaw(''); // Reset selected law when variable changes
    setInputValues({}); // Reset input values
    setResult(null); // Reset result
  };

  // Handle law selection
  const handleLawSelection = (law) => {
    setSelectedLaw(law);
    setInputValues({}); // Reset input values when law changes
    setResult(null); // Reset result
  };

  // Handle input changes
  const handleInputChange = (inputName, value) => {
    setInputValues({
      ...inputValues,
      [inputName]: parseFloat(value),
    });
  };
  console.log(inputValues,'inputValues');

  // Generate placeholder text for input fields
  const getPlaceholder = (inputName) => {
    switch (inputName) {
      case 'm':
        return 'ভরের মান (kg)';
      case 'a':
        return ' ত্বরণের মান (m/s²)';
      case 'v':
        return 'শেষবেগের মান (m/s)';
      case 'u':
        return 'আদিবেগের মান (m/s)';
      case 't':
        return ' সময়ের মান (s)';
      default:
        return `Enter ${inputName}`;
    }
  };

  // Calculate the result based on the selected law
  const calculateResult = () => {
    const selectedLawData = laws[variableToSolve].find(
      (law) => law.formula === selectedLaw
    );

    if (!selectedLawData) {
      setResult('Invalid law selection');
      return;
    }

    const { formula, inputs } = selectedLawData;
    const values = inputs?.map((input) => inputValues[input]);

    // Check if all required inputs are provided
    if (values.includes(undefined)) {
      setResult('Please fill all required fields');
      return;
    }

    let calculatedResult;
    switch (formula) {
      // Cases for 'F'
      case 'F = ma':
        calculatedResult = (inputValues.m * inputValues.a).toFixed(2);
        break;
      case 'F = m(v-u)/t':
        calculatedResult = (
          (inputValues.m * (inputValues.v - inputValues.u)) /
          inputValues.t
        ).toFixed(2);
        break;
      
      default:
        calculatedResult = 'Invalid formula';
    }

    setResult(calculatedResult);
  };

 
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 border-green-500">বল অধ্যায়ের গাণিতিক সমস্যার সমাধানঃ </h1>

      {/* Step 1: Select variable to solve */}
      <div className="mb-4">
        <h2 className="text-xl font-semibold">তুমি কিসের মান নির্নয় করতে চাও? :</h2>
        <div className="flex flex-wrap gap-2 mt-2">
          {variables?.map((variable) => (
            <button
              key={variable}
              onClick={() => handleVariableSelection(variable)}
              className={`px-4 py-2 rounded ${
                variableToSolve === variable
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200'
              }`}
            >
              {variable}
            </button>
          ))}
        </div>
      </div>

      {/* Step 2: Display laws for the selected variable */}
      {variableToSolve && (
        <div className="mb-4">
          <h2 className="text-md font-semibold text-green-700">তোমার প্রশ্নে যে তথ্য গুলো দেয়া আছে সেটি বিবেচনা করে সূত্র সিলেক্ট করঃ </h2>
          <div className="flex flex-wrap gap-2 mt-2">
            {laws[variableToSolve]?.map((law) => (
              <button
                key={law.formula}
                onClick={() => handleLawSelection(law.formula)}
                className={`px-4 py-2 rounded ${
                  selectedLaw === law.formula
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-200'
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
        <div className="mb-4">
          <h2 className="text-xl font-semibold">Enter Values:</h2>
          <div className="mt-2">
            {laws[variableToSolve]
              .find((law) => law.formula === selectedLaw)
              .inputs?.map((input) => (
                <div key={input} className="mb-2">
                  <label className="block text-sm font-medium text-gray-700">
                    {input}:
                  </label>
                  <input
                    type="number"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder={getPlaceholder(input)} // Add placeholder
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
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          onClick={calculateResult}
        >
          Calculate
        </button>
      )}

      {result !== null && (
        <div className="mt-4">
          <h2 className="text-xl font-semibold">Result:</h2>
          <p className="text-lg text-pink-300">
            {
              laws[variableToSolve]?.find((law) => law.formula === selectedLaw)
                .resultInfo
            }{' '}
            <span className="font-extrabold text-green-600">{result}</span>{' '}
            {
              laws[variableToSolve].find((law) => law.formula === selectedLaw)
                .unit
            }
          </p>
        </div>
      )}
    </div>
  );
};

export default ForceCalculator;
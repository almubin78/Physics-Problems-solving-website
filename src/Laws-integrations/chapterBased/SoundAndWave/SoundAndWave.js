import React, { useState } from 'react';

const SoundAndWave = () => {
  const [variableToSolve, setVariableToSolve] = useState('');
  const [selectedLaw, setSelectedLaw] = useState('');
  const [inputValues, setInputValues] = useState({});
  const [result, setResult] = useState(null);

  const variables = ['তরঙ্গের_বেগ', 'কম্পাংক', 'তরংগদৈর্ঘ্য'];
  const laws = {
    তরঙ্গের_বেগ: [
      {
        formula: 'v = fλ',
        inputs: ['f', 'λ'],
        resultInfo: 'তরংগের বেগ হবে:',
        unit: 'm/s',
      },
      {
        formula: 'v = λ/T',
        inputs: ['T', 'λ'],
        resultInfo: 'তরংগের বেগ হবে:',
        unit: 'm/s',
      },
    ],
    কম্পাংক:[
      {
        formula: 'f = v/λ',
        inputs: ['v', 'λ'],
        resultInfo: 'কম্পাংকের মান:',
        unit: 'Hz বা 1/s',
      },
      {
        formula: 'f = 1/T',
        inputs: [ 'T'],
        resultInfo: 'কম্পাংকের মান:',
        unit: 'Hz বা 1/s',
      },
    ],
    তরংগদৈর্ঘ্য:[
      {
        formula: 'λ = v/f',
        inputs: ['v', 'f'],
        resultInfo: 'তরংগদৈর্ঘ্য হবে:',
        unit: 'মিটার (m)',
      },
    ]
  };

  const handleVariableSelection = (variable) => {
    setVariableToSolve(variable);
    setSelectedLaw('');
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

  const getPlaceholder = (inputName) => {
    switch (inputName) {
      case 'f': return 'কম্পাঙ্কের মান (Hz)';
      case 'λ': return 'তরঙ্গ দৈর্ঘ্যের মান (m)';
      default: return `Enter ${inputName}`;
    }
  };

  const calculateResult = () => {
    const selectedLawData = laws[variableToSolve].find((law) => law.formula === selectedLaw);
    if (!selectedLawData) {
      setResult('Invalid law selection');
      return;
    }
    const { formula, inputs } = selectedLawData;
    const values = inputs?.map((input) => inputValues[input]);
    if (values.includes(undefined)) {
      setResult('Please fill all required fields');
      return;
    }
    let calculatedResult;
    switch (formula) {
      case 'v = fλ':
        calculatedResult = inputValues.f * inputValues.λ;
        break;
      case 'v = λ/T':
        calculatedResult = inputValues.λ * inputValues.T;
        break;
      case 'f = v/λ':
        calculatedResult = inputValues.v / inputValues.λ;
        break;
      case 'f = 1/T':
        calculatedResult = 1 / inputValues.T;
        break;
      case 'λ = v/f':
        calculatedResult = inputValues.v / inputValues.f;
        break;
      default:
        calculatedResult = 'Invalid formula';
    }
    
    // যদি দশমিক থাকে তাহলে toFixed(2) প্রয়োগ করব, অন্যথায় পূর্ণসংখ্যা রাখব
    calculatedResult = Number.isInteger(calculatedResult) ? calculatedResult : calculatedResult.toFixed(2);
    
    setResult(calculatedResult);
  };
  

  return (
    <div className="p-6 min-h-fit bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-center text-green-600 dark:text-green-400">শব্দ ও তরঙ্গ গাণিতিক সমস্যার সমাধান</h1>

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
            {laws[variableToSolve]?.map((law) => (
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
            {laws[variableToSolve].find((law) => law.formula === selectedLaw).inputs?.map((input) => (
              <div key={input} className="mb-3">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">{input}:</label>
                <input
                  type="number"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder={getPlaceholder(input)}
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
            {laws[variableToSolve]?.find((law) => law.formula === selectedLaw)?.resultInfo} 
            <span className="font-extrabold text-green-600 dark:text-green-400"> {result} </span> 
            {laws[variableToSolve].find((law) => law.formula === selectedLaw)?.unit}
          </p>
        </div>
      )}
    </div>
  );
};

export default SoundAndWave;

import React, { useState } from 'react';

const FormulaFinderForMotion = () => {
  const [inputs, setInputs] = useState({});
  const [applicableFormulas, setApplicableFormulas] = useState([]);
  const [selectedFormula, setSelectedFormula] = useState(null);
  const [result, setResult] = useState(null);

  const formulas = [
    { formula: 'a = (v - u) / t', required: ['u', 'v', 't'], compute: (vals) => (vals.v - vals.u) / vals.t },
    { formula: 'a = ((v^2 - u^2) / 2s)', required: ['u', 'v', 's'], compute: (vals) => ((vals.v * vals.v - vals.u * vals.u) / (2 * vals.s)) },
    { formula: 's = (ut + 0.5*a * t^2) এখানে a = (v-u)/t', required: ['u', 'v', 't'], compute: (vals) => (vals.u * vals.t + 0.5 * vals.t * vals.t * ((vals.v - vals.u) / vals.t)) },
    { formula: 's = ((u + v) / 2) * t', required: ['u', 'v', 't'], compute: (vals) => ((vals.u + vals.v) / 2) * vals.t },
    { formula: 's = ut + 0.5 * a * t^2', required: ['u', 't', 'a'], compute: (vals) => vals.u * vals.t + 0.5 * vals.a * vals.t ** 2 },
    { formula: 's = vt', required: ['v', 't'], compute: (vals) => vals.v * vals.t, exclude: ['u'] }, // Add exclude condition for 's = vt'
    { formula: 's = ((v^2 - u^2) / 2a)', required: ['u', 'v', 'a'], compute: (vals) => ((vals.v * vals.v - vals.u * vals.u) / (2 * vals.a)) },
    { formula: 'v^2 = u^2 + 2as', required: ['u', 'a', 's'], compute: (vals) => Math.sqrt(vals.u ** 2 + 2 * vals.a * vals.s) },
    { formula: 'v = s/t', required: ['s', 't'], compute: (vals) => vals.s / vals.t, exclude: ['u'] }, // Add exclude condition for 's = vt'
    { formula: 't = s/v', required: ['s', 'v'], compute: (vals) => vals.s / vals.v, exclude: ['u'] }, // Add exclude condition for 's = vt'
  ];

  const handleInputChange = (variable, value) => {
    const updatedInputs = { ...inputs, [variable]: parseFloat(value) };
    setInputs(updatedInputs);

    const matchedFormulas = formulas.filter(formula => {
      // Check if all required variables are present
      const hasRequired = formula.required.every(req => updatedInputs[req] !== undefined && !isNaN(updatedInputs[req]));
      
      // Check if excluded variables are NOT present
      const hasExcluded = formula.exclude ? formula.exclude.every(ex => updatedInputs[ex] === undefined || isNaN(updatedInputs[ex])) : true;

      return hasRequired && hasExcluded;
    });

    setApplicableFormulas(matchedFormulas);
    setSelectedFormula(null);
    setResult(null);
  };

  const calculateResult = () => {
    if (!selectedFormula) return;
    setResult(selectedFormula.compute(inputs).toFixed(2));
  };

  return (
    <div className="p-6 min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-center text-green-600 dark:text-green-400">গতি সূত্র নির্ণয় করুন</h1>

      <div className="mb-6 bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-4">প্রয়োজনীয় মান প্রদান করুন:</h2>
        <div className="grid grid-cols-2 gap-4">
          {['u', 'v', 't', 'a', 's'].map((variable) => (
            <div key={variable}>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">{variable}:</label>
              <input
                type="number"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white"
                onChange={(e) => handleInputChange(variable, e.target.value)}
              />
            </div>
          ))}
        </div>
      </div>

      {applicableFormulas.length > 0 && (
        <div className="mb-6 bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6">
          <h2 className="text-lg font-semibold text-green-700 dark:text-green-300">প্রযোজ্য সূত্র নির্বাচন করুন:</h2>
          <div className="flex flex-wrap gap-3 mt-3">
            {applicableFormulas.map((formula) => (
              <button
                key={formula.formula}
                className={`px-4 py-2 rounded-lg transition duration-200 ${selectedFormula?.formula === formula.formula ? 'bg-green-500 text-white' : 'bg-gray-300 dark:bg-gray-700'}`}
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

      {result !== null && (
        <div className="mt-6 bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6">
          <h2 className="text-xl font-semibold">Result:</h2>
          <p className="text-lg text-pink-500">
            Calculation Result: <span className="font-extrabold text-green-600 dark:text-green-400">{result}</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default FormulaFinderForMotion;
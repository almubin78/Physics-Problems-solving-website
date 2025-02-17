import React, { useState } from 'react';

const FormulaFinderForMotion = () => {
    const [inputs, setInputs] = useState({});
    const [applicableFormulas, setApplicableFormulas] = useState([]);
    const [selectedFormula, setSelectedFormula] = useState(null);
    const [result, setResult] = useState(null);
  
    const formulas = [
      { formula: 'a = (v - u) / t', required: ['u', 'v', 't'], compute: (vals) => (vals.v - vals.u) / vals.t },
      { formula: 's = ut + 0.5 * a * t^2', required: ['u', 't', 'a'], compute: (vals) => vals.u * vals.t + 0.5 * vals.a * vals.t ** 2 },
      { formula: 'v^2 = u^2 + 2as', required: ['u', 'a', 's'], compute: (vals) => Math.sqrt(vals.u ** 2 + 2 * vals.a * vals.s) },
      { formula: 's = ((u + v) / 2) * t', required: ['u', 'v', 't'], compute: (vals) => ((vals.u + vals.v) / 2) * vals.t },
    ];
  
    const handleInputChange = (variable, value) => {
      const updatedInputs = { ...inputs, [variable]: parseFloat(value) };
      setInputs(updatedInputs);
      
      const matchedFormulas = formulas.filter(formula => 
        formula.required.every(req => updatedInputs[req] !== undefined && !isNaN(updatedInputs[req]))
      );
      
      setApplicableFormulas(matchedFormulas);
      setSelectedFormula(null);
      setResult(null);
    };
  
    const calculateResult = () => {
      if (!selectedFormula) return;
      setResult(selectedFormula.compute(inputs).toFixed(2));
    };
  
    return (
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">গতি সূত্র নির্ণয় করুন</h1>
        <div>
          {['u', 'v', 't', 'a', 's'].map((variable) => (
            <div key={variable} className="mb-2">
              <label className="block text-sm font-medium text-gray-700">
                {variable}:
              </label>
              <input
                type="number"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                onChange={(e) => handleInputChange(variable, e.target.value)}
              />
            </div>
          ))}
        </div>
  
        {applicableFormulas.length > 0 && (
          <div className="mt-4">
            <h2 className="text-lg font-semibold">প্রযোজ্য সূত্র নির্বাচন করুন:</h2>
            {applicableFormulas.map((formula) => (
              <button
                key={formula.formula}
                className={`px-4 py-2 m-2 rounded ${selectedFormula?.formula === formula.formula ? 'bg-green-500 text-white' : 'bg-gray-200'}`}
                onClick={() => setSelectedFormula(formula)}
              >
                {formula.formula}
              </button>
            ))}
          </div>
        )}
  
        {selectedFormula && (
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded" onClick={calculateResult}>
            Calculate
          </button>
        )}
  
        {result !== null && (
          <div className="mt-4 text-lg font-semibold text-green-600">Result: {result}</div>
        )}
      </div>
    );
  };

export default FormulaFinderForMotion;
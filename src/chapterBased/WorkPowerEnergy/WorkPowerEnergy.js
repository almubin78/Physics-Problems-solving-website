import React, { useState } from "react";
import { set } from "react-hook-form";

const WorkPowerEnergy = () => {
    const [variableToSolve, setVariableToSolve] = useState('');
    const [selectedLaw, setSelectedLaw] = useState('');
    const variables = ['কাজ', 'শক্তি', 'সময়', 'শক্তির পরিমাণ', 'কাজের পরিমাণ'];
    const laws = {
        কাজ: [
            {
                formula: 'কাজ = শক্তি x সময়',
                inputs: ['শক্তি', 'সময়'],
                resultInfo: 'কাজের পরিমাণ:',
                unit: 'জুল',
            },
            {
                formula: 'কাজ = শক্তির পরিমাণ x সময়',
                inputs: ['শক্তির পরিমাণ', 'সময়'],
                resultInfo: 'কাজের পরিমাণ:',
                unit: 'জুল',
            },
        ],
        শক্তি: [
            {
                formula: 'শক্তি = কাজ / সময়',
                inputs: ['কাজ', 'সময়'],
                resultInfo: 'শক্তির পরিমাণ:',
                unit: 'জুল/সেকেন্ড',
            },
            {
                formula: 'শক্তি = কাজ / সময়',
                inputs: ['কাজ', 'সময়'],
                resultInfo: 'শক্তির পরিমাণ:',
                unit: 'জুল/সেকেন্ড',
            },
        ],
        সময়: [
            {
                formula: 'সময় = কাজ / শক্তি',
                inputs: ['কাজ', 'শক্তি'],
                resultInfo: 'সময়:',
                unit: 'সেকেন্ড',
            },
            {
                formula: 'সময় = কাজ / শক্তির পরিমাণ',
                inputs: ['কাজ', 'শক্তির পরিমাণ'],    
                resultInfo: 'সময়:',     
                unit: 'সেকেন্ড',
            },
        ],
    }
    const handleVariableSelection = (variable) => {
        setVariableToSolve(variable);
        console.log('inside handleVariableSelection',variableToSolve);
    }
    console.log('outside handleVariableSelection',variableToSolve);

    const handleLawSelection = (law) => {
        setSelectedLaw(law);
        // console.log('inside handleLawSelection',law);
    }
    console.log('outside handleLawSelection',selectedLaw);  





    // রেন্ডার
  return (
    <div>
      <h1 className="text-xl font-bold mb-4 border-green-500">
       <span className="text-2xl text-purple-500"> কাজ, ক্ষমতা , শক্তি </span> অধ্যায়ের গাণিতিক সমস্যার সমাধানঃ{" "}
      </h1>

      {/* Step 1: Select variable to solve */}
      <div className="mb-4">
        <h2 className="text-xl font-semibold">
          তুমি কিসের মান নির্নয় করতে চাও? :
        </h2>
        <div className="flex flex-wrap gap-2 mt-2">
          {variables?.map((variable) => (
            <button
              key={variable}
              onClick={() => handleVariableSelection(variable)}
              className={`px-4 py-2 rounded ${
                variableToSolve === variable
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200"
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
    </div>
  );
};

export default WorkPowerEnergy;

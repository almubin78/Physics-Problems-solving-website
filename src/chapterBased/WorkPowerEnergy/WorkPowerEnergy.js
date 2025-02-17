import React, { useState } from "react";

const WorkPowerEnergy = () => {
  const [variableToSolve, setVariableToSolve] = useState("");
  const [selectedLaw, setSelectedLaw] = useState("");
  const [inputValues, setInputValues] = useState({});

  const variables = ["কাজ", "বিভবশক্তি", "গতিশক্তি"];
  const laws = {
    কাজ: [
      {
        formula: "কাজ = F x s",
        inputs: ["F", "s"],
        resultInfo: "কাজের পরিমাণ:",
        unit: "জুল",
      },
    ],
    বিভবশক্তি: [
      {
        formula: "বিভবশক্তি = m x g x h",
        inputs: ["m", "h"],
        resultInfo: "বিভবশক্তি:",
        unit: "জুল",
      },
    ],
    গতিশক্তি: [
      {
        formula: "গতিশক্তি = 1/2 x m x v^2",
        inputs: ["m", "v"],
        resultInfo: "গতিশক্তি:",
        unit: "জুল",
      },
    ],
  };
  const handleVariableSelection = (variable) => {
    setVariableToSolve(variable);
    console.log("inside handleVariableSelection", variableToSolve);
  };
  console.log("outside handleVariableSelection", variableToSolve);

  const handleLawSelection = (law) => {
    setSelectedLaw(law);
    // console.log('inside handleLawSelection',law);
  };

  const handleInputChange = (inputName,value)=>{
    setInputValues((preInputs)=>{
      return{
        ...preInputs,[inputName]:value
      }
    })
  }
    console.log("outside handleInputChange", inputValues);

  // রেন্ডার
  return (
    <div className=" min-h-screen">
      <h1 className="text-xl font-bold mb-4 border-green-500">
        <span className="text-2xl text-purple-500"> কাজ, ক্ষমতা , শক্তি </span>{" "}
        অধ্যায়ের গাণিতিক সমস্যার সমাধানঃ{" "}
      </h1>

      {/* Step 1: Select variable to solve */}
      <div className="mb-4 ">
        <h2 className="text-xl font-semibold">
          তুমি কিসের মান নির্নয় করতে চাও? :
        </h2>
        <div className="flex flex-wrap gap-2 mt-2">
          {variables?.map((variable) => (
            <>
              <button
                key={variable}
                onClick={() => handleVariableSelection(variable)}
                className={`px-3 py-2 rounded ${
                  variableToSolve === variable
                    ? "bg-green-300 text-white  "
                    : " bg-white text-black"
                }`}
              >
                {variable}
              </button>
            </>
          ))}
        </div>
      </div>

      {/* Step 2: Display laws for the selected variable */}
      {variableToSolve && (
        <div className="mb-4">
          <h2 className="text-md font-semibold text-green-700">
            তোমার প্রশ্নে যে তথ্য গুলো দেয়া আছে সেটি বিবেচনা করে সূত্র সিলেক্ট
            করঃ{" "}
          </h2>
          <div className="flex flex-wrap gap-2 mt-2">
            {laws[variableToSolve]?.map((law) => (
              <>
                <button
                  key={law.formula}
                  onClick={() => {
                    handleLawSelection(law.formula);
                  }}
                  className={`px-4 py-3 ${
                    selectedLaw === law.formula
                      ? "bg-green-300 text-white"
                      : "bg-white text-black"
                  }`}
                >
                  {law.formula}
                </button>
              </>
            ))}
          </div>
        </div>
      )}
      {/* Step 3: Display input fields for the selected law */}
      {selectedLaw && (
        <div>
          <h2 className="text-xl font-semibold">Enter Values:</h2>
          <div className="mt-2">
            {laws[variableToSolve].find(law=>law.formula === selectedLaw)?.inputs?.map((input)=><div key={input} className="flex flex-wrap gap-2 mt-2">
                <label
                  htmlFor={input}
                  className="text-md font-semibold text-green-700"
                >
                  {input}:
                </label>
                <input
                  type="number"
                  id={input}
                  className="px-3 py-2 border border-green-500 rounded"
                  onChange={(e)=>{handleInputChange(input,e.target.value)}}
                />
              </div>)}
          </div>
        </div>
      )}
    </div>
  );
};

export default WorkPowerEnergy;

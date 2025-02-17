import React, { useState } from "react";

const SoundAndWave = () => {
  // set states
  const [targetVar, setTargetVar] = useState("");
  const [targetLaw, setTargetLaw] = useState("");
  const [inputValues, setInputValues] = useState({});
  const [result, setResult] = useState(null);
  // logical part start
  const targetFromMany = ["বেগ", "কম্পাঙ্ক", "পর্যায়কাল", "তরংগদৈর্ঘ্য"];
  const lawsDetails = {
    বেগ: [
      {
        targetWithThis: "শব্দের বেগ (v)",
        law: "v=fn",
        inputsNeed: ["f", "n"],
        ResultInfo: "শব্দের বেগ হবে",
        unit: "m/s",
      },
    ],
    কম্পাঙ্ক: [
      {
        targetWithThis: "কম্পাঙ্ক (f)",
        law: "f=v/n",
        inputsNeed: ["v", "n"],
        ResultInfo: "কম্পাংকের মান হবে",
        unit: "1/s",
      },
    ],
    তরংগদৈর্ঘ্য: [
      {
        targetWithThis: "তরংগদৈর্ঘ্য",
        law: "n=v/f",
        inputsNeed: ["v", "n"],
        ResultInfo: "তরঙ্গ দৈর্ঘ্য হবে",
        unit: "meter",
      },
    ],
  };
  const handleTargetVariable = (variable) => {
    setTargetVar(variable);
    setTargetLaw("");
    setInputValues({});
    setResult(null);
  };
  const handleSetLaw = (law) => {
    console.log(law, "====law from handleSelectLaw");
    setTargetLaw(law);
    setInputValues({});
    setResult(null);
  };
  const handleInputOnChange = (inputKey, inputValue) => {
    setInputValues({ ...inputValues, [inputKey]: parseFloat(inputValue) });
  };
  // calculating result
  const handleCalculate = ()=>{
    const targetedLawCheck = lawsDetails[targetVar].find((findingLaw)=>findingLaw.law === targetLaw);
    if(!targetedLawCheck){
      setResult('সূত্র পাওয়া যায়নি। ')
      return;
    }
    const {law,inputsNeed} = targetedLawCheck;
    console.log(law,inputsNeed,'=law  and inputNeed ==after checking');
    const values = inputsNeed?.map((singleInput)=>inputValues[singleInput]);
    console.log(values,'=valules');
     // Check if all required inputs are provided
     if (values.includes(undefined)) {
      setResult('Please fill all required fields');
      return;
    }
    let calculateResult;
    console.log(inputValues);
    switch (law) {
      case 'v=fn':
          calculateResult = (inputValues.f * inputValues.n).toFixed(2)
        break;
      case 'f=v/n':
          calculateResult = (inputValues.v / inputValues.n).toFixed(2)
        break;
    
      default:
        calculateResult = 'no result found';
    }
    setResult(calculateResult)
    console.log('calculateResult===',calculateResult);
  }
  console.log(inputValues,'==inputValues');
  console.log(result,'==result');
  return (
    <div className=" mx-0">
      {/* step-1 select problem*/}
      <div className="flex flex-wrap gap-5">
        {targetFromMany.map((selectProblem) => (
          <button
            className={`px-3 py-2 border rounded ${
              targetVar === selectProblem ? "btn-green" : "btn-secondary"
            }`}
            onClick={() => handleTargetVariable(selectProblem)}
          >
            {selectProblem}
          </button>
        ))}
      </div>
      
      {/* step-3 get inputs */}
      {targetVar && (
        <div className="flex flex-wrap gap-5">
          {lawsDetails[targetVar]?.map((singleLawDetails) => (
            <button
              key={singleLawDetails.targetWithThis}
              className={`px-3 py-2 border rounded ${
                targetVar === singleLawDetails.targetWithThis
                  ? "btn-green"
                  : "bg-green-400"
              }`}
              onClick={() => handleSetLaw(singleLawDetails.law)}
            >
              {singleLawDetails.law}
            </button>
          ))}
        </div>
      )}

      {targetLaw && (
        <>
          {lawsDetails[targetVar]
            .find((lawDetail) => lawDetail.law === targetLaw)
            .inputsNeed?.map((inputVar) => (
              <div key={inputVar}>
                <label>
                  {inputVar}
                </label>
                <input
                  type="number"
                  className="border"
                  onChange={(e) =>
                    handleInputOnChange(inputVar, e.target.value)
                  }
                />
              </div>
            ))}
        </>
      )}
      {
        targetLaw && (
          <button 
            className="border bg-white"
            onClick={handleCalculate}
          >
            Calculate
          </button>
        )
      }
      { 
      result !== null && (
        <>
          <div>result</div>
          {result}
        </>
      )

      }
    </div>
  );
};

export default SoundAndWave;

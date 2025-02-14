import React, { useState } from "react";

const SoundAndWave = () => {
  // set states
  const [targetVar, setTargetVar] = useState("");
  const [targetLaw, setTargetLaw] = useState("");
  const [inputValues, setInputValues] = useState({});
  const [result, setResult] = useState(null);
  // logical part start
  const targetFromMany = [
    "বেগ",
    "কম্পাঙ্ক",
    "পর্যায়কাল",
    "তরংগদৈর্ঘ্য",
  ];
  const lawsDetails = {
    বেগ: [
      {
        targetVar:'শব্দের বেগ (v)',
        law: "v=fn",
        inputsNeed: ["f", "n"],
        ResultInfo: "শব্দের বেগ হবে",
        unit: "m/s",
      },
    ],
    কম্পাঙ্ক: [
      {
        targetVar:'কম্পাঙ্ক (f)',
        law: "f=v/n",
        inputsNeed: ["v", "n"],
        ResultInfo: "কম্পাংকের মান হবে",
        unit: "1/s",
      },
    ],
    তরংগদৈর্ঘ্য: [
      {
        targetVar:'তরংগদৈর্ঘ্য',
        law: "n=v/f",
        inputsNeed: ["v", "n"],
        ResultInfo: "তরঙ্গ দৈর্ঘ্য হবে",
        unit: "meter",
      },
    ],
  };
  const handleTargetVariable = (variable) => {
    setTargetVar(variable);
    setTargetLaw('')
    setInputValues({});
    setResult(null);

  };
  const handleSetLaw = (law)=>{
    console.log(law,'law');
    setTargetLaw(law)
    setInputValues({});
    setResult(null);
  }

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
      {/* step-1 select law */}
      <div className="flex flex-wrap gap-5">
        {lawsDetails[targetVar]?.map((singleLawDetails) => (
          <button
          key={singleLawDetails.targetVar}
            className={`px-3 py-2 border rounded ${
              targetVar === singleLawDetails.targetVar ? "btn-green" : "btn-secondary"
            }`}
            onClick={() => handleSetLaw(singleLawDetails.law)}
          >
            {singleLawDetails.targetVar}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SoundAndWave;

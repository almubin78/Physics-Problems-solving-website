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
    console.log(law, "law");
    setTargetLaw(law);
    setInputValues({});
    setResult(null);
  };
  const handleInputOnChange = (inputKey, inputValue) => {
    setInputValues({ ...inputValues, [inputKey]: parseFloat(inputValue) });
  };

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
              targetVar === singleLawDetails.targetVar
                ? "btn-green"
                : "bg-green-400"
            }`}
            onClick={() => handleSetLaw(singleLawDetails.law)}
          >
            {singleLawDetails.law}
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
                <input
                  type="number"
                  onChange={(e) =>
                    handleInputOnChange(inputVar, e.target.value)
                  }
                />
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default SoundAndWave;

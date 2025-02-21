import React, { useState } from "react";

// Variable Selector Component
const VariableSelector = ({ variables, variableToSolve, onSelect }) => {
  return (
    <div className="mb-6 bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6">
      <h2 className="text-xl font-semibold mb-4">
        তুমি কিসের মান নির্ণয় করতে চাও ?
      </h2>
      <div className="flex flex-wrap gap-3">
        {variables.map((variable) => (
          <button
            key={variable}
            onClick={() => onSelect(variable)}
            className={`px-4 py-2 rounded-lg transition duration-200 ${
              variableToSolve === variable
                ? "bg-blue-500 text-white"
                : "bg-gray-300 dark:bg-gray-700"
            }`}
          >
            {variable}
          </button>
        ))}
      </div>
    </div>
  );
};

// Law Selector Component
const LawSelector = ({ laws, variableToSolve, selectedLaw, onSelect }) => {
  return (
    <div className="mb-6 bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6">
      <h2 className="text-md font-semibold text-green-700 dark:text-green-300">
        Select Law:
      </h2>
      <div className="flex flex-wrap gap-3 mt-3">
        {laws[variableToSolve]?.map((law) => (
          <button
            key={law.formula}
            onClick={() => onSelect(law.formula)}
            className={`px-4 py-2 rounded-lg transition duration-200 ${
              selectedLaw === law.formula
                ? "bg-green-500 text-white"
                : "bg-gray-300 dark:bg-gray-700"
            }`}
          >
            {law.formula}
          </button>
        ))}
      </div>
    </div>
  );
};

// Input Fields Component
const InputFields = ({ inputs, inputValues, onChange, getPlaceholder }) => {
  return (
    <div className="mb-6 bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6">
      <h2 className="text-xl font-semibold">Enter Values:</h2>
      <div className="mt-2">
        {inputs.map((input) => (
          <div key={input} className="mb-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              {input}:
            </label>
            <input
              type="number"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder={getPlaceholder(input)}
              onChange={(e) => onChange(input, e.target.value)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

// Result Display Component
const ResultDisplay = ({ result, law, variableToSolve }) => {
  return (
    <div className="mt-6 bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6">
      <h2 className="text-xl font-semibold">Result:</h2>
      <p className="text-lg text-pink-500">
        {law.resultInfo}{" "}
        <span className="font-extrabold text-green-600 dark:text-green-400">
          {result}
        </span>{" "}
        {law.unit}
      </p>
    </div>
  );
};

const MotionCalculator2 = () => {
  const [variableToSolve, setVariableToSolve] = useState("");
  const [selectedLaw, setSelectedLaw] = useState("");
  const [inputValues, setInputValues] = useState({});
  const [result, setResult] = useState(null);

  const variables = ["u", "v", "t", "a", "s"];
  const laws = {
    s: [
      {
        formula: "s = ut + 0.5 * a * t^2",
        inputs: ["u", "t", "a"],
        resultInfo: "Final Result for S is:",
        unit: "m",
      },
      // {
      //   formula: "s = 0.5 * a * t^2 (if u = 0)",
      //   inputs: ["a", "t"],
      //   resultInfo: "Final Result for S is:",
      //   unit: "m",
      // },
      {
        formula: "s = (v^2 - u^2) / (2a)",
        inputs: ["u", "v", "a"],
        resultInfo: "Final Result for S is:",
        unit: "m",
      },
      {
        formula: `s = (v + u)t / 2`,
        inputs: ["u", "t", "v"],
        resultInfo: "Final Result for S is:",
        unit: "m",
      },
      {
        formula: "s = vt (সমবেগে গতিশীল হলে)",
        inputs: ["v", "t"],
        resultInfo: "Final Result for S is:",
        unit: "m",
      },
    ],
    v: [
      {
        formula: "v = u + at",
        inputs: ["u", "t", "a"],
        resultInfo: "Final Result for V is:",
        unit: "m/s",
      },
      {
        formula: "v = s / t (if no acceleration)",
        inputs: ["s", "t"],
        resultInfo: "Final Result for V is:",
        unit: "m/s",
      },
    ],
    a: [
      {
        formula: "a = (v - u) / t",
        inputs: ["u", "t", "v"],
        resultInfo: "Final Result for a is:",
        unit: "m/s^2",
      },
      {
        formula: "a = (v^2 - u^2) / (2s)",
        inputs: ["u", "s", "v"],
        resultInfo: "Final Result for a is:",
        unit: "m/s^2",
      },
    ],
    t: [
      {
        formula: "t = (v - u) / a",
        inputs: ["u", "v", "a"],
        resultInfo: "Final Result for t is:",
        unit: "second",
      },
      {
        formula: "t = s / v (if no acceleration)",
        inputs: ["s", "v"],
        resultInfo: "Final Result for t is:",
        unit: "second",
      },
      {
        formula: "t = sqrt((2s) / a) (if u = 0)",
        inputs: ["s", "a"],
        resultInfo: "Final Result for t is:",
        unit: "second",
      },
    ],
    u: [
      {
        formula: "u = v - at",
        inputs: ["v", "t", "a"],
        resultInfo: "Final Result for u is:",
        unit: "m/s",
      },
      {
        formula: "u = (s - 0.5 * a * t^2) / t",
        inputs: ["s", "t", "a"],
        resultInfo: "Final Result for u is:",
        unit: "m/s",
      },
      {
        formula: "u = sqrt(v^2 - 2as)",
        inputs: ["v", "a", "s"],
        resultInfo: "Final Result for u is:",
        unit: "m/s",
      },
    ],
  };

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

  const getPlaceholder = (inputName) => {
    switch (inputName) {
      case "a":
        return "ত্বরণের মান (m/s²)";
      case "v":
        return "শেষবেগের মান (m/s)";
      case "u":
        return "আদিবেগের মান (m/s)";
      case "t":
        return "সময়ের মান (s)";
      default:
        return `Enter ${inputName}`;
    }
  };

  const calculateResult = () => {
    const law = laws[variableToSolve].find(
      (law) => law.formula.trim() === selectedLaw.trim()
    );
    if (!law) return;
    const values = law.inputs.map((input) => inputValues[input]);
    if (values.includes(undefined)) {
      setResult("Please fill all required fields");
      return;
    }

    let calculatedResult;
    switch (law.formula) {
      case "s = ut + 0.5 * a * t^2":
        calculatedResult =
          inputValues.u * inputValues.t +
          0.5 * inputValues.a * inputValues.t ** 2;
        break;
      case "s = (v^2 - u^2) / (2a)":
        calculatedResult =
          (inputValues.v ** 2 - inputValues.u ** 2) / (2 * inputValues.a);
        break;
      case "v = u + at":
        calculatedResult = (
          inputValues.u +
          inputValues.a * inputValues.t
        ).toFixed(2);
        break;
      default:
        calculatedResult = "Invalid formula";
    }

    setResult(calculatedResult);
  };

  return (
    <div className="p-6 bg-gray-100 dark:bg-gray-900">
      <VariableSelector
        variables={variables}
        variableToSolve={variableToSolve}
        onSelect={handleVariableSelection}
      />
      {variableToSolve && (
        <LawSelector
          laws={laws}
          variableToSolve={variableToSolve}
          selectedLaw={selectedLaw}
          onSelect={handleLawSelection}
        />
      )}
      {selectedLaw && (
        <InputFields
          inputs={
            laws[variableToSolve].find((law) => law.formula === selectedLaw)
              .inputs
          }
          inputValues={inputValues}
          onChange={handleInputChange}
          getPlaceholder={getPlaceholder}
        />
      )}
      {selectedLaw && (
        <button
          className="px-6 py-3 bg-green-500 text-white rounded-lg w-full"
          onClick={calculateResult}
        >
          Calculate
        </button>
      )}
      {result !== null && (
        <ResultDisplay
          result={result}
          law={laws[variableToSolve].find((law) => law.formula === selectedLaw)}
        />
      )}
    </div>
  );
};

export default MotionCalculator2;

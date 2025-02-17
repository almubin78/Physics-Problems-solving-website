import React, { useState } from "react";

const MotionCalculator = () => {
  // State variables
  const [variableToSolve, setVariableToSolve] = useState(""); // Variable to solve (e.g., 's')
  const [selectedLaw, setSelectedLaw] = useState(""); // Selected law (e.g., 's = ut + 0.5 * a * t^2')
  const [inputValues, setInputValues] = useState({}); // Input values for the selected law
  const [result, setResult] = useState(null); // Calculated result

  // Available variables and their corresponding laws
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

  // Handle variable selection
  const handleVariableSelection = (variable) => {
    setVariableToSolve(variable);
    setSelectedLaw(""); // Reset selected law when variable changes
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
    // setInputValues({});
    setInputValues({
      ...inputValues,
      [inputName]: parseFloat(value),
    });
  };
//get placeholder
const getPlaceholder = (inputName) => {
  switch (inputName) {
    case 'm': return 'ভরের মান (kg)';
    case 'a': return 'ত্বরণের মান (m/s²)';
    case 'v': return 'শেষবেগের মান (m/s)';
    case 'u': return 'আদিবেগের মান (m/s)';
    case 't': return 'সময়ের মান (s)';
    default: return `Enter ${inputName}`;
  }
}
  // Calculate the result based on the selected law
  const calculateResult = () => {
    const selectedLawData = laws[variableToSolve].find(
      (law) => law.formula === selectedLaw
    );

    if (!selectedLawData) {
      setResult("Invalid law selection");
      return;
    }

    const { formula, inputs } = selectedLawData;
    const values = inputs.map((input) => inputValues[input]);

    
    // Check if all required inputs are provided
    if (values.includes(undefined)) {
      setResult("Please fill all required fields");
      return;
    }

    let calculatedResult;
    switch (formula) {
      //  cases for 's'
      case "s = ut + 0.5 * a * t^2":
        calculatedResult =
          inputValues.u * inputValues.t +
          0.5 * inputValues.a * inputValues.t ** 2;
        break;
      // case "s = 0.5 * a * t^2 (if u = 0)":
      //   calculatedResult = 0.5 * inputValues.a * inputValues.t ** 2;
      //   break;
      case "s = (v^2 - u^2) / (2a)":
        calculatedResult =
          (inputValues.v ** 2 - inputValues.u ** 2) / (2 * inputValues.a);
        break;
      case "s = (v + u)t / 2":
        calculatedResult =
          ((inputValues.v + inputValues.u) * inputValues.t) / 2;
        break;
      case "s = vt (সমবেগে গতিশীল হলে)":
        calculatedResult = inputValues.v * inputValues.t;
        break;

      //  cases for 'v'
      case "v = u + at":
        calculatedResult = (
          inputValues.u +
          inputValues.a * inputValues.t
        ).toFixed(2);
        break;
      case "v = s / t (if no acceleration)":
        calculatedResult = (inputValues.s / inputValues.t).toFixed(2);
        break;

      //  cases for 'a'
      case "a = (v - u) / t":
        calculatedResult = (
          (inputValues.v - inputValues.u) /
          inputValues.t
        ).toFixed(2);
        break;
      case "a = (v^2 - u^2) / (2s)":
        calculatedResult = (
          (inputValues.v ** 2 - inputValues.u ** 2) /
          (2 * inputValues.s)
        ).toFixed(2);
        break;

      //  cases for 't'
      case "t = (v - u) / a":
        calculatedResult = (
          (inputValues.v - inputValues.u) /
          inputValues.a
        ).toFixed(2);
        break;
      case "t = s / v (if no acceleration)":
        calculatedResult = (inputValues.s / inputValues.v).toFixed(2);
        break;
      case "t = sqrt((2s) / a) (if u = 0)":
        calculatedResult = Math.sqrt(
          (2 * inputValues.s) / inputValues.a
        ).toFixed(2);
        break;

      //  cases for 'u'
      case "u = v - at":
        calculatedResult = (
          inputValues.v -
          inputValues.a * inputValues.t
        ).toFixed(2);
        break;
      case "u = (s - 0.5 * a * t^2) / t":
        calculatedResult = (
          (inputValues.s - 0.5 * inputValues.a * inputValues.t ** 2) /
          inputValues.t
        ).toFixed(2);
        break;
      case "u = sqrt(v^2 - 2as)":
        calculatedResult = Math.sqrt(
          (inputValues.v ** 2 - 2 * inputValues.a * inputValues.s).toFixed(2)
        );
        break;

      default:
        calculatedResult = "Invalid formula";
    }

    setResult(calculatedResult);
  };

  return (
    <div className="p-6 min-h-fit bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-center text-green-600 dark:text-green-400">গতি অধ্যায়ের গাণিতিক সমস্যার সমাধান</h1>

      {/* Step 1: Select variable to solve */}
      <div className="mb-6 bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-4">Select Variable to Solve:</h2>
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

      {/* Step 2: Display laws for the selected variable */}
      {variableToSolve && (
        <div className="mb-6 bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6">
          <h2 className="text-md font-semibold text-green-700 dark:text-green-300">Select Law:</h2>
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

      {/* Step 3: Display input fields for the selected law */}
      {selectedLaw && (
        <div className="mb-6 bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6">
          <h2 className="text-xl font-semibold">Enter Values:</h2>
          <div className="mt-2">
            {laws[variableToSolve]
              .find((law) => law.formula === selectedLaw)
              .inputs?.map((input) => (
                <div key={input} className="mb-2">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    {input}:
                  </label>
                  <input
                    type="number"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder={getPlaceholder(input)}
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
            {
              laws[variableToSolve].find((law) => law.formula === selectedLaw)
                .resultInfo
            }{" "}
            <span className="font-extrabold text-green-600 dark:text-green-400">{result}</span>{" "}
            {
              laws[variableToSolve].find((law) => law.formula === selectedLaw)
                .unit
            }
          </p>
        </div>
      )}
      <div className="divider">পড়, পড় এবং পড়</div>
    </div>
  );
};

export default MotionCalculator;

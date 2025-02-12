import React, { useState } from "react";
import "./physics-solver.css";

const PhysicsProblemSolver = ({ variables, laws }) => {
  const [variableToSolve, setVariableToSolve] = useState(null);
  const [selectedLaw, setSelectedLaw] = useState(null);
  const [inputs, setInputs] = useState({});
  const [result, setResult] = useState(null);

  const handleVariableSelection = (variable) => {
    setVariableToSolve(variable);
    setSelectedLaw(null);
    setInputs({});
    setResult(null);
  };

  const handleLawSelection = (formula) => {
    setSelectedLaw(formula);
    setInputs({});
    setResult(null);
  };

  const handleInputChange = (input, value) => {
    setInputs({ ...inputs, [input]: parseFloat(value) });
  };

  const calculateResult = () => {
    const law = laws[variableToSolve].find((law) => law.formula === selectedLaw);
    if (!law || !law.calculate) return;
    setResult(law.calculate(inputs));
  };

  return (
    <div className="container">
      <h1 className="title">Physics Problem Solver</h1>

      {/* Step 1: Select variable to solve */}
      <div className="section">
        <h2>Select Variable to Solve:</h2>
        <div className="button-group">
          {variables?.map((variable) => (
            <button
              key={variable}
              onClick={() => handleVariableSelection(variable)}
              className={`btn ${variableToSolve === variable ? "active" : ""}`}
            >
              {variable}
            </button>
          ))}
        </div>
      </div>

      {/* Step 2: Select Law */}
      {variableToSolve && (
        <div className="section">
          <h2>Select Law:</h2>
          <div className="button-group">
            {laws[variableToSolve]?.map((law) => (
              <button
                key={law.formula}
                onClick={() => handleLawSelection(law.formula)}
                className={`btn ${selectedLaw === law.formula ? "active" : ""}`}
              >
                {law.formula}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 3: Input Fields */}
      {selectedLaw && (
        <div className="section">
          <h2>Enter Values:</h2>
          {laws[variableToSolve]
            .find((law) => law.formula === selectedLaw)
            .inputs?.map((input) => (
              <div key={input} className="input-group">
                <label>{input}:</label>
                <input
                  type="number"
                  onChange={(e) => handleInputChange(input, e.target.value)}
                />
              </div>
            ))}
        </div>
      )}

      {/* Step 4: Calculate Button */}
      {selectedLaw && (
        <button className="calculate-btn" onClick={calculateResult}>
          Calculate
        </button>
      )}

      {/* Result Display */}
      {result !== null && (
        <div className="result-section">
          <h2>Result:</h2>
          <p>
            {
              laws[variableToSolve].find((law) => law.formula === selectedLaw)
                .resultInfo
            }{" "}
            <span className="result">{result}</span>{" "}
            {
              laws[variableToSolve].find((law) => law.formula === selectedLaw)
                .unit
            }
          </p>
        </div>
      )}
    </div>
  );
};

export default PhysicsProblemSolver;

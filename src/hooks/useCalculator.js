import { useState } from "react";
import {formatResultNumber} from '../commonLogics/formatResult/resultShowingFormating'
export const useCalculator = (initialVariables, lawsDetails) => {
  const [variableToSolve, setVariableToSolve] = useState("");
  const [selectedLaw, setSelectedLaw] = useState("");
  const [inputValues, setInputValues] = useState({});
  const [result, setResult] = useState(null);

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

  const calculateResult = () => {
    const selectedLawData = lawsDetails[variableToSolve].find(
      (law) => law.formula === selectedLaw
    );

    if (!selectedLawData) {
      setResult("Invalid law selection");
      return;
    }

    const { inputs, calculate } = selectedLawData;
    const values = inputs.map((input) => inputValues[input]);

    if (values.includes(undefined)) {
      setResult("Please fill all required fields");
      return;
    }

    // Use the dynamic calculation function
    let calculatedResult = calculate(inputValues);

    if (typeof calculatedResult === "number") {
      calculatedResult = formatResultNumber(calculatedResult);
    }

    setResult(calculatedResult);
  };

  return {
    variableToSolve,
    selectedLaw,
    inputValues,
    result,
    handleVariableSelection,
    handleLawSelection,
    handleInputChange,
    calculateResult,
  };
};
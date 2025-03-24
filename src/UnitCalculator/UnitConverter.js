import React, { useState } from "react";

const UnitConverter = ({
  title,
  extraInfo,
  units,
  converterFunction,
  initialFromUnit,
  initialToUnit,
}) => {
  const [value, setValue] = useState("");
  const [fromUnit, setFromUnit] = useState(initialFromUnit);
  const [toUnit, setToUnit] = useState(initialToUnit);
  const [convertedValue, setConvertedValue] = useState("");

  const handleConversion = () => {
    setConvertedValue(
      converterFunction(parseFloat(value), fromUnit, toUnit).toFixed(2)
    );
  };

  return (
    <div className="mb-8 p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
        {title}
      </h3>
      <p>
        <span className="text-sm text-bold text-yellow-200">
          পারস্পরিক রুপান্তরঃ{" "}
        </span>
        {extraInfo}
      </p>

      <input
        type="number"
        className="w-full p-3 border rounded-md text-lg dark:bg-gray-700 dark:text-white"
        placeholder="Enter value"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <div className="flex justify-between items-center mt-4">
        <select
          className="w-1/3 p-3 border rounded-md dark:bg-gray-700 dark:text-white text-lg"
          value={fromUnit}
          onChange={(e) => setFromUnit(e.target.value)}
        >
          {units.map((unit) => (
            <option key={unit} value={unit}>
              {unit}
            </option>
          ))}
        </select>

        <span className="text-lg font-bold">→</span>

        <select
          className="w-1/3 p-3 border rounded-md dark:bg-gray-700 dark:text-white text-lg"
          value={toUnit}
          onChange={(e) => setToUnit(e.target.value)}
        >
          {units.map((unit) => (
            <option key={unit} value={unit}>
              {unit}
            </option>
          ))}
        </select>
      </div>

      <button
        className="mt-4 w-full p-3 bg-blue-600 text-white rounded-lg font-semibold text-lg hover:bg-blue-700 transition"
        onClick={handleConversion}
      >
        Convert
      </button>

      {convertedValue && (
        <p className="mt-4 text-center text-lg font-bold text-gray-900 dark:text-white">
          Converted: {convertedValue}
        </p>
      )}
    </div>
  );
};

export default UnitConverter;
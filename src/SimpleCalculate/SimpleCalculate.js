import React, { useState } from "react";
import { motion } from "framer-motion";

const SimpleCalculate = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  // Separate states for each converter
  const [timeValue, setTimeValue] = useState("");
  const [timeFromUnit, setTimeFromUnit] = useState("hour");
  const [timeToUnit, setTimeToUnit] = useState("minute");
  const [timeConvertedValue, setTimeConvertedValue] = useState("");

  const [distanceValue, setDistanceValue] = useState("");
  const [distanceFromUnit, setDistanceFromUnit] = useState("km");
  const [distanceToUnit, setDistanceToUnit] = useState("m");
  const [distanceConvertedValue, setDistanceConvertedValue] = useState("");

  const [velocityValue, setVelocityValue] = useState("");
  const [velocityFromUnit, setVelocityFromUnit] = useState("km/h");
  const [velocityToUnit, setVelocityToUnit] = useState("m/s");
  const [velocityConvertedValue, setVelocityConvertedValue] = useState("");

  const [energyValue, setEnergyValue] = useState("");
  const [energyFromUnit, setEnergyFromUnit] = useState("Joule");
  const [energyToUnit, setEnergyToUnit] = useState("calorie");
  const [energyConvertedValue, setEnergyConvertedValue] = useState("");

  const handleButtonClick = (value) => {
    setInput((prev) => prev + value);
  };

  const clearInput = () => {
    setInput("");
    setResult("");
  };

  const calculateResult = () => {
    try {
      setResult(eval(input).toString());
    } catch {
      setResult("Error");
    }
  };

  const convertTime = (value, from, to) => {
    const timeUnits = { hour: 3600, minute: 60, second: 1 };
    return (value * timeUnits[from]) / timeUnits[to];
  };

  const convertDistance = (value, from, to) => {
    const distanceUnits = { km: 1000, m: 1, cm: 0.01, mm: 0.001 };
    return (value * distanceUnits[from]) / distanceUnits[to];
  };

  const convertVelocity = (value, from, to) => {
    return from === "km/h" && to === "m/s" ? value / 3.6 : value * 3.6;
  };

  const convertEnergy = (value, from, to) => {
    const energyUnits = { Joule: 1, calorie: 4.184, kWh: 3600000 };
    return (value * energyUnits[from]) / energyUnits[to];
  };

  const handleConversion = (converterFunction, setConvertedValue, value, from, to) => {
    setConvertedValue(converterFunction(parseFloat(value), from, to).toFixed(2));
  };

  const timeUnits = ["hour", "minute", "second"];
  const distanceUnits = ["km", "m", "cm", "mm"];
  const velocityUnits = ["km/h", "m/s"];
  const energyUnits = ["Joule", "calorie", "kWh"];

  return (
    <div className="p-4 min-h-screen flex flex-col items-center">
      {/* Calculator Section */}
      <motion.button
        className="fixed bottom-6 right-6 p-3 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600"
        onClick={() => setIsOpen(!isOpen)}
        whileTap={{ scale: 0.9 }}
      >
        {isOpen ? "Close" : "Open"} Calculator
      </motion.button>

      {isOpen && (
        <motion.div
          className="fixed bottom-16 right-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 w-80"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-xl font-bold mb-2 text-center">
            General Calculator
          </h2>
          <input
            type="text"
            className="w-full p-2 border rounded mb-2 text-center dark:bg-gray-700 dark:text-white"
            value={input}
            readOnly
          />
          <div className="grid grid-cols-4 gap-2">
            {[7, 8, 9, "/"].map((item) => (
              <button
                key={item}
                onClick={() => handleButtonClick(item)}
                className="p-3 bg-gray-200 rounded dark:bg-gray-600"
              >
                {item}
              </button>
            ))}
            {[4, 5, 6, "*"].map((item) => (
              <button
                key={item}
                onClick={() => handleButtonClick(item)}
                className="p-3 bg-gray-200 rounded dark:bg-gray-600"
              >
                {item}
              </button>
            ))}
            {[1, 2, 3, "-"].map((item) => (
              <button
                key={item}
                onClick={() => handleButtonClick(item)}
                className="p-3 bg-gray-200 rounded dark:bg-gray-600"
              >
                {item}
              </button>
            ))}
            {[0, ".", "=", "+"].map((item) => (
              <button
                key={item}
                onClick={() =>
                  item === "=" ? calculateResult() : handleButtonClick(item)
                }
                className="p-3 bg-gray-200 rounded dark:bg-gray-600"
              >
                {item}
              </button>
            ))}
          </div>
          <button
            onClick={clearInput}
            className="w-full mt-2 p-2 bg-red-500 text-white rounded"
          >
            Clear
          </button>
          {result && (
            <p className="mt-2 text-center font-bold">Result: {result}</p>
          )}
        </motion.div>
      )}

      {/* Unit Converters */}
      <div className="p-4 ">
        <div className="mt-10">
          <h2 className="text-2xl font-bold text-center mb-4">
            Unit Converters
          </h2>

          {/* Time Converter */}
          <div className="mb-6 p-4 bg-gray-100 dark:bg-gray-800 rounded shadow">
            <h3 className="text-lg font-semibold">Time Converter</h3>
            <input
              type="number"
              className="mt-2 p-2 border rounded w-full dark:bg-gray-700 dark:text-white"
              placeholder="Enter value"
              onChange={(e) => setTimeValue(e.target.value)}
            />
            <div className="flex justify-between mt-2">
              <select
                className="p-2 border rounded dark:bg-gray-700 dark:text-white"
                onChange={(e) => setTimeFromUnit(e.target.value)}
              >
                {timeUnits.map((unit) => (
                  <option key={unit} value={unit}>
                    {unit}
                  </option>
                ))}
              </select>
              <span className="px-2">to</span>
              <select
                className="p-2 border rounded dark:bg-gray-700 dark:text-white"
                onChange={(e) => setTimeToUnit(e.target.value)}
              >
                {timeUnits.map((unit) => (
                  <option key={unit} value={unit}>
                    {unit}
                  </option>
                ))}
              </select>
            </div>
            <button
              className="mt-2 p-2 bg-blue-500 text-white rounded w-full"
              onClick={() =>
                handleConversion(
                  convertTime,
                  setTimeConvertedValue,
                  timeValue,
                  timeFromUnit,
                  timeToUnit
                )
              }
            >
              Convert
            </button>
            {timeConvertedValue && (
              <p className="mt-2 text-center font-bold">
                Converted: {timeConvertedValue}
              </p>
            )}
          </div>

          {/* Distance Converter */}
          <div className="mb-6 p-4 bg-gray-100 dark:bg-gray-800 rounded shadow">
            <h3 className="text-lg font-semibold">Distance Converter</h3>
            <input
              type="number"
              className="mt-2 p-2 border rounded w-full dark:bg-gray-700 dark:text-white"
              placeholder="Enter value"
              onChange={(e) => setDistanceValue(e.target.value)}
            />
            <div className="flex justify-between mt-2">
              <select
                className="p-2 border rounded dark:bg-gray-700 dark:text-white"
                onChange={(e) => setDistanceFromUnit(e.target.value)}
              >
                {distanceUnits.map((unit) => (
                  <option key={unit} value={unit}>
                    {unit}
                  </option>
                ))}
              </select>
              <span className="px-2">to</span>
              <select
                className="p-2 border rounded dark:bg-gray-700 dark:text-white"
                onChange={(e) => setDistanceToUnit(e.target.value)}
              >
                {distanceUnits.map((unit) => (
                  <option key={unit} value={unit}>
                    {unit}
                  </option>
                ))}
              </select>
            </div>
            <button
              className="mt-2 p-2 bg-blue-500 text-white rounded w-full"
              onClick={() =>
                handleConversion(
                  convertDistance,
                  setDistanceConvertedValue,
                  distanceValue,
                  distanceFromUnit,
                  distanceToUnit
                )
              }
            >
              Convert
            </button>
            {distanceConvertedValue && (
              <p className="mt-2 text-center font-bold">
                Converted: {distanceConvertedValue}
              </p>
            )}
          </div>

          {/* Velocity Converter */}
          <div className="mb-6 p-4 bg-gray-100 dark:bg-gray-800 rounded shadow">
            <h3 className="text-lg font-semibold">Velocity Converter</h3>
            <input
              type="number"
              className="mt-2 p-2 border rounded w-full dark:bg-gray-700 dark:text-white"
              placeholder="Enter value"
              onChange={(e) => setVelocityValue(e.target.value)}
            />
            <div className="flex justify-between mt-2">
              <select
                className="p-2 border rounded dark:bg-gray-700 dark:text-white"
                onChange={(e) => setVelocityFromUnit(e.target.value)}
              >
                {velocityUnits.map((unit) => (
                  <option key={unit} value={unit}>
                    {unit}
                  </option>
                ))}
              </select>
              <span className="px-2">to</span>
              <select
                className="p-2 border rounded dark:bg-gray-700 dark:text-white"
                onChange={(e) => setVelocityToUnit(e.target.value)}
              >
                {velocityUnits.map((unit) => (
                  <option key={unit} value={unit}>
                    {unit}
                  </option>
                ))}
              </select>
            </div>
            <button
              className="mt-2 p-2 bg-blue-500 text-white rounded w-full"
              onClick={() =>
                handleConversion(
                  convertVelocity,
                  setVelocityConvertedValue,
                  velocityValue,
                  velocityFromUnit,
                  velocityToUnit
                )
              }
            >
              Convert
            </button>
            {velocityConvertedValue && (
              <p className="mt-2 text-center font-bold">
                Converted: {velocityConvertedValue}
              </p>
            )}
          </div>

          {/* Energy Converter */}
          <div className="mb-6 p-4 bg-gray-100 dark:bg-gray-800 rounded shadow">
            <h3 className="text-lg font-semibold">Energy Converter</h3>
            <input
              type="number"
              className="mt-2 p-2 border rounded w-full dark:bg-gray-700 dark:text-white"
              placeholder="Enter value"
              onChange={(e) => setEnergyValue(e.target.value)}
            />
            <div className="flex justify-between mt-2">
              <select
                className="p-2 border rounded dark:bg-gray-700 dark:text-white"
                onChange={(e) => setEnergyFromUnit(e.target.value)}
              >
                {energyUnits.map((unit) => (
                  <option key={unit} value={unit}>
                    {unit}
                  </option>
                ))}
              </select>
              <span className="px-2">to</span>
              <select
                className="p-2 border rounded dark:bg-gray-700 dark:text-white"
                onChange={(e) => setEnergyToUnit(e.target.value)}
              >
                {energyUnits.map((unit) => (
                  <option key={unit} value={unit}>
                    {unit}
                  </option>
                ))}
              </select>
            </div>
            <button
              className="mt-2 p-2 bg-blue-500 text-white rounded w-full"
              onClick={() =>
                handleConversion(
                  convertEnergy,
                  setEnergyConvertedValue,
                  energyValue,
                  energyFromUnit,
                  energyToUnit
                )
              }
            >
              Convert
            </button>
            {energyConvertedValue && (
              <p className="mt-2 text-center font-bold">
                Converted: {energyConvertedValue}
              </p>
            )}
          </div>
        </div>
      </div>

    </div>
  );
};

export default SimpleCalculate;
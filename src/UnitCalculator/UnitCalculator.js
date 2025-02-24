import React, { useState } from "react";
import { motion } from "framer-motion";

const UnitCalculator = () => {
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
//eval and calculateResult()
//1.
  // const calculateResult = () => {
  //   try {
  //     setResult(eval(input).toString());
  //   } catch {
  //     setResult("Error");
  //   }
  // };
  //2.
  const calculateResult = () => {
    try {
      setResult(new Function(`return ${input}`)().toString());
    } catch {
      setResult("Error");
    }
  };
  //3.
//   const isValidExpression = (expression) => /^[0-9+\-*/().\s]+$/.test(expression);

// const calculateResult = () => {
//   if (!isValidExpression(input)) {
//     setResult("Invalid Input");
//     return;
//   }
//   try {
//     setResult(eval(input).toString());
//   } catch {
//     setResult("Error");
//   }
// };


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

  const handleConversion = (
    converterFunction,
    setConvertedValue,
    value,
    from,
    to
  ) => {
    setConvertedValue(
      converterFunction(parseFloat(value), from, to).toFixed(2)
    );
  };

  const timeUnits = ["hour", "minute", "second"];
  const distanceUnits = ["km", "m", "cm", "mm"];
  const velocityUnits = ["km/h", "m/s"];
  const energyUnits = ["Joule", "calorie", "kWh"];

  return (
    <div className="p-4 min-h-screen flex flex-col items-center">
      {/* Calculator Section */}
      <motion.button
        className="fixed bottom-6 right-6 p-3 bg-yellow-500 text-white rounded-full shadow-lg hover:bg-blue-600"
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
      {/* Unit Converters */}
      <div className="w-full max-w-3xl mx-auto p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800 dark:text-white">
          Unit Converters
        </h2>

        {[
          {
            title: "সময় Converter",
            extraInfo:' ঘন্টা, মিনিট, সেকেন্ড',
            value: timeValue,
            setValue: setTimeValue,
            fromUnit: timeFromUnit,
            setFromUnit: setTimeFromUnit,
            toUnit: timeToUnit,
            setToUnit: setTimeToUnit,
            units: timeUnits,
            convertedValue: timeConvertedValue,
            converter: convertTime,
            setConvertedValue: setTimeConvertedValue,
          },
          {
            title: "দূরত্ব Converter",
            extraInfo:' মিটার,কিলোমিটার,সেন্টিমিটার,মিলিমিটার',
            value: distanceValue,
            setValue: setDistanceValue,
            fromUnit: distanceFromUnit,
            setFromUnit: setDistanceFromUnit,
            toUnit: distanceToUnit,
            setToUnit: setDistanceToUnit,
            units: distanceUnits,
            convertedValue: distanceConvertedValue,
            converter: convertDistance,
            setConvertedValue: setDistanceConvertedValue,
          },
          {
            title: " বেগ Converter",
            extraInfo:' মিটার/সেকেন্ড, কিলোমিটার/ঘন্টা',
            value: velocityValue,
            setValue: setVelocityValue,
            fromUnit: velocityFromUnit,
            setFromUnit: setVelocityFromUnit,
            toUnit: velocityToUnit,
            setToUnit: setVelocityToUnit,
            units: velocityUnits,
            convertedValue: velocityConvertedValue,
            converter: convertVelocity,
            setConvertedValue: setVelocityConvertedValue,
          },
          {
            title: "শক্তি Converter",
            extraInfo:' জুল, কিলোওয়াট-ঘন্টা, ক্যালরি। ',
            value: energyValue,
            setValue: setEnergyValue,
            fromUnit: energyFromUnit,
            setFromUnit: setEnergyFromUnit,
            toUnit: energyToUnit,
            setToUnit: setEnergyToUnit,
            units: energyUnits,
            convertedValue: energyConvertedValue,
            converter: convertEnergy,
            setConvertedValue: setEnergyConvertedValue,
          },
        ].map((converter, index) => (
          <div
            key={index}
            className="mb-8 p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md"
          >
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              {converter.title}
            </h3>
            <p><span className="text-sm text-bold text-yellow-200">পারস্পরিক রুপান্তরঃ </span>{converter.extraInfo}</p>

            <input
              type="number"
              className="w-full p-3 border rounded-md text-lg dark:bg-gray-700 dark:text-white"
              placeholder="Enter value"
              value={converter.value}
              onChange={(e) => converter.setValue(e.target.value)}
            />

            <div className="flex justify-between items-center mt-4">
              <select
                className="w-1/3 p-3 border rounded-md dark:bg-gray-700 dark:text-white text-lg"
                value={converter.fromUnit}
                onChange={(e) => converter.setFromUnit(e.target.value)}
              >
                {converter.units.map((unit) => (
                  <option key={unit} value={unit}>
                    {unit}
                  </option>
                ))}
              </select>

              <span className="text-lg font-bold">→</span>

              <select
                className="w-1/3 p-3 border rounded-md dark:bg-gray-700 dark:text-white text-lg"
                value={converter.toUnit}
                onChange={(e) => converter.setToUnit(e.target.value)}
              >
                {converter.units.map((unit) => (
                  <option key={unit} value={unit}>
                    {unit}
                  </option>
                ))}
              </select>
            </div>

            <button
              className="mt-4 w-full p-3 bg-blue-600 text-white rounded-lg font-semibold text-lg hover:bg-blue-700 transition"
              onClick={() =>
                handleConversion(
                  converter.converter,
                  converter.setConvertedValue,
                  converter.value,
                  converter.fromUnit,
                  converter.toUnit
                )
              }
            >
              Convert
            </button>

            {converter.convertedValue && (
              <p className="mt-4 text-center text-lg font-bold text-gray-900 dark:text-white">
                Converted: {converter.convertedValue}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default UnitCalculator;

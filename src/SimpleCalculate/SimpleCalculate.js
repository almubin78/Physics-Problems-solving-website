import React, { useState } from 'react';
import { motion } from 'framer-motion';

const SimpleCalculate = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');
  const [conversionType, setConversionType] = useState('length');
  const [inputValue, setInputValue] = useState('');
  const [convertedValue, setConvertedValue] = useState('');
  
  const toggleCalculator = () => {
    setIsOpen(!isOpen);
  };

  const handleCalculate = () => {
    try {
      setResult(eval(value));
    } catch (error) {
      setResult('Error');
    }
  };

  const conversionFactors = {
    length: { km: 1000, m: 1, cm: 0.01, mm: 0.001 },
    time: { hour: 3600, minute: 60, second: 1 },
    mass: { kg: 1000, g: 1, cg: 0.01 },
    speed: { 'km/h': 5 / 18, 'm/s': 1 },
  };

  const handleConversion = (from, to) => {
    if (inputValue !== '') {
      const factor = conversionFactors[conversionType][to] / conversionFactors[conversionType][from];
      setConvertedValue((inputValue * factor).toFixed(2));
    }
  };

  return (
    <div className="fixed bottom-5 right-5">
      <motion.button
        className="bg-green-500 text-white px-4 py-2 rounded-full shadow-lg"
        onClick={toggleCalculator}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isOpen ? 'Close' : 'Calculator'}
      </motion.button>

      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute bottom-16 right-0 bg-white dark:bg-gray-800 p-5 shadow-xl rounded-lg w-80"
        >
          <h2 className="text-xl font-bold mb-3">Simple Calculator</h2>
          <input 
            type="text" 
            value={value} 
            onChange={(e) => setValue(e.target.value)} 
            className="w-full p-2 border rounded-md"
            placeholder="Enter expression..."
          />
          <button 
            className="w-full mt-2 bg-blue-500 text-white py-2 rounded-md"
            onClick={handleCalculate}
          >
            Calculate
          </button>
          {result && <p className="mt-2 font-semibold">Result: {result}</p>}

          <h2 className="text-lg font-semibold mt-4">Unit Converter</h2>
          <select className="w-full p-2 border rounded-md" onChange={(e) => setConversionType(e.target.value)}>
            <option value="length">Length (Km, m, cm, mm)</option>
            <option value="time">Time (Hour, Min, Sec)</option>
            <option value="mass">Mass (Kg, g, cg)</option>
            <option value="speed">Speed (Km/h ↔ m/s)</option>
          </select>
          <div className="mt-3">
            <input 
              type="number" 
              className="w-full p-2 border rounded-md" 
              placeholder="Enter value..." 
              onChange={(e) => setInputValue(e.target.value)}
            />
            <select className="w-full p-2 mt-2 border rounded-md" id="fromUnit">
              {Object.keys(conversionFactors[conversionType]).map(unit => (
                <option key={unit} value={unit}>{unit}</option>
              ))}
            </select>
            <select className="w-full p-2 mt-2 border rounded-md" id="toUnit">
              {Object.keys(conversionFactors[conversionType]).map(unit => (
                <option key={unit} value={unit}>{unit}</option>
              ))}
            </select>
            <button 
              className="w-full mt-2 bg-green-500 text-white py-2 rounded-md"
              onClick={() => handleConversion(document.getElementById('fromUnit').value, document.getElementById('toUnit').value)}
            >
              Convert
            </button>
            {convertedValue && <p className="mt-2 font-semibold">Converted Value: {convertedValue}</p>}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default SimpleCalculate;

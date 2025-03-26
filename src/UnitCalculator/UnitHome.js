import React, { useState } from 'react';
import UnitConverter from './UnitConverter';
import { motion } from "framer-motion";
import Calculator from './Calculator';

const UnitHome = () => {
    const [isOpen, setIsOpen] = useState(false);
  
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
  
    const timeUnits = ["hour", "minute", "second"];
    const distanceUnits = ["km", "m", "cm", "mm"];
    const velocityUnits = ["km/h", "m/s"];
    const energyUnits = ["Joule", "calorie", "kWh"];
  
    return (
      <div className="p-4 min-h-screen flex flex-col items-center">
        {/* Calculator Toggle Button */}
        <motion.button
          className="fixed bottom-6 right-6 p-3 bg-yellow-500 text-white rounded-full shadow-lg hover:bg-blue-600"
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.9 }}
        >
          {isOpen ? "Close" : "Open"} Calculator
        </motion.button>
  
        {isOpen && <Calculator isOpen={isOpen} setIsOpen={setIsOpen} />}
  
        {/* Unit Converters */}
        <div className="w-full max-w-3xl mx-auto p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-center mb-6 text-gray-800 dark:text-white">
            Unit Converters
          </h2>
  
          <UnitConverter
            title="সময় Converter"
            extraInfo=" ঘন্টা, মিনিট, সেকেন্ড"
            units={timeUnits}
            converterFunction={convertTime}
            initialFromUnit="hour"
            initialToUnit="minute"
          />
          <UnitConverter
            title=" বেগ Converter"
            extraInfo=" মিটার/সেকেন্ড, কিলোমিটার/ঘন্টা"
            units={velocityUnits}
            converterFunction={convertVelocity}
            initialFromUnit="km/h"
            initialToUnit="m/s"
          />
  
          <UnitConverter
            title="দূরত্ব Converter"
            extraInfo=" মিটার,কিলোমিটার,সেন্টিমিটার,মিলিমিটার"
            units={distanceUnits}
            converterFunction={convertDistance}
            initialFromUnit="km"
            initialToUnit="m"
          />
  
          
  
          <UnitConverter
            title="শক্তি Converter"
            extraInfo=" জুল, কিলোওয়াট-ঘন্টা, ক্যালরি। "
            units={energyUnits}
            converterFunction={convertEnergy}
            initialFromUnit="Joule"
            initialToUnit="calorie"
          />
        </div>
      </div>
    );
  };

export default UnitHome;
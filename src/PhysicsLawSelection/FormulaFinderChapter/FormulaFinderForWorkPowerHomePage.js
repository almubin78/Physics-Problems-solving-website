import React from 'react';
import FormulaFinder from '../CommonComponent/FormulaFinder';
import { workPowerFinderData } from '../../DataForFindingFormula/workPowerFinderFormulas';

const FormulaFinderForWorkPowerHomePage = () => {
  // All possible variables from all formulas
  const variables = [
    'F',    // বল (Force)
    's',    // সরণ (Displacement)
    'θ',    // কোণ (Angle)
    'W',    // কৃত কাজ (Work)
    't',    // সময় (Time)
    'P',    // ক্ষমতা (Power)
    'v',    // বেগ (Velocity)
    'E',    // শক্তি (Energy)
    'm',    // ভর (Mass)
    'h',    // উচ্চতা (Height)
    'g'     // মাধ্যাকর্ষণ (Gravity)
  ];

  return (
    <FormulaFinder
      title='কাজ, ক্ষমতা ও শক্তি অধ্যায়ের সূত্র খোঁজ'
      variables={variables}
      formulas={workPowerFinderData}
    />
  );
};

export default FormulaFinderForWorkPowerHomePage;
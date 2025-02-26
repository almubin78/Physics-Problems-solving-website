import React from 'react';
import { lawsForMotionData } from '../../DataForLawIntegrate/lawsForMotionData';
import GenericCalculator from '../CalculatorDesign/GenericCalculator';
import {getPlaceholderForMotion} from '../../commonLogics/placeholder/getPlaceholderForEveryChapter'
const MotionCalculator = () => {
    const variables = ["আদিবেগ", "শেষবেগ", "সময়", "ত্বরণ", "অতিক্রান্ত_দূরত্ব"];
  
    return (
      <GenericCalculator
        title="গতি অধ্যায়ের গাণিতিক ক্যালকুলেটর"
        variables={variables}
        lawsDetails={lawsForMotionData}
        placeholder={getPlaceholderForMotion}
      />
    );
  };

export default MotionCalculator;
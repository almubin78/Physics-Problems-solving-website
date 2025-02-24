import React from 'react';
import { newMotionData } from '../../Data/motionData';
import GenericCalculator from '../CalculatorDesign/GenericCalculator';
import {getPlaceholderForMotion} from '../../commonLogics/placeholder/getPlaceholderForEveryChapter'
const MotionCalculator = () => {
    const variables = ["u", "v", "t", "a", "s"];
  
    return (
      <GenericCalculator
        title="গতি অধ্যায়ের গাণিতিক ক্যালকুলেটর"
        variables={variables}
        lawsDetails={newMotionData}
        placeholder={getPlaceholderForMotion}
      />
    );
  };

export default MotionCalculator;
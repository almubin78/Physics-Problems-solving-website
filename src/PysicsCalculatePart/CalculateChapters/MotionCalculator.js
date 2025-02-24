import React from 'react';
import { newMotionData } from '../../Data/motionData';
import GenericCalculator from '../CalculatorDesign/GenericCalculator';

const MotionCalculator = () => {
    const variables = ["u", "v", "t", "a", "s"];
  
    return (
      <GenericCalculator
        title="গতি অধ্যায়ের গাণিতিক ক্যালকুলেটর"
        variables={variables}
        lawsDetails={newMotionData}
      />
    );
  };

export default MotionCalculator;
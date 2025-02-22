import React from 'react';
import GenericCalculator from '../CalculatorDesign/GenericCalculator';
import { newMotionData } from '../../Data/motionData';

const MotionCalculator = () => {
    const variables = ["u", "v", "t", "a", "s"];
  
    return (
      <GenericCalculator
        title="গতি অধ্যায়ের গাণিতিক সমস্যার সমাধান"
        variables={variables}
        lawsDetails={newMotionData}
      />
    );
  };

export default MotionCalculator;
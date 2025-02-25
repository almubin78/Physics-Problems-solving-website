import React from 'react';
import GenericCalculator from '../CalculatorDesign/GenericCalculator';
import { lawsForStateAndPressureOfMatter } from '../../Data/lawsForStateAndPressureOfMatter';
import { getPlaceholderForStateAndPressure } from '../../commonLogics/placeholder/getPlaceHolderForStateAndPressure';

const MatterAndPressure = () => {
    const variables = ['চাপ','ঘনত্ব','প্লবতা','বস্তুর_ওজন','পিষ্টনে_প্রযুক্ত_বল']
  return (
    <GenericCalculator
      title="পদার্থের অবস্থা ও চাপ অধ্যায়ের গাণিতিক ক্যালকুলেটর"
      variables={variables}
      lawsDetails={lawsForStateAndPressureOfMatter}
      placeholder={getPlaceholderForStateAndPressure}
    />
  );
};

export default MatterAndPressure;
import React from 'react';
import FormulaFinder from '../CommonComponent/FormulaFinder';
import { motionsFinderData } from '../../DataForFindingFormula/motionFindFormulas';

const FormulaFinderForMotionHomePage = () => {
  const variables = ['u','s','v','a','t']

  return (
    <FormulaFinder
      title='গতি অধ্যায়ের সূত্র খোঁজ'
      variables={variables}
      formulas={motionsFinderData}

    />
  );
};

export default FormulaFinderForMotionHomePage;
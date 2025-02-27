import React from 'react';
import FormulaFinder from '../CommonComponent/FormulaFinder';
import { forceFinderData } from '../../DataForFindingFormula/forceFinderData';
import { getPlaceholderForForce } from '../../commonLogics/placeholder/getPlaceholderForEveryChapter';

const FormulaFinderForForce = () => {
    const variables = ['m','a','F','v','u','t']
    return (
        <FormulaFinder
            title='বল অধ্যায়ের সূত্র খোঁজ'
            variables={variables}
            formulas={forceFinderData}
            placeholder={getPlaceholderForForce}
        />
    );
};

export default FormulaFinderForForce;
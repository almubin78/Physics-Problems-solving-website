import React from 'react';
import GenericCalculator from '../CalculatorDesign/GenericCalculator';
import { lawsDetailsForForce } from '../../Data/forcesData';

const ForceCalculator = () => {
    const variables = ['বল','বন্দুকের_পশ্চাৎবেগ','মিলিত_বস্তুর_বেগ','মহাকর্ষ_বল']
    return (
        <GenericCalculator
            title='বল অধ্যায়ের ক্যালকুলেটর '
            variables={variables}
            lawsDetails={lawsDetailsForForce}
        />
    );
};

export default ForceCalculator;
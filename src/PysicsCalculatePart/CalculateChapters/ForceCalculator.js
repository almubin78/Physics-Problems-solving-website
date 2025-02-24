import React from 'react';
import { lawsDetailsForForce } from '../../Data/forcesData';
import { getPlaceholderForForce } from '../../commonLogics/placeholder/getPlaceholderForEveryChapter';

import GenericCalculator from '../CalculatorDesign/GenericCalculator';

const ForceCalculator = () => {
    const variables = ['বল','বন্দুকের_পশ্চাৎবেগ','মিলিত_বস্তুর_বেগ','মহাকর্ষ_বল']
    return (
        <GenericCalculator
            title='বল অধ্যায়ের ক্যালকুলেটর '
            variables={variables}
            lawsDetails={lawsDetailsForForce}
            placeholder={getPlaceholderForForce}
        />
    );
};

export default ForceCalculator;
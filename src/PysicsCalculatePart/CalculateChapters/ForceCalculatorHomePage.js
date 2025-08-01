import React from 'react';
import { lawsForForceData } from '../../PhysicsCalculatorData/lawsForForceData';
import { getPlaceholderForForce } from '../../commonLogics/placeholder/getPlaceholderForEveryChapter';

import GenericCalculator from '../CalculatorDesign/GenericCalculator';

const ForceCalculatorHomePage = () => {
    const variables = ['বল','বন্দুকের_পশ্চাৎবেগ','মিলিত_বস্তুর_বেগ','মহাকর্ষ_বল','আদি_গতিশক্তির_সমষ্টি','সংঘর্ষের_পর_একটি_বস্তুর_বেগ']
    return (
        <GenericCalculator
            title='বল অধ্যায়ের ক্যালকুলেটর '
            variables={variables}
            lawsDetails={lawsForForceData}
            placeholder={getPlaceholderForForce}
        />
    );
};

export default ForceCalculatorHomePage;
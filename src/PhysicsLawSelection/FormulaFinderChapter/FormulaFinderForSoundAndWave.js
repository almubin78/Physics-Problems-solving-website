import React from 'react';
import FormulaFinder from '../CommonComponent/FormulaFinder';
import { soundAndWaveFinderData } from '../../DataForFindingFormula/soundAndWaveFinderData';

const FormulaFinderForSoundAndWave = () => {
    const variables =['তরংগের_বেগ','তরংগের_কম্পাংক','তরংগের_পর্যায়কাল','তরংগদৈর্ঘ্য']
    return (
        <FormulaFinder
            title='শব্দ ও তরঙ্গ- অধ্যায়ের সূত্র খোঁজ'
            variables={variables}
            formulas={soundAndWaveFinderData}
        />
    );
};

export default FormulaFinderForSoundAndWave;
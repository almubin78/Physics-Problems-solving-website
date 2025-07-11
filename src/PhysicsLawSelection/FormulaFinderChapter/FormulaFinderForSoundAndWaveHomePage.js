import React from 'react';
import FormulaFinder from '../CommonComponent/FormulaFinder';
import { soundAndWaveFinderData } from '../../DataForFindingFormula/soundAndWaveFinderData';

const FormulaFinderForSoundAndWaveHomePage = () => {
    const variables =['তরংগের_বেগ','তরংগের_কম্পাংক','তরংগের_পর্যায়কাল','তরংগদৈর্ঘ্য','বায়ুর_তাপমাত্রা','কেলভিন_তাপমাত্রায়_শব্দের_বেগ','প্রতিফলকের_দূরত্ব','প্রতিফলকের_ন্যুনতম_দুরত্ব']
    return (
        <FormulaFinder
            title='শব্দ ও তরঙ্গ- অধ্যায়ের সূত্র খোঁজ'
            variables={variables}
            formulas={soundAndWaveFinderData}
        />
    );
};

export default FormulaFinderForSoundAndWaveHomePage;
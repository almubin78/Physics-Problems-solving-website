import React from 'react';
import { lawsForSoundAndWave } from '../../PhysicsCalculatorData/lawsForSoundAndWave';
import { getPlaceholderForSoundAndWave } from '../../commonLogics/placeholder/getPlaceholderForEveryChapter';
import GenericCalculator from '../CalculatorDesign/GenericCalculator';

const SoundAndWaveCalculatorHomePage = () => {
    const variables=['তরঙ্গের_বেগ','কম্পাংক','তরংগদৈর্ঘ্য']
    return (
        <GenericCalculator
            variables={ variables}
            title='শব্দ ও তরঙ্গ অধ্যায়ের ক্যালকুলেটর'
            lawsDetails={lawsForSoundAndWave}
            placeholder={getPlaceholderForSoundAndWave}


        />
    );
};

export default SoundAndWaveCalculatorHomePage;
import React from 'react';
import { soundAndWaveLaws } from '../../Data/lawsForSoundAndWave';
import { getPlaceholderForSoundAndWave } from '../../commonLogics/placeholder/getPlaceholderForEveryChapter';
import GenericCalculator from '../CalculatorDesign/GenericCalculator';

const SoundAndWaveCalculator = () => {
    const variables=['তরঙ্গের_বেগ','কম্পাংক','তরংগদৈর্ঘ্য']
    return (
        <GenericCalculator
            variables={ variables}
            title='শব্দ ও তরঙ্গ অধ্যায়ের ক্যালকুলেটর'
            lawsDetails={soundAndWaveLaws}
            placeholder={getPlaceholderForSoundAndWave}


        />
    );
};

export default SoundAndWaveCalculator;
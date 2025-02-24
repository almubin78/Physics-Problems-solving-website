import React from 'react';
import GenericCalculator from '../CalculatorDesign/GenericCalculator';
import { soundAndWaveLaws } from '../../Data/lawsForSoundAndWave';

const SoundAndWaveCalculator = () => {
    const variables=['তরঙ্গের_বেগ','কম্পাংক','তরংগদৈর্ঘ্য']
    return (
        <GenericCalculator
            variables={ variables}
            title='শব্দ ও তরঙ্গ অধ্যায়ের ক্যালকুলেটর'
            lawsDetails={soundAndWaveLaws}

        />
    );
};

export default SoundAndWaveCalculator;
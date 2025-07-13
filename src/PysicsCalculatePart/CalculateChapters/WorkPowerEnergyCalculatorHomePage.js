import React from "react";

import { getPlaceholderForWorkPowerEnergy } from "../../commonLogics/placeholder/getPlaceholderForEveryChapter";
import GenericCalculator from "../CalculatorDesign/GenericCalculator";
import { workPowerFinderData } from "../../DataForFindingFormula/workPowerFinderFormulas";

const WorkPowerEnergyCalculatorHomePage = () => {
    const variables = ['কাজ','বিভবশক্তি','গতিশক্তি']
  return (
    <GenericCalculator
      title="কাজ,ক্ষমতা ও শক্তি অধ্যায়ের গাণিতিক ক্যালকুলেটর"
      variables={variables}
      lawsDetails={workPowerFinderData}
      placeholder={getPlaceholderForWorkPowerEnergy}
    />
  );
};

export default WorkPowerEnergyCalculatorHomePage;

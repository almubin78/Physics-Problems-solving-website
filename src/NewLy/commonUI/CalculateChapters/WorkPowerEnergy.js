import React from "react";
import GenericCalculator from "../CalculatorDesign/GenericCalculator";
import { lawsForWorkPowerEnergy } from "../../Data/workPowerEnergy";

const WorkPowerEnergy = () => {
    const variables = ['কাজ','বিভবশক্তি','গতিশক্তি']
  return (
    <GenericCalculator
      title="কাজ,ক্ষমতা ও শক্তি অধ্যায়ের গাণিতিক ক্যালকুলেটর"
      variables={variables}
      lawsDetails={lawsForWorkPowerEnergy}
    />
  );
};

export default WorkPowerEnergy;

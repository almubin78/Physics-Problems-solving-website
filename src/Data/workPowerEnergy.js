export const lawsForWorkPowerEnergy = {
    কাজ: [
      {
        formula: "কাজ = F x s",
        inputs: ["F", "s"],
        resultInfo: "কাজের পরিমাণ:",
        unit: "জুল",
        calculate: (inputs)=> (inputs.F * inputs.s)
        
      },
    ],
    বিভবশক্তি: [
      {
        formula: "বিভবশক্তি = m x g x h",
        inputs: ["m", "h"],
        resultInfo: "বিভবশক্তি:",
        unit: "জুল",
        calculate: (inputs)=> (inputs.m * inputs.h * 9.81)
      },
    ],
    গতিশক্তি: [
      {
        formula: "গতিশক্তি = 1/2 x m x v^2",
        inputs: ["m", "v"],
        resultInfo: "গতিশক্তি: ",
        unit: "জুল",
        calculate: (inputs)=> (.5* inputs.m * inputs.v * inputs.v)
      },
    ],
  };
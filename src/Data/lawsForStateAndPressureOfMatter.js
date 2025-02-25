//lawsForStateAndPressureOfMatter
export const lawsForStateAndPressureOfMatter = {
    চাপ: [
      {
        formula: "P = F / A",
        inputs: ["F", "A"],
        resultInfo: "চাপের পরিমাণ:",
        unit: "প্যাসকেল বা N/m ^2",
        calculate:(inputs)=>(inputs.F / inputs.A)
      },
    ],
    ঘনত্ব: [
      {
        formula: "ρ = m / V",
        inputs: ["m", "V"],
        resultInfo: "বস্তুর ঘনত্বের পরিমাণ: ",
        unit: "Kg/m^3",
        calculate:(inputs)=>(inputs.m / inputs.V)
      },
    ],
  //   গভীরতা: [
  //     {
  //       formula: " h' = ",
  //       inputs: ["m", "v"],
  //       resultInfo: "গতিশক্তি: ",
  //       unit: "জুল",
  //     },
  //   ],
    প্লবতা: [
      {
        formula: "F'' = V x ρ x g",
        inputs: ["V", "ρ"],
        resultInfo: "প্লবতার মান: ",
        unit: "N",
        calculate:(inputs)=>(inputs.V * inputs.ρ * 9.81)
      },
    ],
    বস্তুর_ওজন: [
      {
        formula: "W = m x g",
        inputs: [ "m"],
        resultInfo: "বস্তুর ওজন: ",
        unit: "N",
        calculate:(inputs)=>(inputs.m * 9.81)
      },
    ],
    পিষ্টনে_প্রযুক্ত_বল: [
      {
        formula: "F1 = (F2*A1)/A2",
        inputs: [ "F2","A1","A2"],
        resultInfo: "পিষ্টনে প্রযুক্ত বল: ",
        unit: "N",
        calculate:(inputs)=>((inputs.F2 * inputs.A1)/inputs.A2)
      },
    ],
  };
  
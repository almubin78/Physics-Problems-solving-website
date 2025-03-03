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
      {
        formula: "P = hρg",
        inputs: ["h", "ρ"],
        resultInfo: "চাপের পরিমাণ:",
        unit: "প্যাসকেল বা N/m ^2",
        calculate:(inputs)=>(inputs.h * inputs.ρ * 9.8)
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
 
    প্লবতা: [
      {
        formula: "F'' = V x ρ x g",
        inputs: ["V", "ρ"],
        resultInfo: "প্লবতার মান: ",
        unit: "N",
        calculate:(inputs)=>(inputs.V * inputs.ρ * 9.8)
      },
    ],
    বস্তুর_ওজন: [
      {
        formula: "W = m x g",
        inputs: [ "m"],
        resultInfo: "বস্তুর ওজন: ",
        unit: "N",
        calculate:(inputs)=>(inputs.m * 9.8)
      },
    ],
    তরলে_বস্তুর_ওজন: [
      {
        formula: "W = mg - Vρg",
        inputs: [ "m","V",'ρ'],
        resultInfo: "বস্তুর ওজন: ",
        unit: "N",
        calculate:(inputs)=>9.8*(inputs.m  - (inputs.V * inputs.ρ ))
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











// lawsForStateAndPressureOfMatter
// export const lawsForStateAndPressureOfMatter = {
//   চাপ: [
//     {
//       formula: "P = F / A",
//       inputs: ["F", "A"],
//       resultInfo: "চাপের পরিমাণ:",
//       unit: "প্যাসেকেল বা N/m<sup>2</sup>",
//       calculate: (inputs) => inputs.F / inputs.A
//     },
//     {
//       formula: "P = hρg",
//       inputs: ["h", "ρ"],
//       resultInfo: "চাপের পরিমাণ:",
//       unit: "প্যাসেকেল বা N/m<sup>2</sup>",
//       calculate: (inputs) => inputs.h * inputs.ρ * 9.8
//     },
//   ],
//   ঘনত্ব: [
//     {
//       formula: "ρ = m / V",
//       inputs: ["m", "V"],
//       resultInfo: "বস্তুর ঘনত্বের পরিমাণ:",
//       unit: "Kg/m<sup>3</sup>",
//       calculate: (inputs) => inputs.m / inputs.V
//     },
//   ],

//   প্লবতা: [
//     {
//       formula: "F'' = V × ρ × g",
//       inputs: ["V", "ρ"],
//       resultInfo: "প্লবতার মান:",
//       unit: "N",
//       calculate: (inputs) => inputs.V * inputs.ρ * 9.8
//     },
//   ],
//   বস্তুর_ওজন: [
//     {
//       formula: "W = m × g",
//       inputs: ["m"],
//       resultInfo: "বস্তুর ওজন:",
//       unit: "N",
//       calculate: (inputs) => inputs.m * 9.8
//     },
//   ],
//   তরলে_বস্তুর_ওজন: [
//     {
//       formula: "W = mg - Vρg",
//       inputs: ["m", "V", "ρ"],
//       resultInfo: "বস্তুর ওজন:",
//       unit: "N",
//       calculate: (inputs) => 9.8 * (inputs.m - (inputs.V * inputs.ρ))
//     },
//   ],
//   পিষ্টনে_প্রযুক্ত_বল: [
//     {
//       formula: "F<sub>1</sub> = (F<sub>2</sub> A<sub>1</sub>) / A<sub>2</sub>",
//       inputs: ["F<sub>2</sub>", "A<sub>1</sub>", "A<sub>2</sub>"],
//       resultInfo: "পিষ্টনে প্রযুক্ত বল:",
//       unit: "N",
//       calculate: (inputs) => (inputs["F<sub>2</sub>"] * inputs["A<sub>1</sub>"]) / inputs["A<sub>2</sub>"]
//     },
//   ],
// };


  
export const lawsDetailsForForce = {
    বল: [
      {
        formula: "F = ma",
        inputs: ["m", "a"],
        resultInfo: "নির্নেয় বলের মান:",
        unit: "N",
        calculate: (inputs)=> inputs.m * inputs.a
      },
      {
        formula: "F = m(v-u)/t",
        inputs: ["m", "v", "u", "t"],
        resultInfo: "নির্নেয় বলের মান:",
        unit: "N",
        calculate: (inputs)=> (inputs.m * (inputs.v - inputs.u)/inputs.t)
      },
    ],
    বন্দুকের_পশ্চাৎবেগ: [
      {
        formula: "v2 = -( m1 * v1 )/m2",
        inputs: ["m1", "v1", "m2"],
        resultInfo: "বন্দুকের পশ্চাৎবেগ: ",
        unit: "m/s",
        calculate: (v) => (-v.m1 * v.v1) / v.m2,
      },
    ],
    মিলিত_বস্তুর_বেগ: [
      {
        formula: "v = (m1 * u1 - m2 * u2)/(m1+m2)",
        inputs: ["m1", "m2", "u1", "u2"],
        resultInfo: "u1 কে ঋণাত্মক ধরে,  মিলিত বস্তুদ্বয়ের বেগ: ",
        unit: "m/s",
        calculate:(inputValues)=>(inputValues.m2 * inputValues.u2 - inputValues.m1 * inputValues.u1) /
        (inputValues.m2 + inputValues.m1)
      },
    ],
    মহাকর্ষ_বল: [
      {
        formula: "F = (GMm)/r^2",
        inputs: ["M", "m", "r"],
        resultInfo: "বস্তু দ্বয়ের মধ্যে ক্রিয়াশীল মহাকর্ষ বলঃ  ",
        unit: "N",
        calculate:(inputValues)=>(6.673e-11 * inputValues.M * inputValues.m) /
        (inputValues.r * inputValues.r)
      },
    ],
  };




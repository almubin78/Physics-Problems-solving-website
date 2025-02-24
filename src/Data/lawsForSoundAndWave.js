export const soundAndWaveLaws = {
    তরঙ্গের_বেগ: [
      {
        formula: "v = fλ",
        inputs: ["f", "λ"],
        resultInfo: "তরংগের বেগ হবে:",
        unit: "m/s",
        calculate:(inputValues=>inputValues.f * inputValues.λ)
      },
      {
        formula: "v = λ/T",
        inputs: ["T", "λ"],
        resultInfo: "তরংগের বেগ হবে:",
        unit: "m/s",
        calculate:(inputValues=>inputValues.λ / inputValues.T)
      },
    ],
    কম্পাংক: [
      {
        formula: "f = v/λ",
        inputs: ["v", "λ"],
        resultInfo: "কম্পাংকের মান:",
        unit: "Hz বা 1/s",
        calculate:(inputValues=>inputValues.v / inputValues.λ)
      },
      {
        formula: "f = 1/T",
        inputs: ["T"],
        resultInfo: "কম্পাংকের মান:",
        unit: "Hz বা 1/s",
        calculate:(inputValues=>1 / inputValues.T)
      },
    ],
    তরংগদৈর্ঘ্য: [
      {
        formula: "λ = v/f",
        inputs: ["v", "f"],
        resultInfo: "তরংগদৈর্ঘ্য হবে:",
        unit: "মিটার (m)",
        calculate:(inputValues=>inputValues.v / inputValues.f)
      },
    ],
  };
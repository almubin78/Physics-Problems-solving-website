export const lawsForMotionData = {
  অতিক্রান্ত_দূরত্ব: [
    {
      formula: "s = ut + 0.5 * a * t^2",
      inputs: ["u", "t", "a"],
      resultInfo: "Final Result for S is:",
      unit: "m",
      calculate: (inputs) => inputs.u * inputs.t + 0.5 * inputs.a * inputs.t ** 2, // Calculation
    },
    {
      formula: "s = (v^2 - u^2) / (2a)",
      inputs: ["u", "v", "a"],
      resultInfo: "Final Result for S is:",
      unit: "m",
      calculate: (inputs) => (inputs.v ** 2 - inputs.u ** 2) / (2 * inputs.a), // Calculation
    },
    {
      formula: "s = (v + u)t / 2",
      inputs: ["u", "t", "v"],
      resultInfo: "Final Result for S is:",
      unit: "m",
      calculate: (inputs) => ((inputs.v + inputs.u) * inputs.t) / 2, // Calculation
    },
    {
      formula: "s = vt (সমবেগে গতিশীল হলে)",
      inputs: ["v", "t"],
      resultInfo: "Final Result for S is:",
      unit: "m",
      calculate: (inputs) => inputs.v * inputs.t, // Calculation
    },
  ],
  শেষবেগ: [
    {
      formula: "v = u + at",
      inputs: ["u", "t", "a"],
      resultInfo: "Final Result for V is:",
      unit: "m/s",
      calculate: (inputs) => inputs.u + inputs.a * inputs.t, // Calculation
    },
    {
      formula: "v = s / t (if no acceleration)",
      inputs: ["s", "t"],
      resultInfo: "Final Result for V is:",
      unit: "m/s",
      calculate: (inputs) => inputs.s / inputs.t, // Calculation
    },
  ],
  ত্বরণ: [
    {
      formula: "a = (v - u) / t",
      inputs: ["u", "t", "v"],
      resultInfo: "Final Result for a is:",
      unit: "m/s^2",
      calculate: (inputs) => (inputs.v - inputs.u) / inputs.t, // Calculation
    },
    {
      formula: "a = (v^2 - u^2) / (2s)",
      inputs: ["u", "s", "v"],
      resultInfo: "Final Result for a is:",
      unit: "m/s^2",
      calculate: (inputs) => (inputs.v ** 2 - inputs.u ** 2) / (2 * inputs.s), // Calculation
    },
  ],
  সময়: [
    {
      formula: "t = (v - u) / a",
      inputs: ["u", "v", "a"],
      resultInfo: "Final Result for t is:",
      unit: "second",
      calculate: (inputs) => (inputs.v - inputs.u) / inputs.a, // Calculation
    },
    {
      formula: "t = s / v (if no acceleration)",
      inputs: ["s", "v"],
      resultInfo: "Final Result for t is:",
      unit: "second",
      calculate: (inputs) => inputs.s / inputs.v, // Calculation
    },
    {
      formula: "t = sqrt((2s) / a) (if u = 0)",
      inputs: ["s", "a"],
      resultInfo: "Final Result for t is:",
      unit: "second",
      calculate: (inputs) => Math.sqrt((2 * inputs.s) / inputs.a), // Calculation
    },
  ],
  আদিবেগ: [
    {
      formula: "u = v - at",
      inputs: ["v", "t", "a"],
      resultInfo: "Final Result for u is:",
      unit: "m/s",
      calculate: (inputs) => inputs.v - inputs.a * inputs.t, // Calculation
    },
    {
      formula: "u = (s - 0.5 * a * t^2) / t",
      inputs: ["s", "t", "a"],
      resultInfo: "Final Result for u is:",
      unit: "m/s",
      calculate: (inputs) => (inputs.s - 0.5 * inputs.a * inputs.t ** 2) / inputs.t, // Calculation
    },
    {
      formula: "u = sqrt(v^2 - 2as)",
      inputs: ["v", "a", "s"],
      resultInfo: "Final Result for u is:",
      unit: "m/s",
      calculate: (inputs) => Math.sqrt(inputs.v ** 2 - 2 * inputs.a * inputs.s), // Calculation
    },
  ],
};
export const lawsDetailsForMotion = {
  s: [
    {
      formula: "s = ut + 0.5 * a * t^2",
      inputs: ["u", "t", "a"],
      resultInfo: "Final Result for S is:",
      unit: "m",
    },
    // {
    //   formula: "s = 0.5 * a * t^2 (if u = 0)",
    //   inputs: ["a", "t"],
    //   resultInfo: "Final Result for S is:",
    //   unit: "m",
    // },
    {
      formula: "s = (v^2 - u^2) / (2a)",
      inputs: ["u", "v", "a"],
      resultInfo: "Final Result for S is:",
      unit: "m",
    },
    {
      formula: `s = (v + u)t / 2`,
      inputs: ["u", "t", "v"],
      resultInfo: "Final Result for S is:",
      unit: "m",
    },
    {
      formula: "s = vt (সমবেগে গতিশীল হলে)",
      inputs: ["v", "t"],
      resultInfo: "Final Result for S is:",
      unit: "m",
    },
  ],
  v: [
    {
      formula: "v = u + at",
      inputs: ["u", "t", "a"],
      resultInfo: "Final Result for V is:",
      unit: "m/s",
    },
    {
      formula: "v = s / t (if no acceleration)",
      inputs: ["s", "t"],
      resultInfo: "Final Result for V is:",
      unit: "m/s",
    },
  ],
  a: [
    {
      formula: "a = (v - u) / t",
      inputs: ["u", "t", "v"],
      resultInfo: "Final Result for a is:",
      unit: "m/s^2",
    },
    {
      formula: "a = (v^2 - u^2) / (2s)",
      inputs: ["u", "s", "v"],
      resultInfo: "Final Result for a is:",
      unit: "m/s^2",
    },
  ],
  t: [
    {
      formula: "t = (v - u) / a",
      inputs: ["u", "v", "a"],
      resultInfo: "Final Result for t is:",
      unit: "second",
    },
    {
      formula: "t = s / v (if no acceleration)",
      inputs: ["s", "v"],
      resultInfo: "Final Result for t is:",
      unit: "second",
    },
    {
      formula: "t = sqrt((2s) / a) (if u = 0)",
      inputs: ["s", "a"],
      resultInfo: "Final Result for t is:",
      unit: "second",
    },
  ],
  u: [
    {
      formula: "u = v - at",
      inputs: ["v", "t", "a"],
      resultInfo: "Final Result for u is:",
      unit: "m/s",
    },
    {
      formula: "u = (s - 0.5 * a * t^2) / t",
      inputs: ["s", "t", "a"],
      resultInfo: "Final Result for u is:",
      unit: "m/s",
    },
    {
      formula: "u = sqrt(v^2 - 2as)",
      inputs: ["v", "a", "s"],
      resultInfo: "Final Result for u is:",
      unit: "m/s",
    },
  ],
};



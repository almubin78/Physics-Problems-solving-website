export const soundAndWaveFinderData = [
  // { formula: 'v = fλ', required: ['f', 'λ'], compute: (vals) => (vals.f * vals.λ) },
  {
    formula: "v = fλ",
    required: ["তরংগের_কম্পাংক", "তরংগদৈর্ঘ্য"],
    compute: (vals) => vals.তরংগের_কম্পাংক * vals.তরংগদৈর্ঘ্য,
  },
  {
    formula: "v = Vo x √(T/To) ",
    required: ['বায়ুর_তাপমাত্রা'],
    compute: (vals) => 330 *( Math.sqrt( vals.বায়ুর_তাপমাত্রা))/16.523,
  },
  {
    formula: "v = λ/T",
    required: ["তরংগদৈর্ঘ্য", "তরংগের_পর্যায়কাল"],
    exclude: ["বায়ুর_তাপমাত্রা,তরংগের_বেগ"],
    // exclude: ["a"],
    compute: (vals) => vals.তরংগদৈর্ঘ্য / vals.তরংগের_পর্যায়কাল,
  },
  {
    formula: "λ=v/T",
    required: ["তরংগের_বেগ", "তরংগের_পর্যায়কাল"],
    exclude: [],
    compute: (vals) => vals.তরংগের_বেগ / vals.তরংগের_পর্যায়কাল,
  },
  {
    formula: "f = 1/T",
    required: ["তরংগের_পর্যায়কাল"],
    exclude: ["v"],
    compute: (vals) => 1 / vals.তরংগের_পর্যায়কাল,
  },
  {
    formula: "T = 1/f",
    required: ["তরংগের_কম্পাংক"],
    exclude: [""],
    compute: (vals) => 1 / vals.তরংগের_কম্পাংক,
  },
];

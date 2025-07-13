export const motionsFinderData = [
  {
    formula: "a = (v - u) / t",
    required: ["u", "v", "t"],
    exclude: ["a", "s"],
    compute: (vals) => (vals.v - vals.u) / vals.t,
    variables: {
      u: { label: "আদি বেগ (u)", placeholder: "m/s", unit: "m/s" },
      v: { label: "শেষ বেগ (v)", placeholder: "m/s", unit: "m/s" },
      t: { label: "সময় (t)", placeholder: "সেকেন্ড", unit: "s" },
    },
  },
  {
    formula: "a = (v² - u²) / 2s",
    required: ["u", "v", "s"],
    exclude: ["a", "t"],
    compute: (vals) => (vals.v ** 2 - vals.u ** 2) / (2 * vals.s),
    variables: {
      u: { label: "আদি বেগ (u)", placeholder: "m/s", unit: "m/s" },
      v: { label: "শেষ বেগ (v)", placeholder: "m/s", unit: "m/s" },
      s: { label: "অবস্থান পরিবর্তন (s)", placeholder: "মিটার", unit: "m" },
    },
  },
  {
    formula: "s = ut + 0.5at² (a = (v - u) / t)",
    required: ["u", "v", "t"],
    exclude: ["a", "s"],
    compute: (vals) =>
      vals.u * vals.t + 0.5 * vals.t ** 2 * ((vals.v - vals.u) / vals.t),
    variables: {
      u: { label: "আদি বেগ (u)", placeholder: "m/s", unit: "m/s" },
      v: { label: "শেষ বেগ (v)", placeholder: "m/s", unit: "m/s" },
      t: { label: "সময় (t)", placeholder: "সেকেন্ড", unit: "s" },
    },
  },
  {
    formula: "s = ((u + v) / 2) * t",
    required: ["u", "v", "t"],
    exclude: ["a", "s"],
    compute: (vals) => ((vals.u + vals.v) / 2) * vals.t,
    variables: {
      u: { label: "আদি বেগ (u)", placeholder: "m/s", unit: "m/s" },
      v: { label: "শেষ বেগ (v)", placeholder: "m/s", unit: "m/s" },
      t: { label: "সময় (t)", placeholder: "সেকেন্ড", unit: "s" },
    },
  },
  {
    formula: "s = ut + 0.5at²",
    required: ["u", "t", "a"],
    exclude: ["s"],
    compute: (vals) => vals.u * vals.t + 0.5 * vals.a * vals.t ** 2,
    variables: {
      u: { label: "আদি বেগ (u)", placeholder: "m/s", unit: "m/s" },
      t: { label: "সময় (t)", placeholder: "সেকেন্ড", unit: "s" },
      a: { label: "ত্বরণ (a)", placeholder: "m/s²", unit: "m/s²" },
    },
  },
  {
    formula: "s = 0.5at²",
    required: ["t", "a"],
    exclude: ["v", "s", "u"],
    compute: (vals) => 0.5 * vals.a * vals.t ** 2,
    variables: {
      t: { label: "সময় (t)", placeholder: "সেকেন্ড", unit: "s" },
      a: { label: "ত্বরণ (a)", placeholder: "m/s²", unit: "m/s²" },
    },
  },
  {
    formula: "s = vt",
    required: ["v", "t"],
    exclude: ["u"],
    compute: (vals) => vals.v * vals.t,
    variables: {
      v: { label: "বেগ (v)", placeholder: "m/s", unit: "m/s" },
      t: { label: "সময় (t)", placeholder: "সেকেন্ড", unit: "s" },
    },
  },
  {
    formula: "s = (v² - u²) / 2a",
    required: ["u", "v", "a"],
    exclude: [],
    compute: (vals) => (vals.v ** 2 - vals.u ** 2) / (2 * vals.a),
    variables: {
      u: { label: "আদি বেগ (u)", placeholder: "m/s", unit: "m/s" },
      v: { label: "শেষ বেগ (v)", placeholder: "m/s", unit: "m/s" },
      a: { label: "ত্বরণ (a)", placeholder: "m/s²", unit: "m/s²" },
    },
  },
  {
    formula: "v² = u² + 2as",
    required: ["u", "a", "s"],
    exclude: [],
    compute: (vals) => Math.sqrt(vals.u ** 2 + 2 * vals.a * vals.s),
    variables: {
      u: { label: "আদি বেগ (u)", placeholder: "m/s", unit: "m/s" },
      a: { label: "ত্বরণ (a)", placeholder: "m/s²", unit: "m/s²" },
      s: { label: "অবস্থান পরিবর্তন (s)", placeholder: "মিটার", unit: "m" },
    },
  },
  {
    formula: "v = s / t",
    required: ["s", "t"],
    exclude: ["v", "a"],
    compute: (vals) => vals.s / vals.t,
    variables: {
      s: { label: "অবস্থান পরিবর্তন (s)", placeholder: "মিটার", unit: "m" },
      t: { label: "সময় (t)", placeholder: "সেকেন্ড", unit: "s" },
    },
  },
  {
    formula: "v = at",
    required: ["a", "t"],
    exclude: ["s", "v", "u"],
    compute: (vals) => vals.a * vals.t,
    variables: {
      a: { label: "ত্বরণ (a)", placeholder: "m/s²", unit: "m/s²" },
      t: { label: "সময় (t)", placeholder: "সেকেন্ড", unit: "s" },
    },
  },
  {
    formula: "v = u + at",
    required: ["a", "t", "u"],
    exclude: ["s", "v"],
    compute: (vals) => vals.u + vals.a * vals.t,
    variables: {
      u: { label: "আদি বেগ (u)", placeholder: "m/s", unit: "m/s" },
      a: { label: "ত্বরণ (a)", placeholder: "m/s²", unit: "m/s²" },
      t: { label: "সময় (t)", placeholder: "সেকেন্ড", unit: "s" },
    },
  },
  {
    formula: "t = s / v",
    required: ["s", "v"],
    exclude: ["a", "t"],
    compute: (vals) => vals.s / vals.v,
    variables: {
      s: { label: "অবস্থান পরিবর্তন (s)", placeholder: "মিটার", unit: "m" },
      v: { label: "বেগ (v)", placeholder: "m/s", unit: "m/s" },
      t: { label: "সময় (t)", placeholder: "s", unit: "s" },
    },
  },
];

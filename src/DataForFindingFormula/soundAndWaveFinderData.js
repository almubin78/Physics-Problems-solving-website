export const soundAndWaveFinderData = [
  {
    formula: "v = fλ",
    required: ["তরংগের_কম্পাংক", "তরংগদৈর্ঘ্য"],
    exclude: [""],
    compute: (vals) => vals.তরংগের_কম্পাংক * vals.তরংগদৈর্ঘ্য,
    variables: {
      তরংগের_কম্পাংক: {
        label: "তরংগের কম্পাংক (f)",
        placeholder: "হার্টজ (Hz) এককে প্রবেশ করান",
        unit: "Hz"
      },
      তরংগদৈর্ঘ্য: {
        label: "তরংগদৈর্ঘ্য (λ)",
        placeholder: "মিটার (m) এককে প্রবেশ করান",
        unit: "m"
      }
    }
  },
  {
    formula: "v = Vo x √(T/To)",
    required: ['বায়ুর_তাপমাত্রা'],
    exclude: [''],
    compute: (vals) => 330 * (Math.sqrt(vals.বায়ুর_তাপমাত্রা))/16.523,
    variables: {
      বায়ুর_তাপমাত্রা: {
        label: "বায়ুর তাপমাত্রা (T)",
        placeholder: "কেলভিন (K) এককে প্রবেশ করান",
        unit: "K"
      }
    }
  },
  {
    formula: "v = λ/T",
    required: ["তরংগদৈর্ঘ্য", "তরংগের_পর্যায়কাল"],
    exclude: [""],
    compute: (vals) => vals.তরংগদৈর্ঘ্য / vals.তরংগের_পর্যায়কাল,
    variables: {
      তরংগদৈর্ঘ্য: {
        label: "তরংগদৈর্ঘ্য (λ)",
        placeholder: "মিটার (m) এককে প্রবেশ করান",
        unit: "m"
      },
      তরংগের_পর্যায়কাল: {
        label: "তরংগের পর্যায়কাল (T)",
        placeholder: "সেকেন্ড (s) এককে প্রবেশ করান",
        unit: "s"
      }
    }
  },
  {
    formula: "λ = v/T",
    required: ["তরংগের_বেগ", "তরংগের_পর্যায়কাল"],
    exclude: [""],
    compute: (vals) => vals.তরংগের_বেগ / vals.তরংগের_পর্যায়কাল,
    variables: {
      তরংগের_বেগ: {
        label: "তরংগের বেগ (v)",
        placeholder: "মিটার/সেকেন্ড (m/s) এককে প্রবেশ করান",
        unit: "m/s"
      },
      তরংগের_পর্যায়কাল: {
        label: "তরংগের পর্যায়কাল (T)",
        placeholder: "সেকেন্ড (s) এককে প্রবেশ করান",
        unit: "s"
      }
    }
  },
  {
    formula: "f = 1/T",
    required: ["তরংগের_পর্যায়কাল"],
    exclude: ["বায়ুর_তাপমাত্রা"],
    compute: (vals) => 1 / vals.তরংগের_পর্যায়কাল,
    variables: {
      তরংগের_পর্যায়কাল: {
        label: "তরংগের পর্যায়কাল (T)",
        placeholder: "সেকেন্ড (s) এককে প্রবেশ করান",
        unit: "s"
      }
    }
  },
  {
    formula: "f = (Vo/λ) x √(T/To)",
    required: ["বায়ুর_তাপমাত্রা", "তরংগদৈর্ঘ্য"],
    exclude: ["তরংগের_বেগ"],
    compute: (vals) => ((330 / vals.তরংগদৈর্ঘ্য) * Math.sqrt(vals.বায়ুর_তাপমাত্রা / 273)),
    variables: {
      বায়ুর_তাপমাত্রা: {
        label: "বায়ুর তাপমাত্রা (T)",
        placeholder: "কেলভিন (K) এককে প্রবেশ করান",
        unit: "K"
      },
      তরংগদৈর্ঘ্য: {
        label: "তরংগদৈর্ঘ্য (λ)",
        placeholder: "মিটার (m) এককে প্রবেশ করান",
        unit: "m"
      }
    }
  },
  {
    formula: "λ = (Vo/f) x √(T/To)",
    required: ["তরংগের_কম্পাংক", 'বায়ুর_তাপমাত্রা'],
    exclude: [""],
    compute: (vals) => ((330/vals.তরংগের_কম্পাংক)*(Math.sqrt(vals.বায়ুর_তাপমাত্রা / 273))),
    variables: {
      তরংগের_কম্পাংক: {
        label: "তরংগের কম্পাংক (f)",
        placeholder: "হার্টজ (Hz) এককে প্রবেশ করান",
        unit: "Hz"
      },
      বায়ুর_তাপমাত্রা: {
        label: "বায়ুর তাপমাত্রা (T)",
        placeholder: "কেলভিন (K) এককে প্রবেশ করান",
        unit: "K"
      }
    }
  },
  {
    formula: "T = 1/f",
    required: ["তরংগের_কম্পাংক"],
    exclude: [""],
    compute: (vals) => 1 / (vals.তরংগের_কম্পাংক),
    variables: {
      তরংগের_কম্পাংক: {
        label: "তরংগের কম্পাংক (f)",
        placeholder: "হার্টজ (Hz) এককে প্রবেশ করান",
        unit: "Hz"
      }
    }
  },
];
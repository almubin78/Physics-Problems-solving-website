export const workPowerFinderData = [
  // Work Formulas
  {
    formula: "W = F·s·cosθ",
    required: ["F", "s"],
    exclude: ["P", "t"],
    compute: (vals) => vals.F * vals.s * (vals.θ ? Math.cos(vals.θ * Math.PI / 180) : 1),
    variables: {
      F: {
        label: "বল (F)",
        placeholder: "নিউটন (N)",
        unit: "N"
      },
      s: {
        label: "সরণ (s)",
        placeholder: "মিটার (m)",
        unit: "m"
      },
      θ: {
        label: "কোণ (θ)",
        placeholder: "ডিগ্রী (optional)",
        unit: "°"
      }
    }
  },
  {
    formula: "W = ΔE",
    required: ["E"],
    exclude: ["F"],
    compute: (vals) => vals.E,
    variables: {
      E: {
        label: "শক্তির পরিবর্তন (ΔE)",
        placeholder: "জুল (J)",
        unit: "J"
      }
    }
  },

  // Power Formulas
  {
    formula: "P = W/t",
    required: ["W", "t"],
    exclude: ["F"],
    compute: (vals) => vals.W / vals.t,
    variables: {
      W: {
        label: "কৃত কাজ (W)",
        placeholder: "জুল (J)",
        unit: "J"
      },
      t: {
        label: "সময় (t)",
        placeholder: "সেকেন্ড (s)",
        unit: "s"
      }
    }
  },
  {
    formula: "P = F·v",
    required: ["F", "v"],
    exclude: ["W"],
    compute: (vals) => vals.F * vals.v,
    variables: {
      F: {
        label: "বল (F)",
        placeholder: "নিউটন (N)",
        unit: "N"
      },
      v: {
        label: "বেগ (v)",
        placeholder: "মিটার/সেকেন্ড (m/s)",
        unit: "m/s"
      }
    }
  },

  // Energy Formulas (from your data)
  {
    formula: "E_k = ½mv²",
    required: ["m", "v"],
    exclude: ["h"],
    compute: (vals) => 0.5 * vals.m * Math.pow(vals.v, 2),
    variables: {
      m: {
        label: "ভর (m)",
        placeholder: "কিলোগ্রাম (kg)",
        unit: "kg"
      },
      v: {
        label: "বেগ (v)",
        placeholder: "মিটার/সেকেন্ড (m/s)",
        unit: "m/s"
      }
    }
  },
  {
    formula: "E_p = mgh",
    required: ["m", "h"],
    exclude: ["v"],
    compute: (vals) => vals.m * 9.8 * vals.h,
    variables: {
      m: {
        label: "ভর (m)",
        placeholder: "কিলোগ্রাম (kg)",
        unit: "kg"
      },
      h: {
        label: "উচ্চতা (h)",
        placeholder: "মিটার (m)",
        unit: "m"
      },
      g: {
        label: "মাধ্যাকর্ষণ (g)",
        placeholder: "9.8 m/s² (default)",
        unit: "m/s²"
      }
    }
  },
  {
    formula: "E = Pt",
    required: ["P", "t"],
    exclude: ["m"],
    compute: (vals) => vals.P * vals.t,
    variables: {
      P: {
        label: "ক্ষমতা (P)",
        placeholder: "ওয়াট (W)",
        unit: "W"
      },
      t: {
        label: "সময় (t)",
        placeholder: "সেকেন্ড (s)",
        unit: "s"
      }
    }
  }
];
export const forceFinderData = [
  {
    formula: "F = ma",
    required: ["m", "a"],
    exclude: [],
    compute: (vals) => vals.m * vals.a,
    variables: {
      m: {
        label: "ভর (m)",
        placeholder: "কিলোগ্রাম (kg) এককে প্রবেশ করান",
        unit: "kg"
      },
      a: {
        label: "ত্বরণ (a)",
        placeholder: "m/s² এককে প্রবেশ করান",
        unit: "m/s²"
      }
    }
  },
  {
    formula: "F = m(v - u) / t",
    required: ["m", "v", "u", "t"],
    exclude: ["a"],
    compute: (vals) => vals.m * (vals.v - vals.u) / vals.t,
    variables: {
      m: {
        label: "ভর (m)",
        placeholder: "কিলোগ্রাম (kg) এককে প্রবেশ করান",
        unit: "kg"
      },
      v: {
        label: "শেষ বেগ (v)",
        placeholder: "m/s এককে প্রবেশ করান",
        unit: "m/s"
      },
      u: {
        label: "আদি বেগ (u)",
        placeholder: "m/s এককে প্রবেশ করান",
        unit: "m/s"
      },
      t: {
        label: "সময় (t)",
        placeholder: "সেকেন্ড (s) এককে প্রবেশ করান",
        unit: "s"
      }
    }
  },
  {
    formula: "a = F / m",
    required: ["F", "m"],
    exclude: [],
    compute: (vals) => vals.F / vals.m,
    variables: {
      F: {
        label: "বল (F)",
        placeholder: "নিউটন (N) এককে প্রবেশ করান",
        unit: "N"
      },
      m: {
        label: "ভর (m)",
        placeholder: "কিলোগ্রাম (kg) এককে প্রবেশ করান",
        unit: "kg"
      }
    }
  },
  {
    formula: "a = (v - u) / t",
    required: ["v", "u", "t"],
    exclude: [],
    compute: (vals) => (vals.v - vals.u) / vals.t,
    variables: {
      v: {
        label: "শেষ বেগ (v)",
        placeholder: "m/s এককে প্রবেশ করান",
        unit: "m/s"
      },
      u: {
        label: "আদি বেগ (u)",
        placeholder: "m/s এককে প্রবেশ করান",
        unit: "m/s"
      },
      t: {
        label: "সময় (t)",
        placeholder: "সেকেন্ড (s) এককে প্রবেশ করান",
        unit: "s"
      }
    }
  }
];

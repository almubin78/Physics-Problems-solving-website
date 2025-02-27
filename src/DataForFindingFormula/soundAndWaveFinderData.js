export const soundAndWaveFinderData = [
    // { formula: 'v = fλ', required: ['f', 'λ'], compute: (vals) => (vals.f * vals.λ) },
    { formula: 'v = fλ', required: ['তরংগের_কম্পাংক', 'তরংগদৈর্ঘ্য'], compute: (vals) => (vals.তরংগের_কম্পাংক * vals.তরংগদৈর্ঘ্য) },
    { formula: 'v = λ/T', required: ['λ','T'],exclude:['a'] ,compute: (vals) => (vals.λ/vals.T) },
    { formula: 'a = F/m', required: ['F','m'],exclude:[] ,compute: (vals) => (vals.F /vals.m) },
    { formula: 'a = (v-u)/t', required: ['v','u','t'],exclude:[''] ,compute: (vals) => (vals.F /vals.m) },
    
  ];
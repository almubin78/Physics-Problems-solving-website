export const soundAndWaveFinderData = [
    // { formula: 'v = fλ', required: ['f', 'λ'], compute: (vals) => (vals.f * vals.λ) },
    { formula: 'v = fλ', required: ['তরংগের_কম্পাংক', 'তরংগদৈর্ঘ্য'], compute: (vals) => (vals.তরংগের_কম্পাংক * vals.তরংগদৈর্ঘ্য) },
    { formula: 'v = λ/T', required: ['তরংগদৈর্ঘ্য','তরংগের_পর্যায়কাল'],exclude:['a'] ,compute: (vals) => (vals.তরংগদৈর্ঘ্য/vals.তরংগের_পর্যায়কাল) },
    { formula: 'λ=v/T', required: ['তরংগের_বেগ','তরংগের_পর্যায়কাল'],exclude:[] ,compute: (vals) => (vals.তরংগের_বেগ /vals.তরংগের_পর্যায়কাল) },
    { formula: 'f = 1/T', required: ['তরংগের_পর্যায়কাল'],exclude:[''] ,compute: (vals) => (1 /vals.তরংগের_পর্যায়কাল) },
    { formula: 'T = 1/f', required: ['তরংগের_কম্পাংক'],exclude:[''] ,compute: (vals) => (1 /vals.তরংগের_কম্পাংক) },
    
  ];
export const forceFinderData = [
    { formula: 'F = ma', required: ['m', 'a'], compute: (vals) => (vals.m * vals.a) },
    { formula: 'F = m(v-u)/t', required: ['m', 'v','u','t'],exclude:['a'] ,compute: (vals) => (vals.m * (vals.v - vals.u)/vals.t) },
    { formula: 'a = F/m', required: ['F','m'],exclude:[] ,compute: (vals) => (vals.F /vals.m) },
    { formula: 'a = (v-u)/t', required: ['v','u','t'],exclude:[''] ,compute: (vals) => (vals.F /vals.m) },
    
  ];
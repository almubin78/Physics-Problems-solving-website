export const motionsFinderData = [
    { formula: 'a = (v - u) / t', required: ['u', 'v', 't'], compute: (vals) => (vals.v - vals.u) / vals.t },
    { formula: 'a = ((v^2 - u^2) / 2s)', required: ['u', 'v', 's'], compute: (vals) => ((vals.v * vals.v - vals.u * vals.u) / (2 * vals.s)) },
    { formula: 's = (ut + 0.5*a * t^2) এখানে a = (v-u)/t', required: ['u', 'v', 't'], compute: (vals) => (vals.u * vals.t + 0.5 * vals.t * vals.t * ((vals.v - vals.u) / vals.t)) },
    { formula: 's = ((u + v) / 2) * t', required: ['u', 'v', 't'], compute: (vals) => ((vals.u + vals.v) / 2) * vals.t },
    { formula: 's = ut + 0.5 * a * t^2', required: ['u', 't', 'a'], compute: (vals) => vals.u * vals.t + 0.5 * vals.a * vals.t ** 2 },
    { formula: 's =  0.5 * a * t^2', required: [ 't', 'a'], compute: (vals) =>  0.5 * vals.a * vals.t ** 2 ,exclude: ['u']},
    { formula: 's = vt', required: ['v', 't'], compute: (vals) => vals.v * vals.t, exclude: ['u'] }, // Add exclude condition for 's = vt'
    { formula: 's = ((v^2 - u^2) / 2a)', required: ['u', 'v', 'a'], compute: (vals) => ((vals.v * vals.v - vals.u * vals.u) / (2 * vals.a)) },
    { formula: 'v^2 = u^2 + 2as', required: ['u', 'a', 's'], compute: (vals) => Math.sqrt(vals.u ** 2 + 2 * vals.a * vals.s) },
    { formula: 'v = s/t', required: ['s', 't'], compute: (vals) => vals.s / vals.t, exclude: ['u'] }, // Add exclude condition for 's = vt'
    { formula: 'v = at', required: ['a', 't'], compute: (vals) => vals.a * vals.t, exclude: ['u'] }, // Add exclude condition for 's = vt'
    { formula: 't = s/v', required: ['s', 'v'], compute: (vals) => vals.s / vals.v, exclude: ['u'] }, // Add exclude condition for 's = vt'
  ];
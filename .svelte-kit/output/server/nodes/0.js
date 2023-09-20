

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.6fd2eff2.js","_app/immutable/chunks/index.20fe1016.js"];
export const stylesheets = [];
export const fonts = [];

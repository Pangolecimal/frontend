

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.05dfc7d7.js","_app/immutable/chunks/index.20fe1016.js","_app/immutable/chunks/singletons.60ed9ccf.js"];
export const stylesheets = [];
export const fonts = [];

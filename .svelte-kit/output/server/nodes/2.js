

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.16182dc4.js","_app/immutable/chunks/index.20fe1016.js"];
export const stylesheets = ["_app/immutable/assets/2.720e80d0.css"];
export const fonts = [];

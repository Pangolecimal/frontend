const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.dc4848bd.js","app":"_app/immutable/entry/app.79260b01.js","imports":["_app/immutable/entry/start.dc4848bd.js","_app/immutable/chunks/index.20fe1016.js","_app/immutable/chunks/singletons.60ed9ccf.js","_app/immutable/entry/app.79260b01.js","_app/immutable/chunks/index.20fe1016.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./chunks/0-4c067e0a.js')),
			__memo(() => import('./chunks/1-97d0f78a.js')),
			__memo(() => import('./chunks/2-06c9e254.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: __memo(() => import('./chunks/_server.ts-be62faaf.js'))
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();

export { manifest };
//# sourceMappingURL=manifest.js.map

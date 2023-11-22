<script>
	import { onMount } from 'svelte';

	onMount(() => {
		const translated = { x: 0, y: 0 };
		const PI = Math.PI;
		let RECT_MODE = 'DEFAULT'; // [DEFAULT, CORNERS, CORNER, CENTER, RADIUS]
		let LINE_MODE = 'BUTT'; // [BUTT, ROUND, SQUARE]

		//#region // *** Drawing *** //
		/**
		 * @param {number} x
		 * @param {number} y
		 */
		function translate(x, y, p = 'add') {
			if (p === 'add') {
				translated.x += x;
				translated.y += y;
			}
			if (p === 'set') {
				translated.x = x;
				translated.y = y;
			}
		}

		/**
		 * @param {any} n
		 */
		function noSmooth(n) {
			ctx.imageSmoothingEnabled = false;
		}

		/**
		 * @param {string} c
		 * @param {number} b
		 */
		function shadow(c, b, ox = 0, oy = 0) {
			ctx.shadowColor = c ?? '';
			ctx.shadowBlur = b ?? '';
			ctx.shadowOffsetX = ox;
			ctx.shadowOffsetY = oy;
		}

		/**
		 * @param {number} w
		 * @param {number} [h]
		 */
		function size(w, h) {
			// @ts-ignore
			cnv.width = width = w;
			// @ts-ignore
			cnv.height = height = h ?? w;
			aspectRatio = (h ?? w) / w;
		}

		function rectMode(m = 'CENTER') {
			RECT_MODE = m;
		}

		/**
		 * @param {string} c
		 */
		function fill(c) {
			ctx.fillStyle = c ?? 'transparent';
		}

		/**
		 * @param {string} c
		 */
		function stroke(c) {
			ctx.strokeStyle = c ?? 'transparent';
		}

		/**
		 * @param {number} w
		 */
		function strokeWidth(w) {
			ctx.lineWidth = w ?? 1;
		}

		/**
		 * @param {string} c
		 */
		function background(c) {
			ctx.fillStyle = c ?? 'transparent';
			ctx.fillRect(0, 0, width, height);
		}

		/**
		 * @param {string} t
		 * @param {number} x
		 * @param {number} y
		 */
		function text(t, x, y) {
			strokeWidth(3);
			ctx.strokeText(t, x + translated.x, -y + translated.y);
			ctx.fillText(t, x + translated.x, -y + translated.y);
		}

		function font(name = 'Fira Code', size = 24) {
			ctx.font = `${size}px "${name}"`;
		}

		/**
		 * @param {number} x1
		 * @param {number} y1
		 * @param {number} x2
		 * @param {number} y2
		 */
		function rect(x1, y1, x2, y2) {
			ctx.beginPath();

			if (RECT_MODE === 'DEFAULT') ctx.rect(x1, y1, x2, y2);
			if (RECT_MODE === 'CORNERS')
				ctx.rect(x1 + translated.x, -y1 + translated.y, x2 - x1, -(y2 - y1));
			if (RECT_MODE === 'CORNER') ctx.rect(x1 + translated.x, y1 + translated.y, x2, y2);
			if (RECT_MODE === 'CENTER')
				ctx.rect(x1 + translated.x - x2 / 2, -y1 + translated.y - y2 / 2, x2, y2);
			if (RECT_MODE === 'RADIUS')
				ctx.rect(x1 + translated.x - x2, -y1 + translated.y - y2, x2 * 2, y2 * 2);

			ctx.closePath();
			ctx.fill();
			ctx.stroke();
		}

		/**
		 * @param {number} x
		 * @param {number} y
		 * @param {number} rw
		 * @param {number} rh
		 */
		function romb(x, y, rw, rh) {
			ctx.beginPath();
			ctx.moveTo(x + translated.x, -y + translated.y + rh);
			ctx.lineTo(x + translated.x + rw, -y + translated.y);
			ctx.lineTo(x + translated.x, -y + translated.y - rh);
			ctx.lineTo(x + translated.x - rw, -y + translated.y);
			ctx.lineTo(x + translated.x, -y + translated.y + rh);
			ctx.closePath();
			ctx.fill();
			ctx.stroke();
		}

		/**
		 * @param {number} x
		 * @param {number} y
		 * @param {number} r
		 */
		function point(x, y, r) {
			ctx.beginPath();
			ctx.ellipse(x + translated.x, -y + translated.y, r, r, 0, PI * 2, 0);
			ctx.closePath();
			ctx.fill();
			ctx.stroke();
		}

		/**
		 * @param {number} x
		 * @param {number} y
		 * @param {number} r1
		 * @param {number} r2
		 */
		function ellipse(x, y, r1, r2, a = 0) {
			ctx.beginPath();
			ctx.ellipse(x + translated.x, -y + translated.y, r1, r2, a, PI * 2, 0);
			ctx.closePath();
			ctx.fill();
			ctx.stroke();
		}

		function lineMode(mode = 'BUTT') {
			LINE_MODE = mode;
		}

		/**
		 * @param {number} x1
		 * @param {number} y1
		 * @param {number} x2
		 * @param {number} y2
		 */
		function line(x1, y1, x2, y2) {
			ctx.beginPath();
			ctx.moveTo(x1 + translated.x, -y1 + translated.y);
			ctx.lineCap = 'round'; //LINE_MODE.toLowerCase()
			ctx.lineTo(x2 + translated.x, -y2 + translated.y);
			ctx.stroke();
		}

		function beginPath() {
			ctx.beginPath();
		}

		/**
		 * @param {number} x
		 * @param {number} y
		 */
		function vertex(x, y) {
			ctx.lineTo(x + translated.x, -y + translated.y);
		}

		function closePath() {
			ctx.stroke();
			ctx.closePath();
		}

		/**
		 * @param {number} x
		 * @param {number} y
		 * @param {number} r
		 * @param {number} t
		 */
		function hexagon(x, y, r, t) {
			ctx.beginPath();
			for (let a = 0; a < 6; a++) {
				ctx.lineTo(
					x + translated.x + cos(a * (PI / 3) + t) * r,
					-y + translated.y + sin(a * (PI / 3) + t) * r
				);
			}
			ctx.closePath();
			ctx.fill();
			ctx.stroke();
		}

		class Color {
			static Black = 'hsla(0, 0%, 0%, 1)';
			static Gray50 = 'hsla(0, 0%, 5%, 1)';
			static Gray100 = 'hsla(0, 0%, 10%, 1)';
			static Gray200 = 'hsla(0, 0%, 20%, 1)';
			static Gray300 = 'hsla(0, 0%, 30%, 1)';
			static Gray400 = 'hsla(0, 0%, 40%, 1)';
			static Gray500 = 'hsla(0, 0%, 50%, 1)';
			static Gray600 = 'hsla(0, 0%, 60%, 1)';
			static Gray700 = 'hsla(0, 0%, 70%, 1)';
			static Gray800 = 'hsla(0, 0%, 80%, 1)';
			static Gray900 = 'hsla(0, 0%, 90%, 1)';
			static White = 'hsla(0, 0%, 100%, 1)';
			static Red = 'hsla(0, 60%, 60%, 1)';
			static Orange = 'hsla(30, 60%, 60%, 1)';
			static Yellow = 'hsla(60, 60%, 60%, 1)';
			static Green = 'hsla(120, 60%, 60%, 1)';
			static LightBlue = 'hsla(180, 60%, 60%, 1)';
			static Blue = 'hsla(210, 60%, 60%, 1)';
			static Indigo = 'hsla(240, 60%, 60%, 1)';
			static Purple = 'hsla(270, 60%, 60%, 1)';
			static Pink = 'hsla(300, 60%, 60%, 1)';
			static RandomHue = () => `hsla(${random.int(360)}, 50%, 50%, 1)`;
			static RandomGray = () => `hsla(0, 0%, ${random.int(100)}%, 1)`;
			static HueFrom = (/** @type {any} */ value) => `hsla(${value}, 50%, 50%, 1)`;
			static GrayFrom = (/** @type {any} */ value) => `hsla(0, 0%, ${value}%, 1)`;
		}

		/**
		 * @param {String} color r-g-b-a > example: 102-51-153-204
		 * @returns [ [r, g, b, a], 'rgba(r, g, b, a)' ]
		 */
		function getColorFromString(color) {
			const c = color.split('-').map((n) => parseInt(n));
			return { values: c, color: `rgba(${c.join(', ')})` };
		}
		//#endregion

		//#region // *** Math *** //
		/**
		 * @param {number} value
		 * @param {number} minIn
		 * @param {number} maxIn
		 * @param {number} minOut
		 * @param {number} maxOut
		 */
		function map(value, minIn, maxIn, minOut, maxOut) {
			return ((value - minIn) * (maxOut - minOut)) / (maxIn - minIn) + minOut;
		}
		/**
		 * @param {number} value
		 * @param {number} minIn
		 * @param {number} maxIn
		 */
		function norm(value, minIn, maxIn) {
			return (value - minIn) / (maxIn - minIn);
		}
		/**
		 * @param {number} value
		 * @param {number} min
		 * @param {number} max
		 */
		function clamp(value, min, max) {
			if (value < min) return min;
			if (value > max) return max;
			return value;
		}
		/**
		 * @param {number} a
		 * @param {number} b
		 * @param {number} t
		 */
		function lerp(a, b, t) {
			return a * (1 - t) + b * t;
		}
		function min() {
			return Math.min(...Array.from(arguments));
		}
		function max() {
			return Math.max(...Array.from(arguments));
		}
		/**
		 * @param {number} v
		 */
		function sin(v) {
			return Math.sin(v);
		}
		/**
		 * @param {number} v
		 */
		function cos(v) {
			return Math.cos(v);
		}
		/**
		 * @param {number} v
		 */
		function abs(v) {
			return Math.abs(v);
		}
		/**
		 * @param {number} v
		 */
		function floor(v) {
			return Math.floor(v);
		}
		/**
		 * @param {number} v
		 */
		function ceil(v) {
			return Math.ceil(v);
		}
		/**
		 * @param {number} v
		 */
		function round(v, p = 0) {
			return Math.round(v * 10 ** p) / 10 ** p;
		}
		/** @type {Object<number, number>} */
		const sqrtTable = {};
		/**
		 * @param {number} v
		 */
		function sqrt(v) {
			return sqrtTable[v] ?? (sqrtTable[v] = Math.sqrt(v));
		}
		/**
		 * @param {number} d
		 */
		function dtr(d) {
			return (d * PI) / 180;
		}
		/**
		 * @param {number} r
		 */
		function rtd(r) {
			return (r * 180) / PI;
		}
		/**
		 * @param {number} x
		 * @param {number} y
		 */
		function atan2(x, y) {
			return Math.atan2(y, x);
		}
		/**
		 * @param {number} x
		 * @param {number} p
		 */
		function pow(x, p) {
			return Math.pow(x, p);
		}
		/**
		 * @param {number} v
		 */
		function sign(v) {
			return Math.sign(v);
		}
		/**
		 * @param {number} x1
		 * @param {number} y1
		 * @param {number} x2
		 * @param {number} y2
		 * @param {number} x3
		 * @param {number} y3
		 * @param {number} x4
		 * @param {number} y4
		 */
		function intersect(x1, y1, x2, y2, x3, y3, x4, y4) {
			let slope1 = (y2 - y1) / (x2 - x1);
			let slope2 = (y4 - y3) / (x4 - x3);

			if (slope1 === slope2) return false;

			let x = (y3 - y1 + slope1 * x1 - slope2 * x3) / (slope1 - slope2);
			let y = slope1 * (x - x1) + y1;

			if (x < min(x1, x2) || x > max(x1, x2) || x < min(x3, x4) || x > max(x3, x4)) return false;
			if (y < min(y1, y2) || y > max(y1, y2) || y < min(y3, y4) || y > max(y3, y4)) return false;

			return true;
		}
		/**
		 * @param {number} x1
		 * @param {number} y1
		 * @param {number} x2
		 * @param {number} y2
		 * @param {number} x3
		 * @param {number} y3
		 */
		function area_triangle(x1, y1, x2, y2, x3, y3) {
			return abs(x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2)) / 2;
		}
		/**
		 * @param {number} x
		 * @param {number} y
		 * @param {number} x1
		 * @param {number} y1
		 * @param {number} x2
		 * @param {number} y2
		 */
		function distance_sq(x, y, x1, y1, x2, y2) {
			const foo = (
				/** @type {number} */ x1,
				/** @type {number} */ y1,
				/** @type {number} */ x2,
				/** @type {number} */ y2
			) => (x1 - x2) ** 2 + (y1 - y2) ** 2;
			const l = foo(x1, y1, x2, y2);
			const t = clamp(((x - x1) * (x2 - x1) + (y - y1) * (y2 - y1)) / l, 0, 1);
			return foo(x, y, x1 + t * (x2 - x1), y1 + t * (y2 - y1));
		}
		//#endregion

		//#region // *** Utility *** //
		const random = {
			/** @returns {number} */
			float: function (/**@type {number}*/ b = 1, /**@type {number}*/ a = 0) {
				if (typeof a !== 'number' || typeof b !== 'number') {
					console.error('random.float function error: ', arguments);
					return NaN;
				}
				return a + (b - a) * Math.random();
			},
			/** @returns {number} */
			int: function (/**@type {number}*/ b = 1, /**@type {number}*/ a = 0) {
				if (typeof a !== 'number' || typeof b !== 'number')
					if (typeof a !== 'number' || typeof b !== 'number') {
						console.error('random.int function error: ', arguments);
						return NaN;
					}
				return Math.floor(random.float(a, b));
			},
			boolean: function () {
				return Math.random() < 0.5;
			},
			sign: function () {
				return Math.round(Math.random()) * 2 - 1;
			},
			/** @returns {any} */
			array: function (/** @type {Array<any>} */ a) {
				if (a == null || !Array.isArray(a)) {
					console.error('random.array function error: ', arguments);
					return a;
				}
				return a[random.int(a.length)];
			},
			/** @returns {Array<any>} */
			array_shuffle: function (/** @type {Array<any>} */ a) {
				if (a == null || !Array.isArray(a)) {
					console.error('random.array_shuffle function error: ', arguments);
					return a;
				}
				for (let i = 0; i < a.length; i++) {
					const j = random.int(a.length);
					const temp = a[i];
					a[i] = a[j];
					a[j] = temp;
				}
				return a;
			},
			/** @returns {Array<any>} */
			array_subset: function (/** @type {Array<any>} */ a) {
				if (a == null || !Array.isArray(a)) {
					console.error('random.array_subset function error: ', arguments);
					return a;
				}
				const num = random.int(a.length);
				const shuffled = random.array_shuffle(a.slice());
				return shuffled.slice(0, num);
			},
			object: function (/** @type {Object<any, any>} */ o) {
				if (o == null || typeof o !== 'object')
					return console.error('random.object function error: ', arguments);
				return random.array(Object.values(o));
			},
			weight: function (/** @type {Array<any>} */ a) {
				// a = [['a', 1], ['b', 2], ['c', 3]]; <-> a: [[value, weight]; N]
				if (
					!Array.isArray(a) ||
					a.length === 0 ||
					a.some((v) => !Array.isArray(v) || v.length === 0)
				)
					return console.error('random function error: ', arguments);

				const values = a.map((value) => value[0]);
				const weights = a.map((value) => value[1]);
				const sum = weights.reduce((a, b) => a + b);

				const r = random.int(sum);
				for (let i = 0, current = 0; i < a.length; i++) {
					if (r < current) return values[i - 1];
					current += weights[i];
				}

				return values[a.length - 1];
			}
		};

		/**
		 * @param skew bigger skew for max, lesser skew for min
		 */
		function random_bell(min = 0, max = 1, skew = 1) {
			let u = 0,
				v = 0;
			while (u === 0) u = Math.random();
			while (v === 0) v = Math.random();
			let num = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);

			num = num / 10.0 + 0.5;
			if (num > 1 || num < 0) num = random_bell(min, max, skew);
			else {
				num = Math.pow(num, 1 / skew);
				num *= max - min;
				num += min;
			}
			return num;
		}

		/**
		 * @param {number} v
		 */
		function prng(v) {
			const x = Math.sin(v + 1e-9) * Math.cos(v + 1e-9) * 1000000;
			return x - Math.floor(x);
		}

		/**
		 * @param {number} start
		 * @param {number} stop
		 */
		function range(start, stop, step = 1) {
			if (arguments.length === 1) {
				stop = start;
				start = 0;
			}

			if ((step > 0 && start >= stop) || (step < 0 && start <= stop)) {
				return [];
			}

			const result = [];
			for (let i = start; step > 0 ? i < stop : i > stop; i += step) {
				result.push(i);
			}

			return result;
		}

		/**
		 * @param {number} x
		 * @param {number} b
		 */
		function biased(x, b) {
			const k = (1 - b) ** 3;
			return (x * k) / (x * (k - 1) + 1);
		}

		/**
		 * @param {number} x
		 * @param {number} a
		 */
		function easing_exp(x, a) {
			if (x < 0 || x > 1) return console.error('easing error', arguments);
			if (x === 0) return 0;
			if (x === 1) return 1;
			if (x <= 0.5) return (1 - pow(2, -2 * a * x)) / 2;
			if (x > 0.5) return (1 + pow(2, 2 * a * (x - 1))) / 2;
		}

		/**
		 * @param {number} x
		 */
		function easing_quad(x) {
			if (x < 0 || x > 1) return console.error('easing error', arguments);
			if (x <= 0.5) return (1 - (-2 * x + 1) * (-2 * x + 1)) / 2;
			if (x > 0.5) return 0.5 + 2 * (x - 0.5) * (x - 0.5);
		}

		/**
		 * @param {string | any[]} s
		 */
		function reverse(s) {
			let t = '';
			for (let i = 0; i < s.length; i++) t += s[s.length - 1 - i];
			return t;
		}

		/**
		 * @param {number} dim number of dimensions (1D, 2D, etc.)
		 * @param {(number|Array<number>)} len length of each dimension - int | int[]
		 * @param {any} def default value for all entries
		 * @returns {Array<any> | null}
		 */
		function createArray(dim, len, def = null) {
			if (typeof len === 'number') {
				if (dim < 1) return null;
				if (dim === 1)
					return Array.from({ length: max(len, 1) }, () =>
						typeof def === 'function' ? def() : def
					);

				return Array.from({ length: max(len, 1) }, () => createArray(dim - 1, len, def));
			} else if (Array.isArray(len)) {
				if (dim < 1) return null;
				if (dim === 1)
					return Array.from({ length: max(len[0], 1) }, () =>
						typeof def === 'function' ? def() : def
					);

				return Array.from({ length: max(len[0], 1) }, () =>
					createArray(dim - 1, len.slice(1), def)
				);
			} else {
				console.error('createArray error: ', arguments);
				return null;
			}
		}

		Array.prototype.at = function at(/** @type {number} */ i, /** @type {any} */ j) {
			if (typeof i !== 'number' || typeof j !== 'number')
				return console.error('"at" error', { args: arguments, self: this });

			return this[(i + this.length) % this.length][(j + this[0].length) % this[0].length];
		};

		/**
		 * @param {ArrayLike<any> | { [s: string]: any; }} obj
		 */
		function swapKeysAndValues(obj) {
			return Object.fromEntries(Object.entries(obj).map((e) => [e[1], e[0]]));
		}

		const log = console.log;

		class Vector {
			constructor(x = 0, y = 0, z = 0) {
				this.x = x;
				this.y = y;
				this.z = z;
			}

			mag() {
				return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
			}

			magSq() {
				return this.x * this.x + this.y * this.y + this.z * this.z;
			}

			/**
			 * @param {any} l
			 */
			setMag(l) {
				this.normalize().mult(l);
				return this;
			}

			normalize() {
				const l = this.mag();
				this.x /= l;
				this.y /= l;
				this.z /= l;
				return this;
			}

			/**
			 * @param {number} s
			 */
			mult(s) {
				this.x *= s;
				this.y *= s;
				this.z *= s;
				return this;
			}

			/**
			 * @param {{ x: number; y: number; z: number; }} v
			 */
			add(v) {
				this.x += v.x;
				this.y += v.y;
				this.z += v.z;
				return this;
			}

			/**
			 * @param {{ x: number; y: number; z: number; }} v
			 */
			sub(v) {
				this.x -= v.x;
				this.y -= v.y;
				this.z -= v.z;
				return this;
			}

			abs() {
				this.x = Math.abs(this.x);
				this.y = Math.abs(this.y);
				this.z = Math.abs(this.z);
				return this;
			}

			/**
			 * @param {number[]} args
			 */
			max(...args) {
				if (args.length === 0) {
					return Math.max(this.x, this.y, this.z);
				}
				if (args.length === 1) {
					this.x = Math.max(this.x, args[0]);
					this.y = Math.max(this.y, args[0]);
					this.z = Math.max(this.z, args[0]);
				}
				if (args.length === 3) {
					this.x = Math.max(this.x, args[0]);
					this.y = Math.max(this.y, args[1]);
					this.z = Math.max(this.z, args[2]);
				}
				return this;
			}

			/**
			 * @param {number[]} args
			 */
			min(...args) {
				if (args.length === 0) {
					return Math.min(this.x, this.y, this.z);
				}
				if (args.length === 1) {
					this.x = Math.min(this.x, args[0]);
					this.y = Math.min(this.y, args[0]);
					this.z = Math.min(this.z, args[0]);
				}
				if (args.length === 3) {
					this.x = Math.min(this.x, args[0]);
					this.y = Math.min(this.y, args[1]);
					this.z = Math.min(this.z, args[2]);
				}
				return this;
			}

			/**
			 * @param {number} l
			 */
			limit(l) {
				if (this.magSq() <= l * l) return this;
				this.normalize();
				this.mult(l);
				return this;
			}

			copy() {
				return new Vector(this.x, this.y, this.z);
			}

			static random2() {
				const a = random.float(Math.PI * 2);
				return new Vector(cos(a), sin(a));
			}

			static random3() {
				const u = random.float();
				const v = random.float();
				const a = Math.acos(2 * u - 1) - Math.PI / 2;
				const b = Math.PI * 2 * v;
				return new Vector(cos(a) * cos(b), cos(a) * sin(b), sin(b));
			}
		}
		//#endregion

		//#region // *** Preload ** //

		/** @type {HTMLElement} */
		const cnv = document.querySelector('canvas#cnv') ?? document.createElement('canvas');

		/** @type {CanvasRenderingContext2D} */ // @ts-ignore
		const ctx = cnv.getContext('2d');

		let [width, height] = [800, 800];
		let aspectRatio = height / width;
		let doLoop = 0;
		const delta = 1 / 60;
		//#endregion

		//#region // *** Variables *** //
		//#endregion

		//#region // *** Setup *** //
		(function setup() {
			size(800);
			translate(width / 2, height / 2, 'set');

			log('%cloop started', 'font-size: 1rem; color: lightblue');
			loop();
		})();
		//#endregion

		//#region // *** Update *** //
		function update() {}
		//#endregion

		//#region // *** Render *** //
		function render() {
			background(Color.Gray100);
		}
		//#endregion

		//#region // *** Loop *** //
		function loop() {
			update();
			render();
			(doLoop && setTimeout(loop, delta * 1000)) ||
				log('%cloop ended', 'font-size: 1rem; color: lightgreen');
		}
		//#endregion
	});
</script>

<main>
	<canvas id="cnv" width="800" height="800">A</canvas>
</main>

<style>
	main {
		padding: 0 1rem;
	}
</style>

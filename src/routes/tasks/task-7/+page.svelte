<h2>Task 7</h2>

<main>
	<div id="task-1">
		<div class="card card_red">
			<div class="background" />
			<div class="foreground">
				<h4>Header</h4>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, animi.</p>
				<button>More</button>
			</div>
		</div>

		<div class="card card_green">
			<div class="background" />
			<div class="foreground">
				<h4>Header</h4>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, animi.</p>
				<button>More</button>
			</div>
		</div>

		<div class="card card_blue">
			<div class="background" />
			<div class="foreground">
				<h4>Header</h4>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, animi.</p>
				<button>More</button>
			</div>
		</div>

		<style>
			@keyframes move-after {
				0% {
					opacity: 0;
					top: 50%;
					left: 50%;
				}
				50% {
					opacity: 100%;
					top: -5rem;
					left: 6rem;
				}
				100% {
					top: -4rem;
					left: 0rem;
				}
			}
			@keyframes move-before {
				0% {
					opacity: 0;
					top: 50%;
					left: 50%;
				}
				50% {
					opacity: 100%;
					top: 10rem;
					left: 8rem;
				}
				100% {
					top: 12rem;
					left: 10rem;
				}
			}
			#task-1 > .card:hover > .foreground::after {
				animation: 1s alternate ease-in-out move-after;
			}
			#task-1 > .card:hover > .foreground::before {
				animation: 1s alternate ease-in-out move-before;
			}
			#task-1 {
				--_transition_speed: 200ms;

				display: grid;
				grid-template-columns: repeat(3, 1fr);

				width: clamp(50rem, 100%, 60rem);

				& > .card {
					position: relative;

					display: grid;
					place-items: center;

					& > .foreground {
						display: grid;
						place-items: center;
						position: absolute;

						gap: 0.5rem;
						width: 10rem;
						padding: 1rem 0.5rem;
						border-radius: 0.5rem;

						backdrop-filter: blur(0.25rem);
						background-color: #ffffff20;

						transition: padding var(--_transition_speed);

						& > p {
							font-size: 0.5rem;
							text-align: center;
						}

						& > button {
							border: none;
							border-radius: 0.5rem;
							padding: 0.25rem;
							background: var(--base);
							color: var(--text);

							&:hover {
								background: var(--ctp-mocha-surface0);
							}

							&:active {
								background: var(--ctp-mocha-surface1);
							}
						}

						&::after,
						&::before {
							content: '';
							position: absolute;

							width: 3rem;
							height: 3rem;
							border-radius: 0.5rem;

							backdrop-filter: blur(0.25rem);
							background-color: #ffffff20;

							opacity: 0;
							transition: var(--_transition_speed) all;

							top: 50%;
							left: 50%;
							translate: -50%;
						}
					}

					& > .background {
						--_color_1: var(--color_1, #fff);
						--_color_2: var(--color_2, #000);

						position: absolute;

						width: 8rem;
						height: 16rem;

						transform: skew(10deg);
						border-radius: 0.5rem;

						background: linear-gradient(135deg, var(--_color_1), var(--_color_2));

						transition: transform var(--_transition_speed);

						&::before {
							content: '';
							position: absolute;
							width: 8rem;
							height: 16rem;
							background: linear-gradient(135deg, var(--_color_1), var(--_color_2));
							filter: blur(1rem);
						}
					}

					&:hover {
						& > .background {
							transform: skew(0deg);
						}

						& > .foreground {
							padding: 2rem 1rem;

							&::after {
								opacity: 100%;
								top: -4rem;
								left: 0rem;
							}
							&::before {
								opacity: 100%;
								top: 12rem;
								left: 10rem;
							}
						}
					}

					&.card_red {
						--color_1: var(--ctp-latte-red);
						--color_2: var(--ctp-latte-yellow);
					}
					&.card_green {
						--color_1: var(--ctp-latte-green);
						--color_2: var(--ctp-latte-teal);
					}
					&.card_blue {
						--color_1: var(--ctp-latte-blue);
						--color_2: var(--ctp-latte-mauve);
					}
				}
			}
		</style>
	</div>

	<div id="task-2">
		<div class="button button-youtube">
			<svg height="1em" viewBox="0 0 576 512"><path /></svg>
		</div>
		<div class="button button-twitter">
			<svg height="1em" viewBox="0 0 512 512"><path /></svg>
		</div>
		<div class="button button-github">
			<svg height="1em" viewBox="0 0 496 512"><path /></svg>
		</div>
		<div class="button button-discord">
			<svg height="1em" viewBox="0 0 640 512"><path /></svg>
		</div>

		<style>
			#task-2 {
				display: grid;
				grid-auto-flow: column;
				gap: 5rem;
				padding-top: 4rem;

				& > .button {
					--_color-1: var(--color-1, #fff);
					--_color-2: var(--color-2, #000);

					display: grid;
					place-items: center;

					width: 4rem;
					height: 4rem;

					/* background: var(--ctp-mocha-crust); */
					border-radius: 100vw;

					background-size: 100% 200%;
					background-image: linear-gradient(var(--ctp-mocha-crust) 50%, var(--_color-1) 50%, var(--_color-2));
					transition: background-position 1s;

					& > svg {
						fill: var(--text);
						font-size: 2.5rem;
						transition: fill 1s;
					}

					&:hover {
						cursor: pointer;
						background-position: 0 -100%;

						& > svg {
							fill: var(--base);
						}
					}
				}

				& > .button-youtube {
					--color-1: var(--ctp-latte-red);
					--color-2: var(--ctp-latte-yellow);
					& path {
						d: path(
							'M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z'
						);
					}
				}
				& > .button-twitter {
					--color-1: var(--ctp-latte-blue);
					--color-2: var(--ctp-latte-teal);
					& path {
						d: path(
							'M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z'
						);
					}
				}
				& > .button-github {
					--color-1: var(--ctp-latte-mauve);
					--color-2: var(--ctp-latte-peach);
					& path {
						d: path(
							'M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z'
						);
					}
				}
				& > .button-discord {
					--color-1: var(--ctp-latte-red);
					--color-2: var(--ctp-latte-pink);
					& path {
						d: path(
							'M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z'
						);
					}
				}
			}
		</style>
	</div>

	<div id="task-3">
		<div class="float float-1 glass-bg" />
		<div class="float float-2 glass-bg" />
		<div class="float float-3 glass-bg" />
		<div class="float float-4 glass-bg" />
		<div class="float float-5 glass-bg" />

		<div class="form glass-bg">
			<h2 class="heading">Login</h2>
			<input type="email" class="email glass-bg" placeholder="example@gmail.com" />
			<input type="text" class="password glass-bg" placeholder="password" />
			<button class="enter">Enter</button>
			<div class="help">
				<p>Forgot your password? <a href=".">Password reset</a></p>
				<p>No account yet? <a href=".">Register</a></p>
			</div>
		</div>

		<style>
			#task-3 {
				position: relative;
				z-index: 5;

				& > .form {
					display: grid;
					justify-items: start;
					justify-content: space-between;
					align-content: space-between;

					width: 20rem;
					height: 20rem;
					border-radius: 1rem;
					padding: 2rem;

					z-index: 10;

					& > .heading {
						text-decoration: underline;
						font-family: monospace;
						padding-bottom: 2rem;
						font-size: 2.5rem;
					}
					& > input {
						border: none;
						border-radius: 100vw;
						padding: 0.5rem 1rem;
						font-size: 1rem;
						width: 100%;
						height: fit-content;

						&,
						&::placeholder {
							color: var(--text);
						}
					}
					& > .enter {
						border: none;
						border-radius: 100vw;
						padding: 0.5rem 1rem;
						font-size: 1rem;
						text-align: start;

						display: grid;
						place-items: center;

						background: var(--text);
						color: var(--base);

						&:hover {
							background: var(--subtext0);
						}
						&:active {
							background: var(--overlay0);
						}
					}
					& > .help {
						padding-top: 2rem;
						& > p {
							font-size: 0.75rem;
							text-align: start;
							& > a {
								text-decoration: none;
								color: var(--ctp-mocha-peach);
								font-weight: bold;

								&:hover {
									text-decoration: underline;
									color: var(--ctp-mocha-pink);
								}
								&:active {
									text-decoration: underline;
									color: var(--ctp-mocha-mauve);
								}
							}
						}
					}
				}

				& > .float {
					position: absolute;
					border-radius: 0.5rem;
					&.float-1 {
						width: 5rem;
						height: 5rem;
						top: -15%;
						left: -30%;
					}
					&.float-2 {
						width: 7rem;
						height: 5rem;
						top: 95%;
						left: 20%;
					}
					&.float-3 {
						width: 6rem;
						height: 8rem;
						top: 40%;
						left: 120%;
						z-index: 20;
					}
					&.float-4 {
						width: 12rem;
						height: 7rem;
						top: -20%;
						left: 60%;
						z-index: 20;
					}
					&.float-5 {
						width: 10rem;
						height: 10rem;
						top: 30%;
						left: -50%;
					}
				}

				& .glass-bg {
					backdrop-filter: blur(0.25rem);
					background-color: #ffffff20;
				}
			}
			@keyframes slide-1 {
				0% {
					translate: 0% 0%;
				}
				33% {
					translate: 100% 10%;
				}
				66% {
					translate: 60% 60%;
				}
			}
			@keyframes slide-2 {
				0% {
					translate: 0% 0%;
				}
				33% {
					translate: 10% 30%;
				}
				66% {
					translate: -70% 60%;
				}
			}
			@keyframes slide-3 {
				0% {
					translate: 0% 0%;
				}
				50% {
					translate: 10% 30%;
				}
			}
			@keyframes slide-4 {
				0% {
					translate: 0% 0%;
				}
				25% {
					translate: 10% 30%;
				}
				50% {
					translate: 50% 0%;
				}
				75% {
					translate: -20% -30%;
				}
			}
			@keyframes slide-5 {
				0% {
					translate: 0% 0%;
				}
				50% {
					translate: 50% 10%;
				}
			}
			.float-1 {
				animation: slide-1 10s infinite ease-in-out 1s;
			}
			.float-2 {
				animation: slide-2 10s infinite ease-in-out reverse 2s;
			}
			.float-3 {
				animation: slide-3 10s infinite ease-in-out 3s;
			}
			.float-4 {
				animation: slide-4 10s infinite ease-in-out reverse 4s;
			}
			.float-5 {
				animation: slide-5 10s infinite ease-in-out 5s;
			}
		</style>
	</div>

	<div id="task-4">
		<div class="card card-red">
			<h2 class="header">01</h2>
			<p class="text">
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam doloribus saepe molestiae dignissimos
				laboriosam itaque tenetur quidem impedit. Distinctio, iste!
			</p>
			<button class="more">More</button>
		</div>
		<div class="card card-green">
			<h2 class="header">02</h2>
			<p class="text">
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam doloribus saepe molestiae dignissimos
				laboriosam itaque tenetur quidem impedit. Distinctio, iste!
			</p>
			<button class="more">More</button>
		</div>
		<div class="card card-blue">
			<h2 class="header">03</h2>
			<p class="text">
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam doloribus saepe molestiae dignissimos
				laboriosam itaque tenetur quidem impedit. Distinctio, iste!
			</p>
			<button class="more">More</button>
		</div>

		<style>
			#task-4 {
				display: grid;
				place-items: center;
				grid-template-columns: repeat(3, 1fr);

				width: clamp(50rem, 100%, 60rem);
				color: var(--text);

				&:has(.card:hover) > .card:not(:hover) {
					filter: blur(0.5rem);
				}

				& > .card {
					--_accent: var(--accent, #000);

					display: grid;
					place-items: center;
					position: relative;

					width: 8rem;
					height: 13rem;
					padding: 1rem;
					border-radius: 1rem;
					background: var(--text);

					transition: all 0.3s ease-in-out;

					&:hover {
						scale: 1.1;
					}

					&::before {
						content: '';
						position: absolute;
						background: var(--_accent);
						width: 10rem;
						height: 10rem;
						border-radius: 1rem;
						z-index: 0;
						top: 0;
						clip-path: ellipse(130px 140px at 50% -20%);
					}

					& > * {
						z-index: 1;
					}
					& > .header {
						padding-bottom: 2rem;
						width: 100%;
						text-align: center;
					}
					& > .text {
						font-size: 0.5rem;
						text-align: center;
						color: var(--base);
					}
					& > .more {
						background: var(--_accent);
						border: none;
						border-radius: 1rem;
						padding: 0.25rem 1rem;
						color: var(--text);
						font-weight: bold;

						&:hover {
							filter: brightness(125%);
						}
						&:active {
							filter: brightness(150%);
						}
					}
				}

				& > .card-red {
					--accent: var(--ctp-latte-red);
				}
				& > .card-green {
					--accent: var(--ctp-latte-green);
				}
				& > .card-blue {
					--accent: var(--ctp-latte-blue);
				}
			}
		</style>
	</div>

	<div id="task-5">
		<div class="card card-red">
			<h2 class="header">Header</h2>
			<p class="text">
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam doloribus saepe molestiae dignissimos
				laboriosam itaque tenetur quidem impedit. Distinctio, iste!
			</p>
			<button class="more">More</button>
		</div>
		<div class="card card-green">
			<h2 class="header">Header</h2>
			<p class="text">
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam doloribus saepe molestiae dignissimos
				laboriosam itaque tenetur quidem impedit. Distinctio, iste!
			</p>
			<button class="more">More</button>
		</div>
		<div class="card card-blue">
			<h2 class="header">Header</h2>
			<p class="text">
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam doloribus saepe molestiae dignissimos
				laboriosam itaque tenetur quidem impedit. Distinctio, iste!
			</p>
			<button class="more">More</button>
		</div>

		<style>
			#task-5 {
				display: grid;
				place-items: center;
				grid-template-columns: repeat(3, 1fr);

				width: clamp(50rem, 100%, 60rem);
				color: var(--text);

				&:has(.card:hover) > .card:not(:hover) {
					opacity: 25%;
				}

				& > .card {
					--_accent: var(--accent, #000);
					--angle: 0deg;

					display: grid;
					place-items: center;
					position: relative;

					width: 10rem;
					height: 16rem;
					padding: 1rem;
					background: linear-gradient(90deg, var(--mantle) 50%, var(--crust) 50%);
					border: 0.1rem solid var(--base);
					transition: all 0.2s ease-in-out;

					&:hover {
						border-image: conic-gradient(
								from var(--angle),
								transparent 0% 25%,
								var(--_accent) 50%,
								transparent 50% 75%,
								var(--_accent) 100%
							)
							1;
					}

					& > .text {
						font-size: 0.75rem;
						text-align: center;
					}
					& > .more {
						background: var(--_accent);
						border: none;
						border-radius: 1rem;
						padding: 0.25rem 1rem;
						color: var(--text);
						font-weight: bold;

						&:hover {
							filter: brightness(125%);
						}
						&:active {
							filter: brightness(150%);
						}
					}
				}

				& > .card-red {
					--accent: var(--ctp-latte-red);
				}
				& > .card-green {
					--accent: var(--ctp-latte-green);
				}
				& > .card-blue {
					--accent: var(--ctp-latte-blue);
				}
			}
			@keyframes rotate {
				to {
					--angle: 360deg;
				}
			}
			@property --angle {
				syntax: '<angle>';
				initial-value: 0deg;
				inherits: false;
			}
			#task-5 > .card {
				animation: 10s rotate linear infinite;
			}
		</style>
	</div>
</main>

<style>
	:root {
		--text: var(--ctp-mocha-text);
		--subtext1: var(--ctp-mocha-subtext1);
		--subtext0: var(--ctp-mocha-subtext0);
		--overlay2: var(--ctp-mocha-overlay2);
		--overlay1: var(--ctp-mocha-overlay1);
		--overlay0: var(--ctp-mocha-overlay0);
		--surface2: var(--ctp-mocha-surface2);
		--surface1: var(--ctp-mocha-surface1);
		--surface0: var(--ctp-mocha-surface0);
		--base: var(--ctp-mocha-base);
		--mantle: var(--ctp-mocha-mantle);
		--crust: var(--ctp-mocha-crust);
	}
	main {
		padding: 10rem 0;
		display: grid;
		place-items: center;
		gap: 20rem;
		padding-bottom: 20rem;
	}
</style>

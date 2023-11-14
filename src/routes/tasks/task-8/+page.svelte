<h2>Task 8</h2>

<main>
	<div id="task-1">
		<div class="header">header</div>
		<div class="nav">nav</div>
		<div class="main">main</div>
		<div class="sidebar">side</div>
		<div class="ads">ads</div>
		<div class="footer">footer</div>

		<style>
			#task-1 {
				display: grid;
				place-items: center;

				resize: both;
				overflow: hidden;

				background: var(--ctp-mocha-crust);
				box-shadow: 0 0 0 0.1rem var(--ctp-mocha-surface2);
				padding: 1rem;
				gap: 0.5rem;
				width: 100%;
				height: 100%;

				& > div {
					background: var(--ctp-mocha-mantle);
					box-shadow: inset 0 0 0 0.1rem var(--ctp-mocha-surface2);
					border-radius: 0.5rem;

					display: grid;
					place-items: center;
					width: 100%;
					height: 100%;
				}

				grid-template-areas:
					'h'
					'n'
					'm'
					's'
					'a'
					'f';
				grid-template-columns: repeat(1, 1fr);
				grid-template-rows: repeat(2, 1fr) 5fr repeat(3, 1fr);
				& > .header {
					grid-area: h;
				}
				& > .nav {
					grid-area: n;
				}
				& > .main {
					grid-area: m;
				}
				& > .sidebar {
					grid-area: s;
				}
				& > .ads {
					grid-area: a;
				}
				& > .footer {
					grid-area: f;
				}
			}
			@media (max-width: 1000px) {
				#task-1 {
					grid-template-columns: 1fr 2fr 2fr;
					grid-template-rows: 1fr 1fr 5fr 1fr 1fr;
					grid-template-areas:
						'h h h'
						'n n n'
						's m m'
						's m m'
						'a f f';
				}
			}
			@media (max-width: 750px) {
				#task-1 {
					grid-template-columns: 1fr 5fr 1fr;
					grid-template-rows: 1fr 1fr 5fr 1fr 1fr;
					grid-template-areas:
						'h h h'
						's n a'
						's m a'
						's m a'
						'f f f';
				}
			}
		</style>
	</div>

	<div id="task-2">
		<div class="card card-1">
			<h2>A</h2>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, alias!</p>
		</div>
		<div class="card card-2">
			<h2>B</h2>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, alias!</p>
		</div>
		<div class="card card-3">
			<h2>C</h2>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, alias!</p>
		</div>
		<div class="card card-4">
			<h2>D</h2>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, alias!</p>
		</div>
		<div class="card card-5">
			<h2>E</h2>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, alias!</p>
		</div>
		<div class="card card-6">
			<h2>F</h2>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, alias!</p>
		</div>
		<div class="card card-7">
			<h2>G</h2>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, alias!</p>
		</div>

		<style>
			#task-2 {
				display: grid;
				place-items: center;

				width: calc(100% - 2rem);
				max-width: 40rem;
				gap: 1rem;

				grid-template-areas:
					'a a b c'
					'd e b f'
					'd g g g';

				& > .card {
					--_accent: var(--accent, var(--ctp-mocha-crust));

					display: grid;
					place-content: space-around;

					width: 100%;
					height: 100%;
					color: var(--ctp-mocha-text);
					background: var(--ctp-mocha-mantle);
					overflow: hidden;

					transition: all 0.33s;
					border-radius: 0.5rem;
					padding: 0.25rem;

					&:hover {
						background: var(--_accent);
						color: var(--ctp-mocha-base);
					}

					& > p {
						font-size: 0.75rem;
						padding: 1rem;
					}
					& > h2 {
						text-align: center;
					}

					&.card-1 {
						grid-area: a;
						--accent: var(--ctp-mocha-red);
					}
					&.card-2 {
						grid-area: b;
						--accent: var(--ctp-mocha-peach);
					}
					&.card-3 {
						grid-area: c;
						--accent: var(--ctp-mocha-yellow);
					}
					&.card-4 {
						grid-area: d;
						--accent: var(--ctp-mocha-green);
					}
					&.card-5 {
						grid-area: e;
						--accent: var(--ctp-mocha-teal);
					}
					&.card-6 {
						grid-area: f;
						--accent: var(--ctp-mocha-blue);
					}
					&.card-7 {
						grid-area: g;
						--accent: var(--ctp-mocha-mauve);
					}
				}
			}
		</style>
	</div>

	<div id="task-3">
		<input type="text" name="name" id="name" placeholder="John" />
		<input type="text" name="name2" id="name2" placeholder="Smith" />
		<input type="email" name="email" id="email" placeholder="example@gmail.com" />
		<input type="tel" name="tel" id="tel" placeholder="+1 (234) 567 89-01" />
		<input type="text" name="more" id="more" placeholder="Your message goes here" />
		<button type="submit" id="submit">Submit</button>

		<style>
			#task-3 {
				display: grid;

				background: var(--ctp-mocha-surface0);
				padding: 1rem;
				border-radius: 1rem;
				gap: 1rem;

				width: calc(100% - 10rem);

				& > input {
					font-size: 1rem;
					border: none;
					border-radius: 0.5rem;
					padding: 0.5rem 0;
					background: var(--ctp-mocha-base);
					color: var(--ctp-mocha-text);
					text-indent: 0.5rem;

					&::placeholder {
						color: var(--ctp-mocha-overlay0);
					}
				}
				& > button {
					display: grid;
					align-self: start;

					padding: 0.5rem 0;
					font-size: 1rem;

					background: var(--ctp-mocha-blue);
					color: var(--ctp-mocha-base);
					border: none;
					border-radius: 0.5rem;
				}

				grid-template-areas:
					'name name2'
					'email tel'
					'more more'
					'submit .';
				& > #name {
					grid-area: name;
				}
				& > #name2 {
					grid-area: name2;
				}
				& > #email {
					grid-area: email;
				}
				& > #tel {
					grid-area: tel;
				}
				& > #more {
					grid-area: more;
				}
				& > #submit {
					grid-area: submit;
				}
			}
			@media (max-width: 1000px) {
				#task-3 {
					grid-template-areas:
						'name'
						'name2'
						'email'
						'tel'
						'more'
						'submit';
				}
			}
		</style>
	</div>

	<div id="task-4">
		<footer>
			<div class="about">
				<h2>About Us</h2>
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos dolore repellat aperiam,
					quibusdam commodi fugit nam dolor laboriosam natus possimus quia repudiandae iste eligendi
					consectetur, distinctio perferendis non! Rem doloremque nobis accusamus sint a, molestias atque
					itaque labore, illum mollitia maxime non. Laudantium quam recusandae vero delectus eum corporis non!
				</p>
				<div class="buttons">
					<button class="link-button link-youtube">
						<svg viewBox="0 0 576 512"><path /></svg>
					</button>
					<button class="link-button link-twitter">
						<svg viewBox="0 0 512 512"><path /></svg>
					</button>
					<button class="link-button link-github">
						<svg viewBox="0 0 496 512"><path /></svg>
					</button>
					<button class="link-button link-discord">
						<svg viewBox="0 0 640 512"><path /></svg>
					</button>
				</div>
			</div>
			<div class="links">
				<h2>Quick Links</h2>
				<button class="link-text">About</button>
				<button class="link-text">FAQ</button>
				<button class="link-text">Privacy Policy</button>
				<button class="link-text">Help</button>
				<button class="link-text">Terms & Conditions</button>
				<button class="link-text">Contacts</button>
			</div>
			<div class="shop">
				<h2>Shop</h2>
				<button class="link-text">Men</button>
				<button class="link-text">Women</button>
				<button class="link-text">Children</button>
				<button class="link-text">Shoes</button>
				<button class="link-text">Dresses</button>
				<button class="link-text">Accessories</button>
			</div>
			<div class="contacts">
				<h2>Contact Us</h2>
				<div class="contact contact-location">
					<svg viewBox="0 0 384 512"><path /></svg>
					<p>14 Tverskaya Street, Moscow, 117513, Russia</p>
				</div>
				<div class="contact contact-phone">
					<svg viewBox="0 0 512 512"><path /></svg>
					<p>
						+7 987 123-45-67
						<br />
						+7 987 123-45-67
					</p>
				</div>
				<div class="contact contact-email">
					<svg viewBox="0 0 512 512"><path /></svg>
					<p>example@mail.ru</p>
				</div>
			</div>

			<p class="end">Copyright bla bla bla</p>
		</footer>

		<style>
			#task-4 {
				display: grid;
				place-items: center;

				position: fixed;
				bottom: 0;
				width: 100vw;

				& > footer {
					display: grid;
					align-items: stretch;

					gap: 2rem;
					padding: 1rem 2rem;
					background: var(--ctp-latte-blue);
					color: var(--ctp-mocha-text);

					grid-template-areas: 'about links shop contacts';
					grid-template-columns: 3fr 1.5fr 1fr 2fr;

					& p {
						font-size: 0.5rem;
					}
					& h2 {
						width: 100%;
						height: min-content;

						text-decoration: underline var(--ctp-mocha-blue);
						text-wrap: nowrap;

						font-size: 1rem;
					}
					& button {
						background: transparent;
						width: min-content;
						height: min-content;
						color: var(--ctp-mocha-text);
						text-wrap: nowrap;
					}

					& > .about {
						display: grid;
						grid-area: about;
						align-content: start;
						gap: 0.5rem;

						& > p {
							text-wrap: balance;
						}
						& > .buttons {
							display: grid;
							grid-auto-flow: column;
							gap: 0.5rem;

							width: min-content;
							height: min-content;

							& .link-button {
								display: grid;
								place-items: center;

								border-radius: 0.25rem;
								padding: 0.5rem;
								height: 2rem;
								aspect-ratio: 1/1;

								box-shadow: inset 0 0 0.2rem 0.1rem var(--ctp-mocha-blue);
								& svg {
									fill: var(--ctp-mocha-blue);
									height: 100%;
								}
							}

							& > .link-youtube path {
								d: path(
									'M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z'
								);
							}
							& > .link-twitter path {
								d: path(
									'M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z'
								);
							}
							& > .link-github path {
								d: path(
									'M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z'
								);
							}
							& > .link-discord path {
								d: path(
									'M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z'
								);
							}
						}
					}
					& > .links {
						display: grid;
						grid-area: links;
						height: min-content;
						gap: 0.25rem;
					}
					& > .shop {
						display: grid;
						grid-area: shop;
						height: min-content;
						gap: 0.25rem;
					}
					& > .contacts {
						display: grid;
						grid-area: contacts;
						min-height: 7rem;
						align-content: start;

						& > .contact {
							display: grid;
							align-items: center;
							justify-content: start;
							grid-auto-flow: column;
							gap: 1rem;
							padding: 0.25rem;

							& > svg {
								display: grid;

								width: 1rem;
								height: 1rem;

								fill: var(--ctp-mocha-blue);
							}

							& > p {
								width: 100%;
								text-align: start;
							}
						}

						& > .contact-location path {
							d: path(
								'M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z'
							);
						}
						& > .contact-phone path {
							d: path(
								'M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z'
							);
						}
						& > .contact-email path {
							d: path(
								'M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z'
							);
						}
					}
					& > .end {
						position: absolute;
						bottom: 0;
						width: 100%;

						font-size: 0.75rem;
						text-align: center;

						background: color-mix(in oklab, var(--ctp-latte-blue) 40%, var(--ctp-mocha-crust) 60%);
						color: var(--ctp-mocha-text);
					}
				}
			}
			@media (max-width: 1000px) {
				#task-4 > footer {
					grid-template-areas:
						'about links'
						'shop contacts';
					grid-template-columns: 2fr 1fr;
				}
			}
			@media (max-width: 600px) {
				#task-4 > footer {
					grid-template-areas:
						'about'
						'links'
						'shop'
						'contacts';
					grid-template-columns: 1fr;
				}
			}
		</style>
	</div>
</main>

<style>
	main {
		display: grid;
		place-items: center;
		gap: 10rem;
		padding: 3rem 1rem;
		padding-bottom: 20rem;
		position: relative;

		& button {
			border: none;
			&:hover {
				filter: brightness(125%);
			}
			&:active {
				filter: brightness(75%);
			}
		}
	}
</style>

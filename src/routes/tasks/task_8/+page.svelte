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

				max-width: 40rem;
				max-height: 30rem;
				gap: 1rem;

				grid-template-areas:
					'a a b c'
					'd e b f'
					'd g g g';
				grid-template-columns: repeat(4, 1fr);
				grid-template-rows: repeat(3, 1fr);

				& > .card {
					--_accent: var(--accent, var(--ctp-mocha-crust));
					display: grid;
					place-content: space-around;
					/* padding-bottom: 2rem; */

					width: 100%;
					height: 100%;
					color: var(--ctp-mocha-text);
					background: var(--ctp-mocha-mantle);

					transition: all 0.5s;
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
	</div>
</main>

<style>
	main {
		display: grid;
		place-items: center;
		gap: 10rem;
		padding: 3rem 1rem;
		padding-bottom: 20rem;
	}

	#task-3 {
		display: grid;

		background: var(--ctp-mocha-surface0);
		padding: 1rem;
		border-radius: 1rem;
		gap: 1rem;

		max-width: 40rem;
		max-height: 30rem;

		& > input {
			font-size: 1rem;
			width: 100%;
			border: none;
			border-radius: 0.5rem;
			padding: 0.5rem 0;
			background: var(--ctp-mocha-base);
			color: var(--ctp-mocha-text);
			&::placeholder {
				color: var(--ctp-mocha-overlay0);
			}
			text-indent: 1rem;
		}
		& > button {
			display: grid;
			align-self: start;
			width: 100%;
			padding: 0.5rem 0;
			font-size: 1rem;
			background: var(--ctp-mocha-blue);
			color: var(--ctp-mocha-base);
			border: none;
			border-radius: 0.5rem;
			&:hover {
				filter: brightness(125%);
			}
			&:active {
				filter: brightness(150%);
			}
		}

		grid-template-areas:
			'name name2'
			'email tel'
			'more more'
			'submit .';
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: repeat(3, 1fr);
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
</style>

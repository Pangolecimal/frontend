<script>
	import { onMount } from 'svelte';
	import { page } from '$app/stores';

	// @ts-ignore
	let send_help = function (e) {};

	onMount(() => {
		send_help = function (e) {
			let got = e.target.closest('svg').id ?? '';
			if (got === 'open') {
				// @ts-ignore
				document.getElementById('open').dataset.active = false; // @ts-ignore
				document.getElementById('close').dataset.active = true;
				open_flood_gates();
			} else if (got === 'close') {
				// @ts-ignore
				document.getElementById('open').dataset.active = true; // @ts-ignore
				document.getElementById('close').dataset.active = false;
				close_flood_gates();
			}
		};

		function open_flood_gates() {
			console.log('open_flood_gates'); // @ts-ignore
			document.getElementById('modal').dataset.active = true;
		}
		function close_flood_gates() {
			console.log('close_flood_gates'); // @ts-ignore
			document.getElementById('modal').dataset.active = false;
		}
	});
</script>

<header>
	<nav>
		<a href="/" id="home">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
				<path
					d="M234.7 42.7L197 56.8c-3 1.1-5 4-5 7.2s2 6.1 5 7.2l37.7 14.1L248.8 123c1.1 3 4 5 7.2 5s6.1-2 7.2-5l14.1-37.7L315 71.2c3-1.1 5-4 5-7.2s-2-6.1-5-7.2L277.3 42.7 263.2 5c-1.1-3-4-5-7.2-5s-6.1 2-7.2 5L234.7 42.7zM46.1 395.4c-18.7 18.7-18.7 49.1 0 67.9l34.6 34.6c18.7 18.7 49.1 18.7 67.9 0L529.9 116.5c18.7-18.7 18.7-49.1 0-67.9L495.3 14.1c-18.7-18.7-49.1-18.7-67.9 0L46.1 395.4zM484.6 82.6l-105 105-23.3-23.3 105-105 23.3 23.3zM7.5 117.2C3 118.9 0 123.2 0 128s3 9.1 7.5 10.8L64 160l21.2 56.5c1.7 4.5 6 7.5 10.8 7.5s9.1-3 10.8-7.5L128 160l56.5-21.2c4.5-1.7 7.5-6 7.5-10.8s-3-9.1-7.5-10.8L128 96 106.8 39.5C105.1 35 100.8 32 96 32s-9.1 3-10.8 7.5L64 96 7.5 117.2zm352 256c-4.5 1.7-7.5 6-7.5 10.8s3 9.1 7.5 10.8L416 416l21.2 56.5c1.7 4.5 6 7.5 10.8 7.5s9.1-3 10.8-7.5L480 416l56.5-21.2c4.5-1.7 7.5-6 7.5-10.8s-3-9.1-7.5-10.8L480 352l-21.2-56.5c-1.7-4.5-6-7.5-10.8-7.5s-9.1 3-10.8 7.5L416 352l-56.5 21.2z"
				/></svg
			>
		</a>
		<div id="location">
			<div>Location:</div>
			<div>{$page.url.pathname}</div>
		</div>

		<div class="modal">
			<a href="/tasks" class="secondary" id="tasks">Tasks</a>
			<a href="/about" class="secondary" id="about">About</a>
		</div>
	</nav>
</header>

<main>
	<slot />
</main>

<style type="text/css">
	:global(html, body) {
		background-color: var(--ctp-mocha-base);
		color: var(--ctp-mocha-text);
		font-size: 1.25rem;
		height: 100%;
	}

	:global(*) {
		box-sizing: border-box;
		margin: 0;
	}

	:global(a) {
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

	:global(button) {
		border: none;
		transition: filter 100ms;
		&:hover {
			filter: brightness(115%);
		}
		&:active {
			filter: brightness(75%);
		}
	}

	main {
		height: 100%;
		padding: 1rem;
		padding-top: 4rem;
	}

	header {
		position: fixed;
		top: 0;
		left: 0;
		z-index: 1000;
		width: 100vw;
	}

	#location {
		display: grid;
		place-items: center;
		place-self: center;
		grid-template-rows: 1fr 1fr;

		width: fit-content;
		height: fit-content;
		color: var(--ctp-mocha-blue);
	}

	nav {
		position: relative;
		display: grid;
		grid-auto-flow: column;
		grid-template-columns: 1fr 3fr 1fr;
		height: fit-content;

		gap: 1rem;
		padding: 0.5rem 1rem;
		background: var(--ctp-mocha-mantle);
		/* justify-content: end; */
		font-size: 1rem;
		font-weight: 900;

		& a {
			text-decoration: none;
			display: grid;
			place-items: center;
		}

		& > :nth-child(1) {
			justify-self: start;
		}
		& > :nth-child(3) {
			justify-self: end;
			grid-area: 1/3;
		}
	}

	a {
		color: var(--ctp-mocha-blue);
	}
	a:hover {
		color: var(--ctp-mocha-sky);
	}

	svg {
		fill: var(--ctp-mocha-blue);
		height: 2.5rem;
		width: 2.5rem;

		&:hover {
			fill: var(--ctp-mocha-sky);
		}
	}

	/* @media only screen and (orientation: portrait) {
		-- ADD BUGRG
	} */
</style>

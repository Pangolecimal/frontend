<script>
	// @ts-nocheck

	function send_help(e) {
		let got = e.target.closest('svg').id ?? '';
		if (got === 'open') {
			document.getElementById('open').style.display = 'none';
			document.getElementById('close').style.display = 'grid';
			open_flood_gates();
		} else if (got === 'close') {
			document.getElementById('open').style.display = 'grid';
			document.getElementById('close').style.display = 'none';
			close_flood_gates();
		}
	}

	function open_flood_gates() {
		console.log('open_flood_gates');
		document.getElementById('modal').dataset.active = true;
	}
	function close_flood_gates() {
		console.log('close_flood_gates');
		document.getElementById('modal').dataset.active = false;
	}
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
		<div class="spacer" />

		<a href="/tasks" class="secondary" id="tasks">Tasks</a>
		<a href="/about" class="secondary" id="about">About</a>

		<div id="modal" data-active="false">
			<a href="/tasks" class="secondary" id="tasks">Tasks</a>
			<a href="/about" class="secondary" id="about">About</a>
		</div>

		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div id="burger" on:click={send_help}>
			<svg id="open" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
				><path
					d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
				/></svg
			>
			<svg id="close" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"
				><path
					d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
				/></svg
			>
		</div>
	</nav>
</header>

<slot />

<style type="text/css">
	:global(html, body) {
		padding: 0 1rem;
		box-sizing: border-box;

		background-color: var(--ctp-mocha-base);
		color: var(--ctp-mocha-text);
		font-size: 1.25rem;
	}

	:global(*) {
		margin: 0;
	}

	header {
		position: sticky;
		top: 0;
		left: 0;
		padding-bottom: 1rem;
	}

	nav {
		position: relative;
		display: flex;
		column-gap: 1rem;
		padding: 0.5rem 1rem;
		background: var(--ctp-mocha-mantle);
		border-radius: 0 0 1rem 1rem;
		justify-content: end;
		font-size: 2rem;
	}

	nav a {
		text-decoration: none;
		font-weight: 900;
		display: grid;
		place-items: center;
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
	}
	svg:hover {
		fill: var(--ctp-mocha-sky);
	}

	div.spacer {
		width: 100%;
	}

	a.secondary {
		display: none;
	}

	#burger {
		display: grid;
		height: 2.5rem;
		width: 2.5rem;
		transition: rotate 500ms;
	}

	#burger > #close {
		display: none;
	}

	#modal {
		display: grid;
		position: absolute;
		top: 100%;
		width: 10rem;
		height: 12rem;
	}
	:global(#modal[data-active='false']) {
		visibility: hidden;
		opacity: 0;
		transition: 500ms;
	}
	:global(#modal[data-active='true']) {
		visibility: visible;
		opacity: 100%;
		transition: 500ms;

		background-color: var(--ctp-mocha-base);
		box-shadow: inset 0 0 1rem 1rem var(--ctp-mocha-surface0);

		place-items: center;
		gap: 2rem;
		padding: 2rem;

		border-radius: 0 0 1rem 1rem;
	}
	:global(#modal[data-active='true'] > a) {
		display: grid;
		place-items: center;

		background: var(--ctp-mocha-base);
		box-shadow: inset 0 0 0.5rem 0.5rem var(--ctp-mocha-surface0);

		padding: 1rem;
		border-radius: 1rem;
	}

	@media (min-width: 1000px) {
		#burger {
			display: none;
		}

		a.secondary {
			display: grid;
		}
	}
</style>

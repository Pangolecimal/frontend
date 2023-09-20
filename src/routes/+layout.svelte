<script>
	/**
	 * @type {HTMLAnchorElement}
	 */
	let a_home;
	/**
	 * @type {HTMLAnchorElement}
	 */
	let a_tasks;
	let selected_anchor = 'home';

	// @ts-ignore
	function handle_anchor_click(e) {
		let id = e?.target?.id;
		a_home.dataset.selected = 'false';
		a_tasks.dataset.selected = 'false';
		if (id === 'home') a_home.dataset.selected = 'true';
		if (id === 'tasks') a_tasks.dataset.selected = 'true';
		// console.dir(a_tasks);
		// console.dir(a_home);
	}
</script>

<header>
	<nav>
		<a href="/" id="home" bind:this={a_home} data-selected="false" on:click={handle_anchor_click}>
			<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
				<path
					d="M234.7 42.7L197 56.8c-3 1.1-5 4-5 7.2s2 6.1 5 7.2l37.7 14.1L248.8 123c1.1 3 4 5 7.2 5s6.1-2 7.2-5l14.1-37.7L315 71.2c3-1.1 5-4 5-7.2s-2-6.1-5-7.2L277.3 42.7 263.2 5c-1.1-3-4-5-7.2-5s-6.1 2-7.2 5L234.7 42.7zM46.1 395.4c-18.7 18.7-18.7 49.1 0 67.9l34.6 34.6c18.7 18.7 49.1 18.7 67.9 0L529.9 116.5c18.7-18.7 18.7-49.1 0-67.9L495.3 14.1c-18.7-18.7-49.1-18.7-67.9 0L46.1 395.4zM484.6 82.6l-105 105-23.3-23.3 105-105 23.3 23.3zM7.5 117.2C3 118.9 0 123.2 0 128s3 9.1 7.5 10.8L64 160l21.2 56.5c1.7 4.5 6 7.5 10.8 7.5s9.1-3 10.8-7.5L128 160l56.5-21.2c4.5-1.7 7.5-6 7.5-10.8s-3-9.1-7.5-10.8L128 96 106.8 39.5C105.1 35 100.8 32 96 32s-9.1 3-10.8 7.5L64 96 7.5 117.2zm352 256c-4.5 1.7-7.5 6-7.5 10.8s3 9.1 7.5 10.8L416 416l21.2 56.5c1.7 4.5 6 7.5 10.8 7.5s9.1-3 10.8-7.5L480 416l56.5-21.2c4.5-1.7 7.5-6 7.5-10.8s-3-9.1-7.5-10.8L480 352l-21.2-56.5c-1.7-4.5-6-7.5-10.8-7.5s-9.1 3-10.8 7.5L416 352l-56.5 21.2z"
				/></svg
			>
		</a>
		<a href="/tasks" id="tasks" bind:this={a_tasks} data-selected="false" on:click={handle_anchor_click}>Tasks</a>
		<button type="button">Theme</button>
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
		gap: 1rem;
		padding: 1rem;
		background: var(--ctp-mocha-mantle);
		z-index: 2;
		border-radius: 0 0 1rem 1rem;
	}

	nav a {
		text-decoration: none;
		font-weight: 900;
	}

	a {
		color: var(--ctp-mocha-blue);
	}

	a:hover {
		color: var(--ctp-mocha-sky);
	}

	svg {
		fill: var(--ctp-mocha-blue);
	}

	svg:hover {
		fill: var(--ctp-mocha-sky);
	}

	button {
		position: absolute;
		right: 0.5rem;
		top: 0.5rem;
		background: var(--ctp-mocha-text);
		padding: 0.5rem;
		border: none;
		border-radius: 1rem;

		font-size: 1.25rem;
		text-decoration: none;
		font-weight: 900;
		color: var(--ctp-mocha-crust);
	}

	button:hover {
		background: var(--ctp-mocha-surface2);
	}

	button:active {
		background: var(--ctp-mocha-text);
	}
</style>

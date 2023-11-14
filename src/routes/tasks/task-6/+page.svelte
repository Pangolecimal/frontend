<script>
	// @ts-nocheck

	function send_help(e) {
		const t = e.target.closest('#bell');
		t.dataset.active = t.dataset.active === 'false' ? 'true' : 'false';
	}
</script>

<h2>Task 6</h2>

<main>
	<div id="buttons">
		<button class="button button-one">One</button>
		<button class="button button-two">Two</button>
		<button class="button button-three">Three</button>
		<button class="button button-four">Four</button>
	</div>

	<div id="notifications">
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<svg id="bell" on:click={send_help} data-active="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
			><path
				d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z"
			/></svg
		>
		<ol class="inner">
			<li>- One</li>
			<li>- Two</li>
			<li>- Three</li>
			<li>- Four</li>
		</ol>
	</div>

	<div id="cards">
		{#each [1, 2, 3] as num}
			<div class="card card-{num}">
				<img src="/src/lib/napoleon_{num}.png" alt="the is nothing we can do" usemap="#workmap_2" />
				<p>There is nothing we can do.</p>
			</div>
		{/each}
	</div>

	<div id="video">
		<div class="vid">
			<img src="/src/lib/napoleon_4.png" alt="the is nothing we can do" usemap="#workmap_2" />
			<p>There is nothing we can do.</p>
		</div>
	</div>
</main>

<style>
	main {
		width: 100%;
		height: 100%;
		background: var(--ctp-mocha-mantle);
		gap: 2rem;
		display: grid;
		/* place-items: center; */
		padding: 5rem 0;
	}

	img {
		height: 300px;
	}

	#buttons {
		display: grid;
		place-items: center;
		justify-content: space-evenly;
		grid-auto-flow: column;
		padding: 1rem;
	}
	#buttons > .button {
		width: 6rem;
		height: 4rem;
		display: grid;
		place-items: center;
		color: var(--ctp-mocha-base);
		font-size: 2rem;
		border-radius: 1rem;
		font-weight: 900;
	}
	#buttons > .button:nth-child(1) {
		background: linear-gradient(45deg, var(--ctp-mocha-red), var(--ctp-mocha-peach));
	}
	#buttons > .button:nth-child(2) {
		background: linear-gradient(56deg, var(--ctp-mocha-green), var(--ctp-mocha-sky));
	}
	#buttons > .button:nth-child(3) {
		background: linear-gradient(120deg, var(--ctp-mocha-blue), var(--ctp-mocha-mauve));
	}
	#buttons > .button:nth-child(4) {
		background: linear-gradient(200deg, var(--ctp-mocha-text), var(--ctp-mocha-crust));
	}

	#bell {
		height: 3rem;
		fill: var(--ctp-mocha-text);
	}
	#notifications {
		display: grid;
		position: relative;
		place-items: center;
	}
	:global(#bell[data-active='true'] + .inner) {
		visibility: visible;
		opacity: 100%;
	}
	:global(#bell[data-active='false'] + .inner) {
		visibility: hidden;
		opacity: 0;
	}
	.inner {
		top: 100%;
		position: absolute;
		background: var(--ctp-mocha-red);
		color: var(--ctp-mocha-base);
		padding: 0.5rem;
		border-radius: 1rem;
		width: 10rem;
		transition: all 300ms;
		z-index: 10;
		list-style-type: none;
		display: grid;
		gap: 0.5rem;
	}
	.inner > li {
		display: grid;
		background-color: var(--ctp-mocha-base);
		color: var(--ctp-mocha-text);
		border-radius: 0.5rem;
		padding: 0.25rem;
	}

	#cards {
		display: grid;
		grid-auto-flow: column;
		place-items: center;
		justify-content: space-evenly;
	}
	.card {
		display: grid;
		position: relative;
	}
	.card > p {
		background: linear-gradient(transparent, var(--ctp-mocha-crust));
		width: calc(100% - 1rem);
		height: calc(100% - 1rem);
		visibility: hidden;
		opacity: 0;
		position: absolute;
		color: var(--ctp-mocha-text);
		display: grid;
		align-items: end;
		transition: 300ms all;
		padding: 0.5rem;
	}
	.card:hover > p {
		visibility: visible;
		opacity: 100%;
	}

	#video {
		display: grid;
		grid-auto-flow: column;
		place-items: center;
		justify-content: space-evenly;
	}
	.vid {
		display: grid;
		position: relative;
	}
	.vid > p {
		background: var(--ctp-mocha-crust);
		width: calc(100% - 1rem);
		height: calc(100% - 3rem);
		top: 1rem;
		left: -2rem;
		visibility: hidden;
		opacity: 0;
		position: absolute;
		color: var(--ctp-mocha-text);
		display: grid;
		place-items: center;
		transition: 300ms all;
		padding: 0.5rem;
	}
	.vid:hover > p {
		visibility: visible;
		opacity: 100%;
	}
</style>

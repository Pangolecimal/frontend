<script>
	import { onMount } from 'svelte';

	const GRID_SIZE = 5;

	onMount(() => {
		const grid = document.getElementById('grid');
		if (grid == null) return console.error('no grid found');

		grid.setAttribute('style', `grid-template-columns: repeat(${GRID_SIZE}, 1fr);`);
		for (let i = 0; i < GRID_SIZE * GRID_SIZE; i++) {
			grid.innerHTML += ``;
		}
	});
</script>

<header>
	<h1>
		<a href="https://en.wikipedia.org/wiki/Lights_Out_(game)">Lights Out</a>
	</h1>
</header>
<main>
	<div id="grid" data-size={GRID_SIZE}>
		<div class="cell" data-active="false" on:click={(this.dataset.active = true)} />
	</div>
</main>

<style>
	:root {
		--w: rgb(255 255 255 / 0.1);

		--bg: var(--ctp-mocha-surface0);
		--off: var(--ctp-mocha-surface2);
		--on: var(--ctp-mocha-overlay2);

		/* --bg: var(--slate-900);
		--off: var(--slate-700);
		--on: var(--slate-400); */
	}

	header {
		display: grid;
		place-items: center;

		& > h1 {
			width: fit-content;
		}
	}

	main {
		display: grid;
		place-items: center;

		& > #grid {
			--_gap: 0.5rem;

			display: grid;
			/* grid-template-columns: repeat(GRID_SIZE, 1fr); */

			width: fit-content;
			background: var(--bg);
			padding: var(--_gap);
			border-radius: calc(var(--_gap) * (1 + 1 / 4));
			gap: calc(var(--_gap) / 2);

			& > .cell {
				width: 100px;
				height: 100px;
				border-radius: calc(var(--_gap) / 2);

				transition: all 0.1s;

				&[data-active='false'] {
					background: var(--off);
				}
				&[data-active='true'] {
					background: var(--on);
				}

				&:hover {
					filter: brightness(125%);
				}
			}
		}
	}
</style>

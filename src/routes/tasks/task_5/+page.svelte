<h2>Task 5</h2>

<div class="container">
	<div class="box">A</div>
	<div class="box">B</div>
	<div class="box">C</div>
	<div class="box">D</div>
	<div class="box">E</div>
</div>

<style>
	.container {
		display: flex;
		flex-wrap: wrap;
		justify-content: stretch;
		/* gap: 0.25rem; */
	}

	.box {
		text-align: center;
		background-color: var(--ctp-mocha-blue);
		box-shadow: inset 0 0 0 0.3rem var(--ctp-mocha-base);
		color: var(--ctp-mocha-base);
		border-radius: 0.5rem;
		padding: 3rem 0;

		flex-basis: auto;
	}

	.box:nth-child(1) {
		background-color: var(--ctp-mocha-red);
	}
	.box:nth-child(2) {
		background-color: var(--ctp-mocha-peach);
	}
	.box:nth-child(3) {
		background-color: var(--ctp-mocha-yellow);
	}
	.box:nth-child(4) {
		background-color: var(--ctp-mocha-green);
	}
	.box:nth-child(5) {
		background-color: var(--ctp-mocha-blue);
	}

	.box:nth-child(1),
	.box:nth-child(2),
	.box:nth-child(3) {
		flex-basis: 100%;
	}
	.box:nth-child(4),
	.box:nth-child(5) {
		flex-basis: 50%;
	}

	/* @media (min-width: 800px) { */
	@media screen and (orientation: landscape) {
		.box:nth-child(2) {
			flex-basis: calc(1 / 3 * 100%);
		}
		.box:nth-child(5) {
			flex-basis: calc(2 / 3 * 100%);
		}

		.box:nth-child(3) {
			flex-basis: calc(2 / 3 * 100%);
			order: 1;
		}
		.box:nth-child(4) {
			flex-basis: calc(1 / 3 * 100%);
			order: 2;
		}
	}
</style>

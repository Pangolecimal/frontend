<h2>Task 5</h2>

<!-- 

AAA
BBE
CDD

AA
BB
EE
CD

-->

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
		gap: 0.25rem;
	}

	.box {
		text-align: center;
		background-color: var(--ctp-mocha-blue);
		color: var(--ctp-mocha-base);
		border-radius: 0.3rem;
		padding: 1rem 0;

		flex-basis: auto;
	}

	.box:nth-child(1),
	.box:nth-child(2),
	.box:nth-child(3) {
		flex-basis: 99.25%;
	}
	.box:nth-child(4),
	.box:nth-child(5) {
		flex-basis: 49.5%;
	}

	@media (min-width: 1000px) {
		.box:nth-child(2) {
			flex-basis: 33%;
		}
		.box:nth-child(5) {
			flex-basis: 66%;
		}

		.box:nth-child(3) {
			flex-basis: 66%;
			order: 3;
		}
		.box:nth-child(4) {
			flex-basis: 33%;
			order: 4;
		}
	}
</style>

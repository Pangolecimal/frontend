<h2>Task 2</h2>

<div class="container">
	<main>
		<h3>Topic</h3>
		<section>
			<h4>Sub 1</h4>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dignissimos sint mollitia possimus fugiat
				perspiciatis reiciendis?
			</p>
		</section>

		<section>
			<h4>Sub 2</h4>
			<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et, aliquid!</p>
		</section>

		<section>
			<h4>Sub 3</h4>
			<p>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta ex quaerat aliquid tempora provident dolorem
				illo aliquam, veniam fuga rem?
			</p>
		</section>
	</main>

	<div class="cont_2">
		<article class="forecast">
			<h1>Weather forecast for Lapland</h1>
			<article class="day-forecast">
				<h2>03 March 1024</h2>
				<p>Snow</p>
			</article>
			<article class="day-forecast">
				<h2>04 March 1024</h2>
				<p>Hailstorm</p>
			</article>
			<article class="day-forecast">
				<h2>05 March 1024</h2>
				<p>Just freakin Cold</p>
			</article>
		</article>

		<aside>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eius quia quae earum. Enim quam nesciunt
				reiciendis non quia sit veniam adipisci dolorem saepe rerum, ex iusto nobis? Similique, odio? Ipsa ab
				dignissimos, veniam, aperiam facere asperiores dolorum provident quod accusamus delectus quae deleniti debitis
				quas reprehenderit, magni consectetur voluptas!
			</p>
		</aside>
	</div>
</div>
<footer>
	<h3>Thank You For Your Patronage!</h3>
</footer>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=Lora&family=Press+Start+2P&display=swap');

	.container {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		padding-bottom: 10rem;
	}

	main {
		padding-top: 1rem;
	}

	section {
		padding-top: 0.5rem;
	}

	.forecast {
		padding: 1rem;
		background-color: var(--ctp-mocha-mantle);
		display: flex;
		gap: 1rem;
		flex-direction: column;
		flex-shrink: 0;
		flex-basis: 40%;
	}

	.forecast > h1,
	.day-forecast {
		padding: 0.5rem;
		font-size: 1.25rem;
	}

	.day-forecast {
		background: var(--ctp-mocha-base);
	}

	.day-forecast > h2,
	.day-forecast > p {
		font-size: 1rem;
	}

	aside {
		padding-left: 0.5rem;
		margin-left: 0.5rem;
		box-shadow: inset 0.25rem 0 0.25rem -0.25rem var(--ctp-mocha-sky);
		font-style: italic;
		color: var(--ctp-mocha-subtext0);
	}

	aside > p {
		padding: 0.5rem;
	}

	.cont_2 {
		display: flex;
	}

	footer {
		display: flex;
		justify-content: center;
		padding: 1rem;
		background-color: var(--ctp-mocha-peach);
		color: var(--ctp-mocha-text);
		text-shadow: 0.25rem 0.25rem 0 1rem black;
		border-radius: 0.5rem 0.5rem 0 0;
	}

	h1,
	h2,
	h3 {
		/* font-family: 'Press Start 2P', cursive; */
		font-family: 'Lora', serif;
	}
</style>

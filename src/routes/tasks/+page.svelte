<script>
	let numbers = ['Ichi', 'Ni', 'San', 'Shi', 'Go', 'Roku', 'Nana', 'Hachi'];
</script>

<h1>Tasks</h1>

<ul class="tasks">
	{#each numbers as num, i}
		<li><b>{i + 1} </b><a href="/tasks/task_{i + 1}">{num}</a></li>
	{/each}
</ul>

<style>
	ul {
		background-color: var(--ctp-mocha-mantle);
		padding: 1rem;
		/* padding-left: 3rem; */
		display: flex;
		flex-direction: column;
		gap: 1rem;
		border-radius: 2rem;
	}

	li {
		border-radius: 1rem;
		padding: 0.5rem;
		background-color: var(--ctp-mocha-base);
		list-style-type: none;
	}

	a {
		color: var(--ctp-mocha-blue);
	}

	a:hover {
		color: var(--ctp-mocha-sky);
	}
</style>

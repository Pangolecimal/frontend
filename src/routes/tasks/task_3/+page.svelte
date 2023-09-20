<h2>Task 3</h2>

<div class="positions">
	Hi, I am Relative.
	<div class="absolute">Hi, I am ABSOLUTE.</div>

	<div class="fixed">And I am <em>fixed</em>.</div>
</div>

<div class="felonious_floaters">
	<p>
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore dolores obcaecati ipsum pariatur autem officiis
		quidem in magnam amet inventore!
	</p>

	<div class="float_left"><img src="/src/lib/img_123.jpg" alt="lorem" width="600px" /></div>

	<p>
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui voluptas ex saepe voluptatibus, a voluptatum ullam
		impedit doloribus sunt magnam veritatis, quos quis vitae inventore perspiciatis soluta doloremque rem
		recusandae, expedita autem iusto alias. Nisi, autem corrupti ratione velit accusantium quia molestias nesciunt
		sapiente laudantium soluta delectus quos! Explicabo sint quod, error fugiat dolore numquam! Maxime eos ullam
		assumenda quas.
	</p>

	<div class="float_right"><img src="/src/lib/idk_handle.jpg" alt="lorem" width="600px" /></div>

	<p>
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates esse nulla nobis minima totam nemo animi,
		aliquam quasi velit? Quod, quisquam. Id nulla itaque perferendis dignissimos voluptatem alias hic deserunt,
		suscipit numquam impedit officiis, ducimus harum quod sequi aspernatur libero? Eius ea, totam rem hic quasi
		cupiditate aut vel exercitationem sapiente optio! Ipsa culpa beatae corporis excepturi ratione placeat labore?
	</p>
</div>

<style>
	.positions {
		display: flex;
		flex-direction: column;
		gap: 10rem;
		background-color: var(--ctp-mocha-mantle);
		position: relative;
		width: 60rem;
		height: 20rem;
		padding: 1rem;
		border-radius: 2rem;
	}

	.absolute {
		position: absolute;
		left: 5rem;
		top: 10rem;
	}

	.fixed {
		position: fixed;
		top: 10rem;
		right: 0;
	}

	.felonious_floaters {
		width: 50%;
	}
	.felonious_floaters img {
		padding: 1rem;
	}

	.felonious_floaters > .float_left > img {
		float: left;
	}
	.felonious_floaters > .float_right > img {
		float: right;
	}
</style>

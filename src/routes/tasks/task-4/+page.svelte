<h2>Task 4</h2>

<main>
	<form method="get">
		<div class="inputs">
			<input type="text" name="text" id="text" placeholder="Text" required />
			<input type="tel" name="tel" id="tel" placeholder="Telephone" />
			<input type="email" name="email" id="email" placeholder="Email" />
			<input type="password" name="password" id="password" placeholder="Password" />
			<input type="file" name="file" id="file" />
			<input type="checkbox" name="checkbox" id="checkbox" checked />
			<input type="radio" name="radio" id="radio" checked />
			<input type="datetime-local" name="datetime" id="datetime" />
			<textarea name="textarea" id="textarea" cols="30" rows="5" placeholder="Textarea" />
		</div>
		<fieldset>
			<legend>Some Fieldset</legend>
			<label for="label">Some Label: </label>
			<input type="text" name="label" id="label" required />
			<br />
			<select name="select" id="select">
				<option value="option1">Option 1</option>
				<option value="option2">Option 2</option>
				<option value="option3">Option 3</option>
			</select>
		</fieldset>
		<button type="submit">Submit</button>
	</form>

	<div class="iframes">
		<iframe
			src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d104995.01637295903!2d135.40363685031107!3d34.67757037619676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000e6553406e2e1%3A0xc55bc16ee46a2fe7!2sOsaka%2C%20Japan!5e0!3m2!1sen!2sru!4v1695882416616!5m2!1sen!2sru"
			width="600"
			height="450"
			style="border:0;"
			allow="fullscreen"
			loading="lazy"
			referrerpolicy="no-referrer-when-downgrade"
			title="some map"
		/>

		<iframe
			width="560"
			height="315"
			src="https://www.youtube.com/embed/bjTxiFLSNFA?si=jR2z6nIH7kR5k1c8"
			title="YouTube video player"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			allowfullscreen
		/>
	</div>
</main>

<style>
	main {
		display: grid;
		gap: 2rem;
		padding: 3rem 0;
	}

	form {
		padding: 1rem;
		box-shadow: 0 0 0.2rem 0.3rem var(--ctp-mocha-overlay0), inset 0 0 0.2rem 0.1rem var(--ctp-mocha-overlay2);
		border-radius: 1rem;
	}

	:is(input, textarea) {
		background-color: var(--ctp-mocha-surface0);
		padding: 0.1rem;
		font-family: Arial, sans-serif;
		font-size: 16px;
		border: none;
		border-radius: 0.3rem;
		color: var(--ctp-mocha-text);
	}

	:is(input, textarea):focus {
		background-color: var(--ctp-mocha-surface1);
	}

	textarea {
		resize: both;
	}

	select {
		width: 6rem;
	}

	:is(input, textarea)::placeholder {
		color: var(--ctp-mocha-overlay2);
	}

	button {
		background-color: var(--ctp-mocha-surface0);
		color: var(--ctp-mocha-text);
		padding: 0.1rem 0.2rem;
		font-family: Arial, sans-serif;
		font-size: 16px;
		border: none;
		border-radius: 0.3rem;
	}

	button:focus {
		outline: none;
		background-color: var(--ctp-mocha-text);
		color: var(--ctp-mocha-surface0);
	}

	.iframes {
		display: grid;
		place-items: center;
		grid-auto-flow: column;
	}

	.inputs {
		/* display: grid; */
	}
</style>

<h2>Task 1: About Cats</h2>

<br />

<h2>Headings</h2>
<h3>Cats</h3>
<h4>are</h4>
<h5>amazing</h5>
<h6>creatures</h6>

<br />

<h2>Paragraphs</h2>
<pre>
    Cats are domesticated mammals that are typically small and carnivorous. 
        They are often kept as pets and are known for
            their independent and mysterious nature.
</pre>
<p>
	Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br />
	Optio molestiae in saepe animi numquam omnis voluptatum vitae accusamus illum eligendi nisi fuga, <br />
	eveniet aliquid repudiandae voluptas ab?<br />
	Quisquam in exercitationem corrupti enim illum porro placeat totam!
</p>

<br />

<h2>Text Formatting</h2>
<p><b>Bold Lorem ipsum dolor sit amet</b></p>
<p><strong>Strong Lorem ipsum dolor sit amet</strong></p>
<p><i>Italic Lorem ipsum dolor sit amet</i></p>
<p><em>Emphasized Lorem ipsum dolor sit amet</em></p>
<p><u>Underlined Lorem ipsum dolor sit amet</u></p>
<p><sub>Sub</sub>script</p>
<p><sup>Super</sup>script</p>

<blockquote cite="https://www.huxley.net/bnw/four.html">
	<p>
		Blockquote: Words can be like X-rays, if you use them properly—they'll go through anything. You read and you're
		pierced.
	</p>
	<footer>—Aldous Huxley, <cite>Brave New World</cite></footer>
</blockquote>
<p><abbr title="HyperText Markup Language">HTML</abbr></p>

<br />

<h2>Links</h2>
<p><a href="https://www.petfinder.com/cats-and-kittens/">Link to a site about cats</a></p>
<p><a href="tel:+1234567890">Phone number</a></p>
<p><a href="mailto:example@example.com">Email</a></p>

<br />

<h2>Ordered List</h2>
<ol type="I" start="3">
	<li>List item 3</li>
	<li>
		List item 4
		<ul>
			<li>Nested item 1</li>
			<li>Nested item 2</li>
		</ul>
	</li>
	<li>List item 5</li>
</ol>

<br />

<h2>Description List</h2>
<dl>
	<dt><q>Linux</q></dt>
	<dd>AKchSuaLly it's GNU/Linux</dd>

	<br />

	<dt><q>NixOS</q></dt>
	<dd>The BEST Linux Distribution</dd>
	<dd>i use it everywhere</dd>
	<dd>Its completely reproducible!</dd>

	<br />

	<dt><q>Set</q></dt>
	<dd>Can you believe that there are 430 definitions?</dd>
	<dd>Hell no i'm not listing them here.</dd>
	<dd>What did you expect from such a page as this?</dd>
	<dd>this is <em>the</em> last line of <q>definitions.</q></dd>

	<br />

	<dt><q>Run</q></dt>
	<dd>there are 645 definitions...</dd>

	<br />

	<dt><q>Glimmer</q></dt>
	<dd>weak/unsteady light</dd>
</dl>

<br />

<img src="/src/lib/image_1.jpg" alt="a collection of kittens" usemap="#workmap_1" width="800px" />
<map name="workmap_1">
	<area shape="rect" coords="200, 50, 400, 250" alt="rectangle" href="/tasks/task_1/rect" />
</map>

<img src="/src/lib/image_2.jpg" alt="a beautiful cat" usemap="#workmap_2" width="800px" />
<map name="workmap_2">
	<area shape="circle" coords="500, 250, 250" alt="circle" href="/tasks/task_1/circle" />
</map>

<style>
	a {
		color: var(--ctp-mocha-blue);
	}

	a:hover {
		color: var(--ctp-mocha-sky);
	}

	blockquote,
	pre {
		background-color: var(--ctp-mocha-mantle);
		padding: 1rem;
		margin: 0;
		border-radius: 0.5rem;
	}

	ol {
		padding: 0 5rem;
	}
</style>

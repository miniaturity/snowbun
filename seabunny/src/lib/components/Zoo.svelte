<style lang="scss">
	@use "../styles/globals";

	#zoo_linkBanner {
		background-color: #1F53FF;
		padding: 10px;
		display: flex;
		align-items: center;
		justify-content: center;

		position: fixed;
		left: 0;
		right: 0;
		top: 0;
		height: 50px;
		z-index: 1000;
		font-size: 1.4rem;

		font-family: u001, sans-serif;
		text-decoration: none;
		color: white;

		& span:not(.material-symbols-outlined) {
			padding: 4px;
		}

		&:hover {
			cursor: pointer;

			& span {
				background-color: globals.$hl;
				color: #000;
			}
		}
}
	
</style>

<a href = "https://zoo.hackclub.com">
	<div id="zoo_linkBanner">
			<span>check out more @ the zoo! <span class="material-symbols-outlined">pets</span> </span> 
	</div>
</a>
<div style="height: 85px"></div>
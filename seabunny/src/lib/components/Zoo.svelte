<style lang="scss">
	@use "../styles/globals";

	@font-face {
			font-family: 'Phantom Sans';
			src: url('https://assets.hackclub.com/fonts/Phantom_Sans_0.7/Bold.woff')
					format('woff'),
					url('https://assets.hackclub.com/fonts/Phantom_Sans_0.7/Bold.woff2')
					format('woff2');
			font-weight: bold;
			font-style: normal;
			font-display: swap;
	}

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

		& span {
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
			<span>check out more @ the zoo!</span>
	</div>
</a>
<div style="height: 85px"></div>
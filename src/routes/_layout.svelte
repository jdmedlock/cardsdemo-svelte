<script>
	import GlobalStyle from '../components/GlobalStyle.svelte'
	import Nav from '../components/Nav.svelte';

	export let segment;
</script>

<GlobalStyle />

<style>
	main {
		position: relative;
		max-width: 56em;
		background-color: white;
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>

<Nav {segment}/>

<main>
	<slot></slot>
</main>
<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<script lang="ts">

	import ExpCardCarousel from 'src/components/speey/ExpCardCarousel.svelte';

	import {cards} from 'src/db/ExpCards';
	console.log(cards)

	import SkillsBottom from 'src/components/speey/SkillsBottom.svelte';

	import Terts from 'src/components/speey/Terts.svelte'

	
  </script>

<div class="page">
	<h1>About this app</h1>

	<ExpCardCarousel {cards}/> 

	<SkillsBottom/>

	<Terts/>
</div>

<style>

	.page{
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: rgb(4, 4, 92);

		gap: 2em;
		margin: 0 0 0 0;

		width: 100%;
	}

	
</style>
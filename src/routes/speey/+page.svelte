<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<script lang="ts">

	import ExpCardCarousel from 'src/components/speey/ExpCardCarousel.svelte';
	import DepthButton from 'src/components/speey/DepthButton.svelte';

	import SkillsKeyboard from 'src/components/speey/SkillsKeyboard.svelte';
	import SkillCategoryKeyboard from 'src/components/speey/SkillCategoryKeyboard.svelte';
	import {cards} from 'src/db/ExpCards';
	console.log(cards)

	
  </script>

<div class="text-column">
	<h1>About this app</h1>

	<ExpCardCarousel {cards}/> 
	<div class="filler"></div>

	<SkillsKeyboard/>
	<SkillCategoryKeyboard/>

</div>

<style>
	.filler{
		height: 10em;
	}
</style>
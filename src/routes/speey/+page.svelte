

<script lang="ts">

	import ExpCardCarousel from 'src/components/ExpCardCarousel.svelte';

	import {cards} from 'src/db/ExpCards';
	console.log(cards)

	import SkillsBottom from 'src/components/SkillsBottom.svelte';



	
  </script>

<div class="page">

	<ExpCardCarousel {cards}/> 

	<SkillsBottom/>

	<!-- <Terts/>
	<Terters/> -->
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
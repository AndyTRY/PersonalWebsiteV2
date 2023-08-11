

<script lang="ts">

	import ExpCardCarousel from 'src/components/ExpCardCarousel.svelte';

	import {cards} from 'src/db/ExpCards';


	import SkillsBottom from 'src/components/SkillsBottom.svelte';

	import Tre from 'src/components/utils/Tre.svelte'



	
  </script>

<div class="page">

	<Tre/>

	<ExpCardCarousel {cards} />

	<SkillsBottom/>

	<!-- <Terts/>
	<Terters/> -->

	<div class="padding"></div>
</div>


<style>

	.page{
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: grey;

		gap: 2em;
		margin: 0 0 0 0;

		width: 100%;

		padding-top: 10em;
	}
	.padding{
		height: 500px;
	}

	
</style>
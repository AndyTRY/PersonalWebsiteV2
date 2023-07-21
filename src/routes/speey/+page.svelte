<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<script lang="ts">
	import StonePillar from 'src/components/speey/stonePillar.svelte';
	import ExpCard from 'src/components/speey/ExpCard.svelte';

	import {cards} from 'src/db/ExpCards';
	
  </script>

<div class="text-column">
	<h1>About this app</h1>

	{#each cards as card}
    <ExpCard
      title={card.title}
      tags={card.tags}
      description={card.description}
      imgSrc={card.imgSrc}
	  exprList={card.exprList}
    />
  	{/each}

</div>

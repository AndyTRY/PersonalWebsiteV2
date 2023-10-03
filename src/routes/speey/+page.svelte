

<script lang="ts">

	import CardSection from 'src/components/CardSection.svelte';
	import SiteHeading from 'src/components/SiteHeading.svelte';
	import SettingsBar from 'src/components/SettingsBar.svelte'
	import {projectCards, workExperienceCards} from 'src/db/ExpCards';


	import KeyboardDropDown from 'src/components/KeyboardDropDown.svelte';

	
	import { isKeyboardEnabled, 
			 boundaryRelationshipWorkExperienceSection,
		     boundaryRelationshipProjectsSection
	} from 'src/stores/store';

  </script>

<div class="page">

	<SiteHeading name="Andy TRY"/>



	<!-- <ExpCardCarousel {cards} /> -->
	<div class="experience-sections">
		<CardSection cards={workExperienceCards} sectionTitle="Work Experience" boundaryRelationship={boundaryRelationshipWorkExperienceSection}/>
		<CardSection cards={projectCards}  sectionTitle="Projects" boundaryRelationship={boundaryRelationshipProjectsSection}/>
	</div>



	<div class="settings-bar">
		<SettingsBar/>
	</div>

	<KeyboardDropDown/>

	

	<div class="padding"></div>
</div>


<style>

	.settings-bar{
		position: fixed;
		left: 90px;
		bottom: 100px;
	}

	.page{
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: black;

		gap: 2em;
		margin: 0 0 0 0;

		width: 100%;

		padding-top: 2em;
	}
	.padding{
		height: 500px;
	}

	.experience-sections{
		width: 70%;
		display: flex;
		flex-direction: column;
		gap: 10em;
	}

	
</style>
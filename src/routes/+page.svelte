
<script lang="ts">

	import CardSection from 'src/components/CardSection.svelte';
	import SiteHeading from 'src/components/SiteHeading.svelte';
	import SettingsBar from 'src/components/SettingsBar.svelte'
	import {projectCards, workExperienceCards} from 'src/db/ExpCards';


	import KeyboardDropDown from 'src/components/KeyboardDropDown.svelte';

	
	import { isKeyboardEnabled, 
			 boundaryRelationshipWorkExperienceSection,
		     boundaryRelationshipProjectsSection,

			 Section,
			 setDefaults,

			 screenMode,

			 ScreenMode,

			 isFoucsedImage,
		     focusImageUrl,



	} from 'src/stores/store';
	import { ExperienceType } from 'src/interface/ExpCard';
	import { onMount } from 'svelte';
	import FiltersBar from 'src/components/FiltersBar.svelte';
	import CenterFix from 'src/components/utils/CenterFix.svelte';





	function handleResize() {
        if (window.innerWidth <= 1060) {
			setDefaults()
			screenMode.set(ScreenMode.Small)
		}
		else {
			screenMode.set(ScreenMode.Normal)
		}

	}

	
	onMount(() => {
		handleResize();
		window.addEventListener('resize', handleResize);
        return () => {
			window.removeEventListener('resize', handleResize);
        };
    });

  </script>
  
  
  <div class="page">

	<CenterFix visible="{$isFoucsedImage ? true: false}">
		<img src={$focusImageUrl} alt="">
	</CenterFix>

	<div class="side settings-bar">
		<div class="with-padding">
			<SettingsBar/>
			<div class="side-padding"></div>
		</div>

	</div>


	<div class="middle main-content">
		<SiteHeading name="Andy TRY"/>

		<div class="experience-sections">
			<CardSection cards={workExperienceCards} experienceType={ExperienceType.WorkExperience} boundaryRelationship={boundaryRelationshipWorkExperienceSection}/>
			<CardSection cards={projectCards}   experienceType={ExperienceType.Project} boundaryRelationship={boundaryRelationshipProjectsSection}/>
		</div>
	
		<KeyboardDropDown/>	
		<div class="padding"></div>
	</div>


	<div class="side settings-filters">
		<FiltersBar/>
	</div>
	

</div>
  

<style lang="scss">
	.page {
	  display: flex;
	  width: 100%;
	  height: 100vh;
	  background-color: black;
	  
		.side {
			width: 15%;
			background-color: black;
		}
		.middle {
			width: 70%;
			background-color: black;
		}
	}

	.settings-bar {
		display: flex;
		align-items: flex-end;
		justify-content: center;
		
		position: fixed;
		width: 15%;
		height: 100%;

		.side-padding{
			height: 0em;
			width: 100%;
		}
	}

	.settings-filters{
		position: fixed;
		top: 0;
		right: 0;
		height: 100%;
	}

	

	.main-content {
		height: fit-content;
		margin-left: 15%; /* Adjust margin to allow space for the settings bar */

		.experience-sections{
			display: flex;
			flex-direction: column;
			gap: 10em;
		}
	}


	.settings-filters {
		width: 15%;
		background-color: #333; /* Adjust background color as needed */
	}

	.padding{
		padding-bottom: 35em;
	}


	@media (max-width: 1060px)  {

	.page {
	  display: flex;
	  width: 100%;
	  height: 100vh;
	  
		.side {
			display: none;
		}
		.middle {
			width: 90%;
		   margin-left: 5%;
		}
	}
    }

  

  </style>
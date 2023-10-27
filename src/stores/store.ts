import { writable, derived } from 'svelte/store';





// SKILL DISPLAY
export const hoveredSkill = writable("Skill Name");

import { skillCounts } from 'src/db/SkillCounts';
export const hoveredSkillCount =  derived([hoveredSkill],([$hoveredSkill]) => {
    return skillCounts[$hoveredSkill] || 0
});



// KEYBOARD SETTING
// If the Keyboard has been enabled, it should be hidden when scrolling then restored
export const isKeyboardEnabled = writable(false);
export const isKeyboardVisible = writable(false);





// DISPLAY MODE (Experience Section)
export enum DisplayMode {
    List = 0,
    Carousel = 1,
};
const numDisplayModes = Object.keys(DisplayMode).length / 2; // WTF, this is dumb

export const experienceDisplayMode = writable(DisplayMode.List)
export function SetNextDisplayMode() {
    experienceDisplayMode.update(currentMode => currentMode == numDisplayModes - 1 ? 0 : currentMode + 1)
}




// PAGE SECTION TRACKING
export enum BoundaryRelationship{
    OutOfBoundsTop = 0,
    InBounds = 1,
    OutOfBoundsBottom = 2,

}
export const boundaryRelationshipWorkExperienceSection = writable(BoundaryRelationship.OutOfBoundsTop)
export const boundaryRelationshipProjectsSection  = writable(BoundaryRelationship.OutOfBoundsTop)

export enum Section {
    Top = "TOP",
    WorkExperience = "WRK",
    Projects = "PRO",
    End = "BOT",
    Other = "OTH",
}

export const SectionFullName: { [key: string]: string }= {
    'TIL' : "Title",
    'WRK' : "Work",
    'OTH' : "Other", 
    'PRO' : "Projects",
    'END' : "End",
};


const lookupTable: { [key: string]: string }= {
    '0_0': 'TIL',
    '1_0': 'WRK',
    '2_0': 'OTH',
    '2_1': 'PRO',
    '2_2': 'END',
};

// Tracks state of current section
export const sectionState = derived([boundaryRelationshipWorkExperienceSection,  boundaryRelationshipProjectsSection],
                                  ([$boundaryRelationshipWorkExperienceSection, $boundaryRelationshipProjectsSection]) => {

    const key = `${$boundaryRelationshipWorkExperienceSection}_${$boundaryRelationshipProjectsSection}`;
    return lookupTable[key] || "UNK"
});





// Track Filter Type
export enum FilterMode{
    All = 0,
    Categories = 1,
    Search = 2,
}
export const filterMode  = writable(FilterMode.All)

// FIELDS_FILTER
export const categoryFilter = writable("Languages")




// SEARCH_FILTER
export const searchQuery = writable("");

import { filterableSkills } from 'src/db/Keywords';
import { ExperienceType } from 'src/interface/ExpCard';
export const searchFilterSkills = derived([searchQuery],([$searchQuery]) => {
    if ($searchQuery == "") return []

    // Prefix Matching
    // return filterableSkills.filter(skill =>
    //     skill.toLowerCase().startsWith($searchQuery.toLowerCase())
    // );
    

    // Substring Matching
    return filterableSkills.filter(skill =>
        skill.toLowerCase().includes($searchQuery.toLowerCase())
    );
    

});

//Track with skills have been filtered
const skillFilterFlagDict:  { [key: string]: boolean } = {};
filterableSkills.forEach(id => {
    skillFilterFlagDict[id] = false;
});


export const skillFilterFlag = writable(skillFilterFlagDict);
export const SkillFilterFlagList = derived([skillFilterFlag],([$skillFilterFlag]) => {
    return  Object.keys($skillFilterFlag).filter(id => $skillFilterFlag[id]);
});


// Defaults
export function setDefaults(){
    filterMode.set(FilterMode.All)
    experienceDisplayMode.set(DisplayMode.List)
    isKeyboardEnabled.set(false)
}

export enum ScreenMode{
    Small = 0,
    Normal = 1,
}

export const screenMode = writable(ScreenMode.Normal);


export const focusImageUrl = writable("");
export const isFoucsedImage = writable(false);




// CARDS ON SCREEN (List View Only)
export const workExperienceCount = writable(0)
export const projectExperienceCount = writable(0)

const workExperienceCardScreenStatus:  { [key: string]: boolean } = {};
Array.from(Array(20).keys()).forEach(id => {
    workExperienceCardScreenStatus[id] = false;
});
export const workExperienceCardScreenStatusS = writable(workExperienceCardScreenStatus);

const projectCardScreenStatus:  { [key: string]: boolean } = {};
Array.from(Array(20).keys()).forEach(id => {
    projectCardScreenStatus[id] = false;
});
export const projectCardScreenStatusS = writable(projectCardScreenStatus);


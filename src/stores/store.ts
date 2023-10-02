import { writable, derived } from 'svelte/store';

// SKILL DISPLAY
export const hoveredSkill = writable("Initial Text");



// KEYBOARD SETTING
// If the Keyboard has been enabled, it should be hidden when scrolling then restored
export const isKeyboardEnabled = writable(false);
export const isKeyboardVisible = writable(true);





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




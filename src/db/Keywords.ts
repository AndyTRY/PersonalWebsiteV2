import { skillCategory } from "./SkillCategories";

const skills = Object.keys(skillCategory).map((key) => key.toLowerCase());

const keywordsToRemove: string[] = ["work experience", "projects"]



const additionalKeywords: string[] = [
    "celery",
    "datadog",
]


export const keywords = skills.filter(keyword => !keywordsToRemove.includes(keyword))
                              .concat(additionalKeywords) 
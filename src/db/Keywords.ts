import { skillCategory } from "./SkillCategories";

const skills = Object.keys(skillCategory).map((key) => key.toLowerCase());

const keywordsToRemove: string[] = [
    "images",
    "compiler",
    "ai"
]

const additionalKeywords: string[] = [
    "celery",
    "datadog",
    "perl",
    "bash",
    "llvm",
    "sockets",
    "oauth2",
    "jwt",
    "cuda",
    "antlr4",
    "figma",
    
]

const additionalSkills: string[] = [
    "Autocad",
    "Antlr",
    "Figma",
    "Jupyter",
    "Numpy",
    "Perl",
    "Redis",
    "GraphQL",

    "STATA",
    "3D Modeling",
    "LLVM"

]

export const filterableSkills = Object.keys(skillCategory).concat(additionalSkills) 

export const keywords = skills.filter(keyword => !keywordsToRemove.includes(keyword))
                              .concat(additionalKeywords) 
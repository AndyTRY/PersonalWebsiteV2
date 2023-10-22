import type { Media } from "./MediaTypes";

export type ExpCard_T = {
    title: string;
    experienceType: ExperienceType;
    fields: string[];
    tags: string[];
    description: string;
    exprList: string[]
    mediaSources: Media[];
    link? : string;

};


export enum ExperienceType{
    WorkExperience = 0,
    Project = 1,
}
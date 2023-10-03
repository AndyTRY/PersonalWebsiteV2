import type { Media } from "./MediaTypes";

export type ExpCard_T = {
    title: string;
    experienceType: ExperienceType;
    fields: string[];
    tags: string[];
    description: string;
    exprList: string[]
    mediaSources: Media[];

};


export enum ExperienceType{
    WorkExperience = 0,
    Project = 1,
}
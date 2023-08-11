// TODO and Resolve

import {categorySkills} from "src/db/SkillCategories"

const unionSet: Set<string> = new Set();

for (const array of Object.values(categorySkills)) {
    // Add all elements of the array to the unionSet
    array.forEach((element) => unionSet.add(element));
  }

const skills = Array.from(unionSet);

type stype = typeof skills


export type Tag_T = stype[number]
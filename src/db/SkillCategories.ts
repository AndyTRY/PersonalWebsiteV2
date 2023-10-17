
export const categorySkills : Record<string, string[]> = {
    "Languages": ["Python", "Java", "Typescript", "C", "C++", "Matlab", "Assembly"],
    "Frameworks": ["Svelte", "Vue", "React", ".NET", "Flask", "NodeJs"],
    "Topics": ["Web", "Scripting", "AI", "OS", "Compiler", "Images", "Parallel Processing"],
    "Data Storage": ["SQL", "MongoDB", "Neo4j", "S3"],
    "Additional" : ["Microservices", "Kafka", "Docker", "Unix", "Git"]
}
    
function createInvertedCategorySkills(categorySkills: Record<string, string[]>): Record<string, string> {
    const invertedMap: Record<string, string> = {};
    for (const [category, skills] of Object.entries(categorySkills)) {
      for (const skill of skills) {
        invertedMap[skill] = category;
      }
    }
    return invertedMap;
}

export const categories = Object.keys(categorySkills);
export const skillCategory = createInvertedCategorySkills(categorySkills);
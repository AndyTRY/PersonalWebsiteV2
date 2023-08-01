
export const categorySkills : Record<string, string[]> = {
    "Work/Project": ["Work Experience", "Projects"],
    "Languages": ["Python", "C", "Java", "Javascript"],
    "Web Frameworks": ["Djanjo", "NodeJs", "Svelte", "Vue"],
    "Fields": ["Web", "Scripting", "OS", "Complier", "Image Processing", "Parallel Computing", "Networking", "3D Modeling"],
    "Tools": ["Docker", "Git", "VsCode", "Terminal"],
    "Scripting": ["Python (S)", "Perl", "Bash"],
    "3rd Party Apps" : ["Github"],
    "Topics" : ["Microservices", "Kafka", "SQL", "Postgresql"]
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
  
export const skillCategory = createInvertedCategorySkills(categorySkills);
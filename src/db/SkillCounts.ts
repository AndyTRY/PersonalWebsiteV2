import { cards } from "./ExpCards";




function buildSkillCounts(){
    const skillCounts: Record<string, number> = {}

    for (const card of cards) 
    for (const tag of card.tags) 
      if (tag in skillCounts)   skillCounts[tag] += 1
      else                      skillCounts[tag] = 1

    return skillCounts
}

    

export const skillCounts: Record<string, number> = buildSkillCounts()

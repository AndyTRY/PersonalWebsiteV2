import { cards } from "./ExpCards";




function buildSkillCounts(){
    const skillCounts: Record<string, number> = {}

    for (const card of cards) {
      for (const tag of card.tags) 
        if (tag in skillCounts)   skillCounts[tag] += 1
        else                      skillCounts[tag] = 1

      for (const field of card.fields)
          if (field in skillCounts)   skillCounts[field] += 1
          else                        skillCounts[field] = 1
    }

    return skillCounts
}

    

export const skillCounts: Record<string, number> = buildSkillCounts()


export function mappedName(skillName: string){
    if (skillName === "3D Modeling") return "threedmodeling"
    if (skillName === "C++")         return "cplusplus"
    if (skillName == ".NET")         return "dotnet"

    return skillName.replace(' ', '').toLowerCase()
}

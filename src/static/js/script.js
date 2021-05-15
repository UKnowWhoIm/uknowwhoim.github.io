const skills = ["backend", "frontend", "scripting", "devops"];
let enabled = null;


function toggleSkill(skill){
    document.getElementById(skills[skill]).classList.toggle("disabled");
    document.getElementById(skills[skill] + "-skills").classList.toggle("disabled");
}

function enableSkill(skill){
    if(enabled !== null)
        toggleSkill(enabled);
    toggleSkill(skill);
    enabled = skill;
}

function changeSkill(direction){
    // direction is +/- 1
    let newSkill = enabled;
    
    if(enabled === skills.length - 1 && direction === 1)
        newSkill = 0;
    else if(enabled === 0 && direction === -1)
        newSkill = skills.length - 1;
    else
        newSkill += direction;
    
    enableSkill(newSkill);
}
enableSkill(0);

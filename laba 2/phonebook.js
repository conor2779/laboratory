const phonebook= [
    {name:"Marcus", phone:"+380445554433"},
    {name:"Illia",phone:"+380992469421"}
]
const findPhoneByName=(name) => {
    for(const obj of phonebook){
        if (obj.name === name) return obj.phone
    }
}
console.log(findPhoneByName("Marcus"))
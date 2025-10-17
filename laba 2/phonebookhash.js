const phonebook={
    Marcus:"+380445554433",
    Illia:"+380992469421",
}
function findPhoneByName(name){ 
    return phonebook[name]
}

console.log(findPhoneByName("Marcus"))
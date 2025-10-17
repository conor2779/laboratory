const random=(min,max) => {
    if(max===undefined){
        max=min
        min=0
    }
    return Math.floor(min + Math.random()*(max-min +1))
}
console.log(random(5,10))
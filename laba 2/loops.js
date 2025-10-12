function range(start,end){
const ArayRange=[]
for (let cycleStart= start; cycleStart <=end; cycleStart++) {
    
    ArayRange.push (cycleStart)
    
}
return ArayRange
}aray1=range(15,30)
console.log(aray1)

function rangeOdd(start,end){
const ArayRange=[]
for (let cycleStart= start; cycleStart <=end; cycleStart++) {
    if(cycleStart % 2 !==0){ArayRange.push (cycleStart)}
}
return ArayRange
}aray2=rangeOdd(15,30)
console.log(aray2)

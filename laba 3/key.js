
const generatekey=(length,possible) =>{
    const base =possible.length;
    let key=''
    for(let i =0;i<length; i++){
        const index=Math.floor(Math.random()*base);
        key+=possible[index];
    }
    return key;
}
const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
console.log(generatekey(16, characters));
function fn(){
    const object1={
        name:"Illia",
    };
    let object2={
        name:"Illia",
    };
    console.log(object1.name)
    object1.name="flower";
    object2.name="flower";
    object2={name:"illia flower"};
    console.log(object1.name);
    console.log(object2.name);
    
}

fn()
function createUser(name,city){
    return{
        name:name,
        city:city,

    }

}
const user1=createUser("Tolic","Kiyv")
console.log(user1)
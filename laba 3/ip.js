const ip="10.0.0.1"
const parts=ip.split('.')
const number=parts.map(part=> Number(part))
const total=(10<<24)+(0<<8)+(0<<8)+1
const result =number.reduce((acc,num) => 
    (acc<<8)+ num
)
console.log(result)
let arr=[true, "hello", 5, 12, -200, false, false, "word"];
let typecounts={
    number:0,
    string:0,
    boolean:0
};
    for(const type of arr)if (typeof type === "number"){console.log("number:")}
    for(const type of arr)if (typeof type === "string"){console.log("string:")}
for(const type of arr)if (typeof type === "boolean"){console.log("boolean:")}

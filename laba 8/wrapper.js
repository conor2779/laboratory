function contract(fn, ...types) {
    return function(...args) {
        if (args.length !== types.length - 1) {
            throw new TypeError(`Expected ${types.length - 1} arguments, got ${args.length}`);
        }

        for (let i = 0; i < args.length; i++) {
            if (typeof args[i] !== types[i].name.toLowerCase()) {
                throw new TypeError(`Argument ${i} should be of type ${types[i].name}`);
            }
        }

        const result = fn(...args);

        const returnType = types[types.length - 1];
        if (typeof result !== returnType.name.toLowerCase()) {
            throw new TypeError(`Return value should be of type ${returnType.name}`);
        }

        return result;
    };
}
const add = (a, b) => a + b;
const addNumbers = contract(add, Number, Number, Number);
console.log(addNumbers(2, 3)); 

const concat = (s1, s2) => s1 + s2;
const concatStrings = contract(concat, String, String, String);
console.log(concatStrings('Hello ', 'world!')); 
try {
    addNumbers(2, '3');
} catch (e) {
    console.log(e.message); 
}


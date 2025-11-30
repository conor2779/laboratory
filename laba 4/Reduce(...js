function sumReduce(...args) {
    return args.reduce((acc, curr) => acc + curr, 0);
}
console.log(sumReduce(10, -1, -1, -1)); 

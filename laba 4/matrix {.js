function maxFor(matrix) {
    let maxVal = -Infinity;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] > maxVal) {
                maxVal = matrix[i][j];
            }
        }
    }
    return maxVal;
}

const m = maxFor([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
console.log(m); 

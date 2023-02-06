function paperRequirements  (x, y, z) {
    let firstBook = 100 * x;
    let secondBook = 200 * y;
    let thidBook = 300 * z;
    let totalPaper = firstBook + secondBook + thidBook;
    return totalPaper;
}

var result = paperRequirements (2, 2, 5);
console.log('Total Paper: ' + result);
function findPositiveNumber(arr) {
    let positiveNum = [];
    for (let i = 0; i < arr.length; i ++) {
        if (arr[i] >= 0) {
            positiveNum.push(arr[i]);
        } else {
            break;
        }
    }
    return positiveNum;
}
var arr = [10, 25, 95, 41, -65, 25, 74, -62, 33];
var result = findPositiveNumber(arr);
console.log('Postive Number before got any negative number: ' + result);
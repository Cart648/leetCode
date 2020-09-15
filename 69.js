/*
*   时间：2020-9-15
*   题目：x的平方根
*   目的：练习二分查找法
*/

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let min = 0,
        max = x

    while(min <= max) {
        const middle = parseInt((min + max) / 2)
        const square = middle * middle
        const nextStep = (middle+1) * (middle+1)

        if (square === x || (square < x && nextStep > x)) {
            return middle
        }

        square > x ? max = middle - 1 : min = middle + 1 
    }
}

console.log(mySqrt(100))
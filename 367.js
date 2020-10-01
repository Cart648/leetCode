/*
*   时间：2020-10-1
*   题目：有效的完全平方数
*   描述：给定一个正整数 num，编写一个函数，如果 num 是一个完全平方数，则返回 True，否则返回 False。
*   例：  【输入：16 输出：True】 【输入：14 输出：False】 
*   目的： 练习二分查找法 
*/


/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    let result = false
    let min = 0,
        max = num

    while(min <= max) {
        const mid = parseInt( (min + max) / 2 )
        const square = mid * mid

        if (square === num) {
            result = true
        }

        square > num ? max = mid-1 : min = mid+1
    }

    return result
}

console.log(isPerfectSquare(14))
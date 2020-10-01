/*
*   时间：2020-10-1
*   题目：猜数字大小
*   描述：每轮游戏，系统都会从 1 到 n 随机选择一个数字。 请你猜选出的是哪个数字，如果你猜错了，系统会告诉你，你猜测的数字比系统选出的数字是大了还是小了
*           -1 : 你猜测的数字比系统选出的数字大
            1 : 你猜测的数字比系统选出的数字小
            0 : 恭喜！你猜对了！

*   例：  【n = 10, pick = 6 输出: 6】
*   目的： 练习二分查找法 
*/

const guess = function(num) {
    const result = 6

    if(num == result) return 0
    return num > result ? -1 : 1
}

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    let min = 0,
        max = n
    
    while(min <= max) {
        const mid = parseInt( (min + max) / 2 )
        const result = guess(mid)

        if(result == 0) return mid
        result > 0 ? min = mid+1 : max = mid-1
    }
}

console.log(guessNumber(10))
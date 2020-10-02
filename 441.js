/*
*   时间：2020-10-2
*   题目：排列硬币
*   描述：你总共有 n 枚硬币，你需要将它们摆成一个阶梯形状，第 k 行就必须正好有 k 枚硬币
          给定一个数字 n，找出可形成完整阶梯行的总行数
          n 是一个非负整数，并且在32位有符号整型的范围内。
    目的：练习二分查找法
*/

/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    let min = 0,
        max = n

    while(min <= max) {
        const mid = parseInt( (min + max) / 2 )

        if(sub(mid) <= n && sub(mid+1) > n) {
            return mid
        }

        sub(mid) > n ? max = mid-1 : min = mid+1
    }
}

// 等差数列求和:  (首项 + 末项) * 项数 / 2
const sub = function(mid) {
    return (1 + mid) * mid / 2
}

console.log(arrangeCoins(0))
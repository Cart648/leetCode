/*
*   时间：2020-9-16
*   题目：两数之和 II - 输入有序数组
*   目的：练习二分查找法
*/

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */

// 双指针
var twoSum = function(numbers, target) {
    let min = 1,
        max = numbers.length

    while (min <= max) {
        const sub = numbers[min - 1] + numbers[max - 1]
    
        if (sub == target) {
            return [min, max]
        }
        sub > target ? max-- : min++
    }
}

console.log(twoSum([0,2,6,7,11], 9))
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
// var twoSum = function(numbers, target) {
//     let min = 1,
//         max = numbers.length

//     while (min <= max) {
//         const sub = numbers[min - 1] + numbers[max - 1]
    
//         if (sub == target) {
//             return [min, max]
//         }
//         sub > target ? max-- : min++
//     }
// }


// 二分查找法
var twoSum = function(numbers, target) {
    for (let i=0; i<numbers.length; i++) {
        let min = i + 1,
            max = numbers.length - 1

        while (min <= max) {
            const mid = parseInt( (max - min) / 2 + min )
        
            if (numbers[mid] == target - numbers[i]) {
                return [i+1, mid+1]
            }
            numbers[mid] > target - numbers[i] ? max = mid - 1 : min = mid + 1
        }
    }
}

console.log(twoSum([1,2,3,4,4,9,56,90], 8))
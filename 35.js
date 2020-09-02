/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

const searchInsert = function(nums, target) {
    const len = nums.length
    let low = 0,
        high = len - 1,
        result = null

    while (low <= high) {
        const middle = parseInt((low + high) / 2)
        const guess = nums[middle]

        if (guess === target) {
            result = middle
        }

        guess < target ? (low = middle + 1) : (high = middle - 1)
    }

    return result ? result : low
}

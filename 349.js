/*
*   时间：2020-9-19
*   题目：两个数组的交集
*   目的：练习二分查找法
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    nums1 = Array.from(new Set(nums1))
    nums2 = Array.from(new Set(nums2.sort((a, b) => { return a - b })))
    const result = []

    for(let i=0; i<nums1.length; i++) {
        let min = 0,
            max = nums2.length - 1

        while (min <= max) {
            const mid =  parseInt((max + min) / 2)

            if (nums1[i] == nums2[mid]) {
                result.push(nums2[mid])
                break
            }

            nums1[i] < nums2[mid] ? max = mid-1 : min = mid+1
        }
    }

    return result
}

console.log(intersection([4,9,5], [9,4,9,8,4]))


/* 
 * 总结：
 * 这个题目其实并不适用于二分查找法
 * 因为二分查找的一大特点就是需要有序，此题再用二分查找之前就需要先排序
*/
/*
*   时间：2020-9-30
*   题目：两个数组的交集 II
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    nums1 = nums1.sort((a, b) => { return a - b })
    nums2 = nums2.sort((a, b) => { return a - b })
    const result = []
    

    nums1.forEach(v =>{
        if(nums2.indexOf(v) !== -1){
            result.push(v)
            nums2.splice(nums2.indexOf(v), 1)
        }
    })
    return result
}

console.log(intersect([1,2,2,1], [2,2]))


/*
* 这题不适用于二分查找，是我太固执用公式，忽略了真正的解法
*/
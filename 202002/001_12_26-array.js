/* 时间: 2020-2-12
 * 题号: 26
 * 题目: 删除排序数组中的重复项
 * 描述: 给定一个排序数组，你需要在原地删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度。
 *       不要使用额外的数组空间，你必须在原地修改输入数组并在使用 O(1) 额外空间的条件下完成。
 */

// var nums = [1,1,1,1,2,2,2,4,4,1,3,4,5,7,7,15,20,14,15];
var nums = []


/* 方法一：遍历并查询数组，如果不是第一次出现，则删除该元素 */
/* var removeDuplicates = function(nums) {
    for(let i=0; i<nums.length; i++){
        if(nums.indexOf(nums[i],0) !== i){
            nums.splice(i,1)
            i--;
        }
    }
}; */

/* 方法二： ES6,最简单的数组去重复,可惜空间复杂度不为O(1)*/ 
/* var removeDuplicates = function(nums) {
    return Array.from(new Set(nums))
}; */

/* 方法三：双指针 */
var removeDuplicates = function(nums) {
    nums.sort();

    let i = 0;
    for(let k=1; k<nums.length; k++){
        if(nums[i] !== nums[k]){
            i++;
            nums[i] = nums[k]
        }
    }

    nums.length = i+1;
    return i+1
};

removeDuplicates(nums);
console.log(nums)
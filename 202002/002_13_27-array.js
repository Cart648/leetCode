/* 时间: 2020-2-13
 * 题号: 27
 * 题目: 移除元素
 * 描述: 给定一个数组 nums 和一个值 val，你需要原地移除所有数值等于 val 的元素，返回移除后数组的新长度。
 *       不要使用额外的数组空间，你必须在原地修改输入数组并在使用 O(1) 额外空间的条件下完成。
 */

let nums = [3,2,2,2,3,3,3,3,3,4,3,3,3,5,2,3], val = 3;


var removeElement = function(nums, val) {
    for(let i=0; i<nums.length; i++){
        if(nums[i] === val){
            nums.splice(i,1);
            i--;
        }
    }
};

removeElement(nums, val)
console.log(`nums=${nums}`)

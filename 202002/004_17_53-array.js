/* 时间: 2020-2-17
 * 题号: 53
 * 题目: 最大子序和   
 * 描述: 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
 */

 var nums = [-2,1,-3,4,-1,2,1,-5,4];

 let maxSubArray = function(nums) {
    let max = nums[0];
    let val = 0;        
 
    for(let pos in nums){
        val += nums[pos];
        max = Math.max(val,max);
        val = Math.max(0,val);
    }
    
    return max;
};

 // 暴力法: 失败! 超时
 /* var maxSubArray = function(nums) {
    let result  = null;
    let len = nums.length

    for(let i=0; i<len; i++){
        for(let k=i+1; k<=len; k++){
            let sum = sumObj(i,k,nums);
            if(sum > result || result == null){ result = sum }
        }
    }

    console.log(result)
    return result;
};

function sumObj(star,end,nums){
    let sum = 0;
    let array = nums.slice(star, end);

    sum = array.reduce((pre,cur,index,array)=>{
        return pre + cur;
    })

    return sum;
} */

maxSubArray(nums);



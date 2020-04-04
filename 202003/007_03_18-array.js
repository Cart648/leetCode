/*  时间：2020-03-18
 *  题目：[118] 杨辉三角
 *  描述：给定一个非负整数 numRows，生成杨辉三角的前 numRows 行。
 */

 let nums = 5;

 var generate = function(numRows) {
    let result = [];

    for(let i=0; i<numRows; i++){
        let arr =[];
        
        for(let j=0; j<=i; j++){
            if(j>0 && j<i){
                arr.push(result[i-1][j-1] + result[i-1][j])
            } else {
                arr.push(1)
            }
        }
        
        result.push(arr)
    }

    return result
};

generate(nums)
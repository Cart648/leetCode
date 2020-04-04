/*  时间：2020-03-11
 *  题目：[118] 杨辉三角
 *  描述：给定一个非负整数 numRows，生成杨辉三角的前 numRows 行。
 */

 let nums = 5;

 var generate = function(numRows) {
    const result = [];
    if(numRows <= 0){return result};

    let i=0, j=0;
    for(let i=0; i<numRows; i++){
        const subArr = [];
        for(let j=0; j<=i; j++) {
            if(j>0 && j<i){
                subArr.push(result[i-1][j-1] + result[i-1][j])
            } else {
                subArr.push(1)
            }
        }

        result.push(subArr)
    }

    console.log(result)
    return result;
};

generate(nums)
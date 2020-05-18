/*  时间：2020-05-18
 *  题目：[119] 杨辉三角②
 *  描述：给定一个非负索引 k，其中 k ≤ 33，返回杨辉三角的第 k 行。
 */

 /**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let allArr = []

    for(let i=0; i<=rowIndex; i++){
        let result = []

        for(let j=0; j<=i; j++){
            if( j>0 && j<i) {
                result.push(allArr[i-1][j-1] + allArr[i-1][j])
            } else {
                result.push(1)
            }
        }

        if(i === rowIndex) { return result }
        allArr.push(result)
    }
};

const result = getRow(3)
console.log(result)
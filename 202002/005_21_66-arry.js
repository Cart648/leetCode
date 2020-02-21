/* 时间: 2020-2-21
 * 题号: 35
 * 题目: 加一   
 * 描述: 给定一个由整数组成的非空数组所表示的非负整数，在该数的基础上加一。
 *       最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。
 *       你可以假设除了整数 0 之外，这个整数不会以零开头。
 */


// 尝试一： 失败，精度丢失问题
/* var plusOne = function(digits) {
    console.log(digits.join(''))
    console.log(parseInt(digits.join('')) + 1)
     let num = +(digits.join('')) + 1;
    //  console.log(String(num).split(''))
     return String(num).split('');
}; */

// 尝试1-1： 转换  BigInt ，保存进度
var plusOne = function(digits) {
    let num = BigInt(digits.join('')) + 1n + '';
    return num.split('').map(Number);
}


// 尝试二： 成功，但太繁琐
/* var plusOne = function (digits) {
    let len = digits.length; 
    let num = 1;
    for(let i=len-1; i>=0; i--){
        if(i==0 && digits[i] == 9){
            digits[i] = 0;
            digits.unshift(num);
            break ;
        }
        if(digits[i] != 9){
            digits[i] += 1;
            break ;
        }

        digits[i] = 0;
    }

    console.log(digits)
    return digits
 } */

// 尝试三： 参考取余法
/*  var plusOne = function (digits) {
    let len = digits.length; 
    
    for(let i=len-1; i>=0; i--){
        digits[i]++;
        digits[i] %= 10;
        
        if(digits[i]){
            return digits;
        }
    } 

    digits.unshift(1);
    return digits
 } */


plusOne([0]);



/* 
 * 总结：
 * 最开始是想用转换的方法，数组 -> 字符串 -> 数字 + 1 -> 字符串 -> 数组
 * 思路没错，但却有数字过长精度丢失的问题
 * 本来已经打算放弃转换的思路了，却参考到别人用 BigInt 解决精度丢失的问题
 * 还有在其中get到的两个方法是:
 * 1. 快捷转字符串的方法  num + ''
 * 2. 快捷转数字的方法  +str
 * 3. array.map(Number)   快速将每个数组元素转化为数字，布尔同理
 * 
 * 方法二：
 * 由数组从最后一位遍历，遇9进位，否则+1
 * 最开始写的虽然没错，但太过繁琐，参考到别人的思路，用向10取余的方法，简便了很多
 *
*/




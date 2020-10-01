/*
*   时间：2020-10-1
*   题目：判断子序列
*   描述：给定字符串 s 和 t ，判断 s 是否为 t 的子序列。( s 和 t 中仅包含英文小写字母)
          字符串 t 可能会很长（长度 ~= 500,000），而 s 是个短字符串（长度 <=100）
          字符串的一个子序列是原始字符串删除一些（也可以不删除）字符而不改变剩余字符相对位置形成的新字符串。（例如，"ace"是"abcde"的一个子序列，而"aec"不是）

*   例：  【s = "abc", t = "ahbgdc" 返回 true.】
          【s = "axc", t = "ahbgdc" 返回 false.】
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    const sArr = s.split('')
    let tArr = t.split('')

    for(let i=0; i<sArr.length; i++) {
        const _index = tArr.indexOf(sArr[i])
        if(_index == -1) { return false }

        tArr = tArr.slice(_index+1)
    }

    return true
}

console.log(isSubsequence("aaaaa", "bbaaa"))


/**
 * 总结：
 * 本意是想练习二分查找法，但此题并不适用于二分查找
 * 改方法利用右推查找，如果出现在t中出现该字母，则下一次查找就切割数组，从该字母的下一位开始查找
 * 该方法并不是最优解，时间与空间都不理想
 * 执行用时： 104ms
 * 内存消耗： 38.7mb
 * **/
/*
*   时间：2020-9-17
*   题目：第一个错误的版本
*   目的：练习二分查找法
*/

/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
*/
isBadVersion = function(version) {
    const errorVersion = 5
    return version == errorVersion
}



/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */

    return function(n=5) {
        let min = 0,
            max = n

        while (min <= max) {
            const mid = parseInt((min + max) / 2)
            const result = isBadVersion(mid)

            if (result && !isBadVersion(mid - 1)) {
                return mid
            }

            result ? max = mid-- : min = mid++
        }
    }
}

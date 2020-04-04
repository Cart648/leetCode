/*  时间：2020-03-01
 *  题目：[88] 合并两个有序数组
 *  描述：给定两个有序整数数组 nums1 和 nums2，将 nums2 合并到 nums1 中，使得 num1 成为一个有序数组
 */

var nums1 = [1,2,3,0,0,0];
var nums2 = [2,5,6];

/* var merge = function(nums1, m, nums2, n) {
    nums1 = nums1.slice(0,m)            //这里指向了另外一个内存地址
    nums2.forEach(item => {
        nums1.push(item)
    });

    nums1.sort();
}; */

// 方法一：合并后排序
/* var merge = function(nums1, m, nums2, n) {
    nums1.splice(m,nums1.length - m)
    nums2.forEach(item => { nums1.push(item) });

    nums1.sort((val1,val2) => {
        return (val1 < val2 ? -1 : 1)
    });

    console.log(nums1)
};
 */


// 方法二：双指针：
var merge = function(nums1, m, nums2, n) {
    let p1 = m - 1,
        p2 = n - 1,
        p  = n + m - 1;
    while (p1>=0 && p2>=0){
        nums1[p--] = nums1[p1] < nums2[p2] ? nums2[p2--] : nums1[p1--]
    }
};



merge(nums1,3,nums2, 3)




/* 总结：
 *  1. 了解双指针法
 *  2. 数字大小排序可以用  (a,b) => a-b
 *  3. splice 是在原数组上修改，slice是返回新数组
 *  4. 三目运算符可以用括号执行多语句
 *  5. splice给一个下标，删除下标后所有元素的写法   num.splice(m) //删掉num[m]后所有元素
*/



/**
 * @param {number[]} nums
 * @return {number}
 */
var maxRotateFunction = function(nums) {
    const n = nums.length;
    let sum = 0;
    let f = 0;

   
    for (let i = 0; i < n; i++) {
        sum += nums[i];
        f += i * nums[i];
    }

    let maxVal = f;

  
    for (let i = n - 1; i > 0; i--) {
        f = f + sum - n * nums[i];
        maxVal = Math.max(maxVal, f);
    }

    return maxVal;
};

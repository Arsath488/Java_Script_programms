/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    // Sort the array to use the two-pointer technique
    nums.sort((a, b) => a - b);
    
    let closestSum = nums[0] + nums[1] + nums[2];
    
    for (let i = 0; i < nums.length - 2; i++) {
        let left = i + 1;
        let right = nums.length - 1;
        
        while (left < right) {
            let currentSum = nums[i] + nums[left] + nums[right];
            
            // If we find the exact target, return it immediately
            if (currentSum === target) return currentSum;
            
            // Update closestSum if the current deviation is smaller
            if (Math.abs(currentSum - target) < Math.abs(closestSum - target)) {
                closestSum = currentSum;
            }
            
            // Move pointers based on how the sum compares to the target
            if (currentSum < target) {
                left++;
            } else {
                right--;
            }
        }
    }
    
    return closestSum;
};

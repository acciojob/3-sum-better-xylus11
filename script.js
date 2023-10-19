function threeSum(nums, target) {
nums.sort((a, b) => a - b);

  // Initialize variables to store the closest sum and the minimum difference
  let closestSum = Infinity;
  let minDiff = Infinity;

  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      const diff = Math.abs(sum - target);

      if (diff < minDiff) {
        minDiff = diff;
        closestSum = sum;
      }

      if (sum < target) {
        left++;
      } else if (sum > target) {
        right--;
      } else {
        // If the sum equals the target, return it immediately (closest possible sum)
        return sum;
      }
    }
  }

  return closestSum;
  
}

module.exports = threeSum;

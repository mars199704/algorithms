// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

var searchInsert = function (nums, target) {
  let min = 0,
    max = nums.length - 1;
  while (min <= max) {
    const mid = Math.floor((min + max) / 2);
    if (nums[mid] === target) return mid;
    else if (nums[mid] > target) max = mid - 1;
    else if (nums[mid] < target) min = mid + 1;
  }
  return max + 1;
};

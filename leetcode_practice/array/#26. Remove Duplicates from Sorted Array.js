// Given a sorted array nums, remove the duplicates in-place such that each element appears only once and returns the new length.

// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

var removeDuplicates = function (nums) {
  if (nums.length == 0) return 0;
  if (nums.length == 1) return 1;
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[count] != nums[i]) {
      count++;
      nums[count] = nums[i];
    }
  }
  return ++count;
};

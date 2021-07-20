// Given an array nums and a value val, remove all instances of that value in-place and return the new length.

// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

// The order of elements can be changed. It doesn't matter what you leave beyond the new length.

var removeElement = function (nums, val) {
  if (!nums.length) return 0;
  if (nums.indexOf(val) < 0) return nums.length;

  let count = 0;
  for (let i = 0, max = nums.length; i < max; i++) {
    if (nums[i] != val) {
      nums[count++] = nums[i];
    }
  }
  return count;
};

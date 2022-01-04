---
title: 各种排序算法
order: 3
---

## 选择排序

时间复杂度 O(N^2),空间复杂度 O(1)

```javascript
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
  // 1. 选择排序
  if (nums.length === 0 || nums.length === 1) {
    return nums;
  }

  for (let i = 0; i < nums.length; i++) {
    let index = i;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] < nums[index]) {
        index = j;
      }
    }
    if (i !== index) {
      // swap, 使用位运算交换的前提是不能为相同地址,否则a^a = 0
      nums[i] = nums[i] ^ nums[index];
      nums[index] = nums[i] ^ nums[index];
      nums[i] = nums[i] ^ nums[index];
    }
  }

  return nums;
};
```

## 冒泡排序

时间复杂度 O(N^2),空间复杂度 O(1)

```javascript
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
  if (nums.length === 0 || nums.length === 1) {
    return nums;
  }

  // 2. 冒泡排序
  for (let i = nums.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (nums[j] > nums[j + 1]) {
        nums[j] = nums[j] ^ nums[j + 1];
        nums[j + 1] = nums[j] ^ nums[j + 1];
        nums[j] = nums[j] ^ nums[j + 1];
      }
    }
  }

  return nums;
};
```

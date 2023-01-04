---
title: 各种排序算法
order: 6
---

## 选择排序

1. 在 0~N 范围内遍历，找一个最小的值，和第 0 位交换。
2. 在 1~N 范围内遍历，找一个最小的值，和第 1 位交换。
3. 在 2~N 范围内遍历，找一个最小的值，和第 2 位交换。
4. 在 (N-1)~N 范围内遍历，找一个最小的值，和第 (N-1) 位交换。

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

1. 在 0~N 范围内遍历，将较小的值排前面，完成后最大值在第 N 位。
2. 在 0~(N-1)范围内遍历，将较小的值排前面，完成后最大值在第(N-1)位。
3. 在 0~(N-2)范围内遍历，将较小的值排前面，完成后最大值在第(N-2)位。
4. 在 0~1 范围内遍历，将较小的值排前面，完成后最大值在第 1 位。

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

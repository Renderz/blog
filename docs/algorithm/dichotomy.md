---
title: 二分法
order: 3
---

## 二分查找

给定一个  n  个元素有序的（升序）整型数组  nums 和一个目标值  target  ，写一个函数搜索  nums  中的 target，如果目标值存在返回下标，否则返回 -1。

解析：

1. 有序数组可以使用二分法

```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (right >= left) {
    const location = Math.floor((right + left) / 2);
    const mid = nums[location];

    if (mid === target) {
      return location;
    } else if (mid > target) {
      right = location - 1;
    } else {
      left = location + 1;
    }
  }

  return -1;
};
```

## 搜索插入位置

给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。

解析:

1. 和查找不同的是，需要返回 left 值表示在该值插入。

```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (right >= left) {
    const location = Math.floor((right + left) / 2);
    const mid = nums[location];

    if (mid === target) {
      return location;
    } else if (mid > target) {
      right = location - 1;
    } else {
      left = location + 1;
    }
  }

  return left;
};
```

## 寻找峰值

峰值元素是指其值严格大于左右相邻值的元素。

给你一个整数数组  nums，找到峰值元素并返回其索引。数组可能包含多个峰值，在这种情况下，返回 任何一个峰值 所在位置即可。

你可以假设  nums[-1] = nums[n] = -∞ 。

解析:

1. 这题用图形法很容易看，试试画图

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
  let left = 0;
  let right = nums.length - 1;

  if (nums[left] > nums[left + 1]) {
    return left;
  }

  if (nums[right] > nums[right - 1]) {
    return right;
  }

  while (right >= left) {
    const location = Math.floor((right + left) / 2);

    if (nums[location] < nums[location - 1]) {
      right = location - 1;
    } else if (nums[location] < nums[location + 1]) {
      left = location + 1;
    } else {
      return location;
    }
  }
};
```

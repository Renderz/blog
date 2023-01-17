---
title: 荷兰国旗问题
order: 6
---

## 数组拆分

给定一个数组 nums 和一个数 target。将 nums 中小于 target 的数排在数组左边；等于 target 的数排在数组中间；大于 target 的数排在数组右边。要求时间复杂度 O(n)，空间复杂度 O(1)

```javascript
const group = function(nums, target) {
  let i = 0;

  let x = i - 1;
  let y = nums.length;

  const swap = (a, b) => {
    const temp = nums[b];
    nums[b] = nums[a];
    nums[a] = temp;
  };

  while (i < y - 1) {
    if (nums[i] < target) {
      swap(i, x + 1);
      i++;
      x++;
    }

    if (nums[i] === target) {
      i++;
    }

    if (nums[i] > target) {
      swap(i, y - 1);
      y--;
    }
  }

  return nums;
};
```

## 颜色分类

给定一个包含红色、白色和蓝色、共  n 个元素的数组  nums ，原地对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。

我们使用整数 0、 1 和 2 分别表示红色、白色和蓝色。

```javascript
```

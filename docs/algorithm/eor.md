---
title: 异或
order: 2
---

## 异或

1. 如果 a、b 两个值不相同，则异或结果为 1。如果 a、b 两个值相同，异或结果为 0。
2. 异或可以认为是`不进位相加`。
3. 归零律：`a ^ a = 0`
4. 恒等律：`a ^ 0 = a`
5. 交换律：`a ^ b = b ^ a`
6. 结合律：`a ^ b ^ c = a ^ (b ^ c) = (a ^ b) ^ c`;
7. 自反：`a ^ b ^ a = b`.

## 找数字

数组内，某个数 A 出现了奇数次，除此之外其他数出现了偶数次，在时间复杂度 O(n)内，空间复杂度 O(1)内找到这个数 A。

```javascript
const find = function(nums) {
  let xor;

  nums.forEach(num => {
    xor = num ^ xor;
  });

  return xor;
};
```

## 找两个数字

数组内，某两个数字 A 和 B 出现了奇数次，除此之外其他数出现了偶数次，在时间复杂度 O(n)内，空间复杂度 O(1)内找到这个数 A 和 B。

解析:

1. A ^ B = Y。
2. 因为 A ≠ B，所以 Y ≠ 0。
3. 不妨设 Y 的 k 位置上等于 1，那么 A 和 B 在 k 这个位置肯定不相同。
4. 可以将数组内的数分为 k 上等于 1 的和 k 上等于 0 的两部分 M 和 N，A 和 B 不会同时归属于同一个部分内。
5. 用 xor 去异或 M 或者 N，就可以得到 A 或者 B。

```javascript
const find = function(nums) {
  let xor;
  let a;
  let b;

  nums.forEach(num => {
    xor = num ^ xor;
  });

  // 见位运算部分
  const rightMostOne = xor & (~xor + 1);

  nums.forEach(num => {
    if ((num & rightMostOne) === 0) {
      a = a ^ num;
    }
  });

  b = xor ^ a;

  return { a, b };
};
```

## 丢失的数字

给定一个包含 [0, n] 中 n 个数的数组 nums ，找出 [0, n] 这个范围内没有出现在数组中的那个数。

解析:

1. nums 是从 0 开始的
2. [3,0,1]可变成[3,0,1,0,1,2,3]，再全部求异或即可

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  let xor;

  nums.forEach((num, index) => {
    xor = num ^ xor;
    xor = index ^ xor;
  });

  return xor ^ nums.length;
};
```

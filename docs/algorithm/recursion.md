---
title: 递归
order: 5
---

## 求范围 L 到 R 上最大的数

解析:

1. 递归用递归结构图画会非常清晰，如下
2. 比如计算 0-5 上最大的值，那么主函数调用 p(0,5)，向下依次分解为

p(0,5) -> p(0,2) vs p(3,5) -> (p(0,1) vs p(2,2)) vs (p(3,4) p(5,5)) -> ((p(0,0) vs p(1,1)) vs p(2,2)) vs ((p(3,3) vs p(4,4)) vs p(5,5))

3. 过程相当于压栈

```javascript
const process = function(nums, L, R) {
  if (L === R) {
    return nums[L];
  }
  // 见位运算章节
  const mid = L + ((R - L) >> 1);
  const leftMax = process(nums, L, mid);
  const rightMax = process(nums, mid + 1, R);
  return Math.max(leftMax, rightMax);
};
```

## master 公式

T(N) = a \* T(N/b) + O(N^d)
解析:

1. N 母问题数据规模
2. T(N) 母问题的复杂度（不是时间复杂度，需要按下方公式计算)
3. a 子问题调用次数
4. b 每次调用子问题的对比 N 的比例
5. O(N^d) 调用子问题剩下部分的时间复杂度
6. logb^a < d => O(N^d)
7. logb^a > d => O(N^logb^a)
8. logb^a = d => O(N^d\*logN)

## 归并排序

解析:

1. 利用递归方法，将数组分为两部分;两部分各自排序，然后合并
2. 合并时在两个数组头分别设置指针，比较两个指针对应值，取较小的一个值然后合入一个新的数组内，并且移动指针
3. 时间复杂度根据 master 公式，为 O(NlogN)

```javascript
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
  if (nums.length === 0 || nums.length === 1) {
    return nums;
  }

  // 4. 归并排序

  // 递归主进程
  const process = function(_nums, L, R) {
    if (L === R) {
      return;
    }
    // 见位运算章节
    const mid = L + ((R - L) >> 1);
    const leftMax = process(_nums, L, mid);
    const rightMax = process(_nums, mid + 1, R);
    merge(_nums, L, R, mid);
  };

  // 归并方法
  const merge = function(_nums, L, R, M) {
    const help = [];
    let p1 = L;
    let p2 = M + 1;

    while (p1 <= M && p2 <= R) {
      help.push(_nums[p1] <= _nums[p2] ? _nums[p1++] : _nums[p2++]);
    }

    while (p1 <= M) {
      help.push(_nums[p1++]);
    }

    while (p2 <= R) {
      help.push(_nums[p2++]);
    }

    // 把help复制回_nums
    help.forEach((num, index) => {
      _nums[index + L] = num;
    });
  };

  process(nums, 0, nums.length - 1);
  return nums;
};
```

## 计算小和

某个数组，计算所有值的左侧，比该值小的值的总和。

比如[1,3,4,2,5]，

1. 1 左侧比 1 小的值没有
2. 3 左侧比 3 小的值为 1
3. 4 左侧比 4 小的值为 1+3
4. 2 左侧比 2 小的值为 1
5. 5 左侧比 5 小的值为 1+3+4+2
6. 小和为 1+1+3+1+1+3+4+2 = 16

解析:

1. 我们可以反过来看这道题，小和实际上等于，遍历该数组，该值\*该值右侧比该值大的值出现的次数
2. 例如[1,3,4,2,5]
3. 1 右侧有 4 个数比 1 大，1\*4
4. 3 右侧有 2 个数比 3 大，3\*2
5. 4 右侧有 1 个数比 4 大，4\*1
6. 2 右侧有 1 个数比 2 大，2\*1
7. 5 右侧有 0 个数比 5 大，5\*0
8. 总和=16
9. 在归并排序的 merge 方法中，指针 p1，p2 会做一次比较，此时我们可以累加较小的数，最终即可得到较小数的和。

```javascript
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallSum = function(nums) {
  if (nums.length <= 1) {
    return 0;
  }

  // 递归主进程
  const process = function(_nums, L, R) {
    if (L === R) {
      return 0;
    }
    // 见位运算章节
    const mid = L + ((R - L) >> 1);
    // 计算左边的小和+右边的小和+本组的小和
    return (
      process(_nums, L, mid) +
      process(_nums, mid + 1, R) +
      merge(_nums, L, R, mid)
    );
  };

  // 归并方法
  const merge = function(_nums, L, R, M) {
    const help = [];
    let p1 = L;
    let p2 = M + 1;
    let result = 0;

    while (p1 <= M && p2 <= R) {
      // 左组数比右组数（严格小），计算右组后所有数个数 * 左组数，计入小和。否则不计入小和。
      result += nums[p1] < _nums[p2] ? (R - p2 + 1) * _nums[p1] : 0;
      // 左边必须严格比右边小
      // 比如L=[1,1,1,2] 右边[1,1,1,3]

      help.push(_nums[p1] < _nums[p2] ? _nums[p1++] : _nums[p2++]);
    }

    while (p1 <= M) {
      help.push(_nums[p1++]);
    }

    while (p2 <= R) {
      help.push(_nums[p2++]);
    }

    // 把help复制回_nums
    help.forEach((num, index) => {
      _nums[index + L] = num;
    });

    return result;
  };

  return process(nums, 0, nums.length - 1);
};
```

## 快速排序

解析

1. 取出数组中任意位置的数 A
2. 做一次数组拆分（见三色问题）分为 <A =A >A 三组, 此时在最终排序时，=A 的就应该在该位置，不再变化。
3. 对<A >A 的组内做递归

```javascript
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
  if (nums.length === 0 || nums.length === 1) {
    return nums;
  }

  // 交换方法
  const swap = (_nums, a, b) => {
    const temp = _nums[b];
    _nums[b] = _nums[a];
    _nums[a] = temp;
  };

  // 递归主进程
  const process = function(_nums, L, R) {
    if (L < R) {
      // 见位运算章节
      // 标准快排此处是随机选择
      const mid = L + ((R - L) >> 1);
      swap(_nums, mid, R);

      const p = partition(_nums, L, R);
      process(_nums, L, p[0]);
      process(_nums, p[1] + 1, R);
    }
  };

  const partition = function(_nums, L, R) {
    // 荷兰国旗算法
    let less = L - 1;
    let more = R;

    while (L < more) {
      if (_nums[L] < _nums[R]) {
        swap(_nums, ++less, L++);
      } else if (_nums[L] > _nums[R]) {
        swap(_nums, --more, L);
      } else {
        L++;
      }
    }

    swap(_nums, R, more);

    return [less, more];
  };

  process(nums, 0, nums.length - 1);
  return nums;
};
```

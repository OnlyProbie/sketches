# 说明： leetcode 解题目录，待更新...

## 丑数判断
```js
function isUgly(num) {
    if (num <= 0) {
        return false;
    }
    while (num % 2 == 0) {
        num /= 2;
    }
    while (num % 3 == 0) {
        num /= 3;
    }
    while (num % 5 == 0) {
        num /= 5;
    }
    return num == 1;
}
const result = isUgly(11);
console.log(result);

```
## 从排序数组中删除重复项
```js
// 时间复杂度为O(n)
// 达到空间复杂度为O(1)的程度
var removeDuplicates = function (nums) {
    if (nums == null || nums.length == 0) return;
    for (var i = 0; i < nums.length - 1; i++) {
        if (nums[i] === nums[i + 1]) {
            nums.splice(i, 1);
            i--;
        }
    }
    console.log(nums);
    return nums.length
};
var arr = [1, 1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 4, 5];
console.log(removeDuplicates(arr));
```
## 翻转单词的字符顺序
```js
let str = "Let's take LeetCode contest";

function turnStr(str) {
    if (str === null || str.length === 0) {
        return str;
    }
    let result = [];
    result = str.split(' ');
    for (let i = 0; i < result.length; i++) {
        result[i] = result[i].split('').reverse().join('');
    }
    return result.join(' ');
}
const result = turnStr(str);
console.log(result);
```

## 翻转字符串里的单词
```js
let s = "a good   example";

function turnWords(s) {
    if (s == null || s.length === 0) {
        return s;
    }
    return s.trim().split(/\s+/g).reverse().join(' ');
}

const result = turnWords(s);
```
## 汉诺塔
```js
function move(n, a, b, c) {
    if (n === 1) {
        console.log('move: ' + n + ' from ' + a + ' to ' + c);
    } else {
        move(n - 1, a, c, b);
        console.log('move: ' + n + ' from ' + a + ' to ' + c);
        move(n - 1, b, a, c);
    }
}
move(4, 'a', 'b', 'c');
```

## 接雨水

```js
const arr = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];

function getRain(arr) {
    if (arr == null || arr.length === 0) {
        return 0;
    }
    let left = 0,
        right = arr.length - 1,
        sum = 0,
        leftMax = 0,
        rightMax = 0;
    while (left < right) {
        if (arr[left] < arr[right]) {
            if (arr[left] >= leftMax) {
                leftMax = arr[left];
            } else {
                sum += leftMax - arr[left];
            }
            left++;
        } else {
            if (arr[right] >= rightMax) {
                rightMax = arr[right];
            } else {
                sum += rightMax - arr[right];
            }
            right--;
        }
    }
    return count;
}
```
## 两数相加
```js
var addTwoNumbers = function (l1, l2) {
            if (l1 == null || l2 == null) {
                return null;
            }
            let node = new ListNode(null),
                temp = node,
                n = 0,
                sum = 0;
            while (l1 || l2) {
                const n1 = l1 ? l1.val : 0;
                const n2 = l2 ? l2.val : 0;
                sum = n1 + n2 + n;
                n = parseInt(sum / 10);
                temp.next = new ListNode(sum % 10);
                temp = temp.next;
                if (l1) l1 = l1.next;
                if (l2) l2 = l2.next;
            }
            if (n > 0) temp.next = new ListNode(n);
            return node.next;
        };
```

## 每日温度

```js
var temperatures = [73, 74, 75, 71, 69, 72, 76, 73];

var dailyTemperatures = function (T) {

    if (T == null || T.length === 0) {
        return [];
    }
    let results = new Array(T.length).fill(0),
        len = T.length,
        stack = [];
    for (let i = 0; i < len - 1; i++) {
        while (stack.length && T[i] > T[stack[stack.length - 1]]) {
            let index = stack.pop();
            results[index] = i - index;
        }
        stack.push(i);
    }
    return results;
}

const results = dailyTemperatures(temperatures);
console.log(results);
```
## 判断是否是字母异位词

```js
var s = 'a',
    t = 'ab';

function bianLi(obj, s, len) {
    for (let i = 0; i < len; i++) {
        if (obj.hasOwnProperty(s[i])) {
            obj[s[i]]++;
        } else {
            obj[s[i]] = 1;
        }
    }
    return obj;
}

function judge(obj1, obj2) {
    if (obj1 === null && obj2 !== null || obj1 !== null && obj2 === null) {
        return false;
    }
    var result = null;
    ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u',
        'v', 'w', 'x', 'y', 'z'
    ].forEach(item => {
        if (obj1[item] !== obj2[item]) {
            result = false;
        }
    })
    return result === null;
}

function yiWei(s, t) {
    if (s === null && t === null) {
        return false;
    }
    if (s === '' && t === '') {
        return true;
    }

    let objS = {};
    let objT = {};
    let lenS = s.length;
    let lenT = t.length;
    bianLi(objS, s, lenS);
    bianLi(objT, t, lenT);
    let result = judge(objS, objT);
    return result;
}
console.log(yiWei(s, t));
```

## 三数之和

- 先将数据排序
- 创建一个新的数组，用于存储结果
- 循环遍历整个数组
- 判断数组第一个元素是不是小于0，最后一个数组元素是不是大于0
- 判断当前元素是不是和前一个元素相同，如果相同，进行新一轮的循环
- 创建两个指针，分别指向数组的左右两端
- 计算当前遍历元素和两个指针指向的元素的和是不是等于0
- 满足条件，加入结果数组，判断有重复元素，移动指针
- 如果没有，移动指针，进行下一轮循环

```js
var nums = [-1, 0, 1, 2, -1, -4];

function Sums(nums) {
    if (nums == null || !nums.length) return;
    nums.sort((a, b) => {
        return a - b;
    })
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            break;
        }
        if (i > 0 && nums[i] == nums[i - 1]) {
            continue;
        }
        let left = i + 1,
            right = nums.length - 1;
        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right];
            if (sum > 0) {
                right--;
            }
            if (sum < 0) {
                left++;
            }
            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);
                // 避免重复
                while (left + 1 < right && nums[left + 1] == nums[left]) {
                    left++;
                }
                while (left < right - 1 && nums[right] == nums[right - 1]) {
                    right--;
                }
                left++;
                right--;
            }
        }
    }
    return result;
}

const result = Sums(nums);
console.log(result);
```
## pow
```js
function myPow(x, n) {
    if (n < 0) return 1 / myPow(x, -n);
    if (n === 0) return 1;
    if (n % 2 === 0) return myPow(x * x, Math.floor(n / 2));
    return myPow(x * x, Math.floor(n / 2)) * x;
}
```

## 顺时针打印矩阵
- 定义矩阵的行数和列数
- 用四个变量存储已经遍历过的列或者行
- 根据四个变量判断是否已经遍历过，缩小遍历范围

```js
function print(arr) {
    if (arr == null || arr.length === 0 || arr[0].length === 0) {
        return [];
    }
    let result = [],
        rows = arr.length,
        cols = arr[0].length,
        top = 0,
        right = cols - 1,
        left = 0,
        bottom = rows - 1;
    while (left <= right && top <= bottom) {
        for (let i = left; i <= right; i++) {
            result.push(arr[top][i]);
        }
        for (let i = top + 1; i <= bottom; i++) {
            result.push(arr[i][right]);
        }
        if (top != bottom) {
            for (let i = right - 1; i >= left; i--) {
                result.push(arr[bottom][i]);
            }
        }
        if (left != right) {
            for (let i = bottom - 1; i >= top + 1; i--) {
                result.push(arr[i][left]);
            }
        }
        left++;
        right--;
        top++;
        bottom--;
    }
    return result;
}
```

## 无重复字符的最长子串

```js
var lengthOfLongestSubstring = function (s) {
    if (s === null || s === '' || s.length === 0) {
        return 0;
    }
    let pre = 0,
        str = '',
        maxLen = 0,
        len = s.length;
    for (let i = 0; i < len; i++) {
        if (str.indexOf(s[i]) > -1) {
            pre += s.slice(pre, i).indexOf(s[i]) + 1;
            continue;
        }
        str = s.slice(pre, i + 1);
        maxLen = Math.max(maxLen, str.length);
    }
    return maxLen;
};
lengthOfLongestSubstring("aabaab!bb");
```
## 约瑟夫环问题

```js
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function circle(arr, num) {
    if (num < 1 || arr.length === 0 || arr == null) {
        return;
    }
    let start = 0; // 下标
    while (arr.length > 1) {
        start += num - 1;
        start %= arr.length;
        arr.splice(start, 1);
    }
    return arr;
}
console.log(circle(arr, 3));
```

## 字符串翻转

```js
const result = str.split('').reverse().join("");
```

## 最长回文串

```js
function longestPalindrome(s) {
    if (s == null || s.length === 0) {
        return;
    }
    let op = [];
    for (let i = 0; i < s.length; i++) {
        op[i] = [];
    }

    let max = -1,
        str = '';
    for (let k = 0; k < s.length; k++) {
        for (let i = 0; i + k < s.length; i++) {
            let j = i + k;
            if (k == 0) {
                op[i][j] = true;
            } else if (k <= 2) {
                if (s[i] === s[j]) {
                    op[i][j] = true;
                } else {
                    op[i][j] = false;
                }
            } else {
                if (op[i + 1][j - 1] && s[i] === s[j]) {
                    op[i][j] = true;
                } else {
                    op[i][j] = false;
                }
            }
            if (op[i][j] && k > max) {
                max = k;
                str = s.substring(i, j + 1);
            }
        }
    }
}
```

## js实现全排列

```js
function allSort(str) {
    if (str == null || str.length === 0) {
        return [];
    }
    let result = [];
    if (str.length === 1) {
        return [str];
    } else {
        let pre = allSort(str.slice(1));
        for (let i = 0; i < pre.length; i++) {
            for (let j = 0; j < pre[i].length + 1; j++) {
                let temp = pre[i].slice(0, j) + str[0] + pre[i].slice(j);
                result.push(temp);
            }
        }
        return result;
    }
}
```

## k个一组翻转链表

```js
function reverseLinkList(head, k) {
    if (head === null || k <= 1) {
        return head;
    }
    let prev = null,
        curr = head,
        p = head,
        next = null,
        n = k;
    for (let i = 0; i < k; i++) {
        if (p === null) {
            return head;
        }
        p = p.next;
    }
    while (curr && n-- > 0) {
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    head.next = reverseLinkList(curr, k);
    return prev;
}

```
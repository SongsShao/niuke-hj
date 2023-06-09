/**
 * 描述
 * 输入一个正整数，计算它在二进制下的1的个数。
 * 注意多组输入输出！！！！！！
 *
 * 数据范围： 1≤n≤2^31−1
 * 输入描述：
 * 输入一个整数
 *
 * 输出描述：
 * 计算整数二进制中1的个数
 *
 * 示例1
 *  输入：
 *      5
 *  输出：
 *      2
 * 说明：
 *  5的二进制表示是101，有2个1
 * 示例2
 *  输入：
 *      0
 *  输出：
 *      0
 */

const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function() {
  // Write your code here
  while ((line = await readline())) {
    console.log(toBinary(Number(line)));
  }
})();

function toBinary(num) {
  if (num === 0) {
    return 0;
  }

  if (num === 1) {
    return 1;
  }
  let count = 0;
  while (num > 1) {
    if (num % 2 === 1) {
      count++;
    }
    num = Math.floor(num / 2);
    if (num === 1) {
      count++;
    }
  }
  return count;
}

/**
 * 描述
 * Lily上课时使用字母数字图片教小朋友们学习英语单词，每次都需要把这些图片按照大小（ASCII码值从小到大）排列收好。请大家给Lily帮忙，通过代码解决。
 * Lily使用的图片使用字符"A"到"Z"、"a"到"z"、"0"到"9"表示。
 *
 * 数据范围：每组输入的字符串长度满足 1≤n≤1000
 *
 * 输入描述：
 * 一行，一个字符串，字符串中的每个字符表示一张Lily使用的图片。
 *
 * 输出描述：
 * Lily的所有图片按照从小到大的顺序输出
 *
 * 示例1
 * 输入：
 * Ihave1nose2hands10fingers
 * 输出：
 * 0112Iaadeeefghhinnnorsssv
 */

const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function() {
  let line = await readline();
  let inputArr = [...line];
  console.log(
    inputArr.sort((a, b) => (a.charCodeAt() > b.charCodeAt() ? 1 : -1)).join("")
  );
})();

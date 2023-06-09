/**
 * 6、太阳能板最大面积
 * 给航天器一侧加装长方形或正方形的太阳能板（图中的红色斜线区域），
 * 需要先安装两个支柱（图中的黑色竖条），再在支柱的中间部分固定太阳能板。
 * 但航天器不同位置的支柱长度不同，太阳能板的安装面积受限于最短一侧的那根支柱长度。如图：
 * 现提供一组整形数组的支柱高度数据，假设每根支柱间距离相等为1个单位长度，计算如何选择两根支柱可以使太阳能板的面积最大。
 * 输入描述:
 * 10,9,8,7,6,5,4,3,2,1
 * 注：支柱至少有2根，最多10000根，能支持的高度范围1~10^9的整数。柱子的高度是无序的，例子中递减只是巧合。
 * 输出描述:
 * 可以支持的最大太阳能板面积：（10米高支柱和5米高支柱之间）
 * 25
 *
 * 示例1
 * 输入
 * 10,9,8,7,6,5,4,3,2,1
 * 输出
 * 25
 * 备注:
 * 10米高支柱和5米高支柱之间宽度为5，高度取小的支柱高也是5，面积为25。任取其他两根支柱所能获得的面积都小于25。所以最大的太阳能板面积为25。
 *
 */

function area(str) {
  let arrStr = str.split(",");
  let lenth = arrStr.length;
  let res = 0;
  for (let i = 0; i < lenth; i++) {
    for (let j = i + 1; j < lenth; j++) {
      let a = parseInt(arrStr[i]),
        b = parseInt(arrStr[j]),
        c = Math.abs(a - b);
      if (a > b) {
        if (res < b * c) {
          res = b * c;
        }
      } else {
        if (res < a * c) {
          res = a * c;
        }
      }
    }
  }
  return res;
}

console.log(area("10, 9, 4, 3, 2, 1, 8, 7, 6, 5"));

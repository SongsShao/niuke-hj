/**
 * 小华负责公司知识图谱产品，现在要通过新词挖掘完善知识图谱新词挖掘:
 * 给出一个待挖掘问题内容字符串Content和一人词的字符串word，找到content中所有word的新词。
 * 新词: 使用词word的字符排列形成的字符串。
 * 
 * 请帮小华实现新词挖掘，返回发现的新词的数量。
 * 输入描述
 * 第一行输入为待挖掘的文本内容content;
 * 第二行输入为词word;
 * 输出描述
 * 在content中找到的所有word的新词的数量
 * 备注
 * 0 ≤ content的长度 ≤10000000。
 * 1 ≤ word的长度≤2000。
 * 
 * 示例1：
 * 输入
 * qweebaewqd
 * qwe
 * 输出
 * 2
 * 说明
 * 起始索引等于0的子串是“qwe”，它是word的新词起始索引等于6的子串是“ewq”，它是word的新词
 * 
 * 示例2：
 * 输入
 * abab
 * ab
 * 输出
 * 3
 * 说明
 * 起始索引等于0的子串是”ab“它是word的新词它是word的新词起始索引等于1的子串是”ba“起始索引等于2的子串是”ab“，它是word的新词
 */

function contentWord(content, word){
    let len = word.length;
    let count = 0;
    let reverseWord = [...word].reverse().join('');
    for(let i = 0; i < content.length; i++){
        let newStr = content.substr(i, len);
        if(newStr === word || newStr === reverseWord){
            count++;
        }
    }
    return count;
}

console.log(contentWord('qweebaewqd', 'qwe'));
console.log(contentWord('abab', 'ab'));

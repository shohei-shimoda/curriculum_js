//問１
//変数aは10ではない
console.log("a" !== 10);
//変数bは10以上20未満、かつ偶数である。
let b = 16;
if (b >= 10 && b < 20 && b % 2 === 0) {
    console.log(b);  
}

//問２
let x = 10;
if (10 <= x && x <= 20) {
    console.log('成功です');
} else {
    console.log('失敗です'); 
}

//問3
let y = 0;
//偶数の条件式
if (y % 2 === 0) {
    console.log("偶数です");
}
//奇数の条件式
if (y % 2 !== 0) {
    console.log("奇数です");
}
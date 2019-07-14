var str = "abcdeabcde";

console.log(str.charAt(0));
console.log(str.length);
console.log(str.charAt(9));
console.log(str.charAt(10)); //빈 string 반환
console.log(str.charAt(-1)); //빈 string 반환

console.log(str[1]); //접근방식 2

console.log(str.substring(2,4)); //2부터 4까지의 부분문자열 반환
console.log(str.substr(2,4)); //2부터 4 길이 만큼의 부분 문자열 반환

console.log(str.lastIndexOf("bc"));
console.log(str.lastIndexOf("f")); //존재하지 않는 문자열의 경우 -1 반환
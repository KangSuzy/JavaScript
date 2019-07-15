var arr = [1,2,3,4,5];

console.log(arr.pop()); //배열의 가장 마지막 출력
console.log(arr);

console.log(arr.shift()); //배열의 가장 첫번째 출력
console.log(arr);

console.log(arr.push(6)); //배열의 마지막에 추가
console.log(arr);

console.log(arr.unshift(0)); //배열의 맨앞에 추가
console.log(arr);

console.log(arr.reverse()); //배열의 순서를 뒤집음
console.log(arr.sort()); //배열 정렬

var arr1 = [1,2,3];
var arr2 = [4,5,6];

console.log(arr1.concat(arr2)); //arr1 배열 + arr2 배열
var3 = arr1.concat(arr2); //합친 배열을 새로 저장

var4 = [1,2,3,1,2,3];
console.log(var4.lastIndexOf(2)); // 2가 위치한 가장 마지막 위치

var str = "1,2,3,4,5";
var split_arr = str.split(",");
console.log(split_arr); // 구분자를 통해 문자열을 나눠 담은 배열 반환
function shadowing_example(){
	var val = 5; //in_fuction 변수
	console.log("F", val);
	val++;
}

var val = 0; // out_function 변수 초기화
shadowing_example();
console.log("O", val);
function makeCounterFunction(initVal){
	var count = initVal;
	function Increase(){
		count++;
		console.log(count);
	}
	return Increase;
}

var counter1 = makeCounterFunction(0); 
var counter2 = makeCounterFunction(10); //둘다 count라는 이름을 쓰지만 다른값을 가짐

counter1();
counter2();
var sum = 0;

for( var i=1; i<=50; i++){
	sum +=i;
}

(function (){
	for(var i=1; i<=5; i++){
		console.log((i));
	}
})();


for (var i=1;i<=100;i++){
	sum += i;
}

console.log(sum);

//setTimeout() 익명함수 유용
setTimeout(
	function (){
		console.log("timeout");
	},
	3000);
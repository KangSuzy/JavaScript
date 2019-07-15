console.log("MENU");
console.log("1) Ice Amricano");
console.log("2) Cafe Latte");
console.log("3) Cappuccino");
console.log("4) Tea");

var count = 0;

while(count < 3){
	var choice = parseInt(prompt("메뉴를 선택하세요"));

	console.log(choice + "번째 메뉴를 선택하셨습니다");

	switch( choice ){
	case 1:
	console.log("아이스 아메리카노는 1500원입니다");
	break;
	case 2:
	console.log("카페 라떼는 2000원입니다");
	break;
	case 3:
	console.log("카푸치노는 2500원입니다");
	break;
	case 4:
	console.log("홍차는 2000원입니다");
	break;
	default:
	console.log("다시 선택해주세요");
	break;

	}
	count++;
}

console.log("또 오세요 !");
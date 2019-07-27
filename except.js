try{
		//정상적으로 실행되는 경우 실행될 프로그램
		//try 블록안에서 에러가 발생하는 경우 catch 블록으로 이동함
		console.log("try 1");
		//throw "error";
		console.log("try 2");
}

catch(e){
		// try에서 에러발생한 경우
		// 에러를 인자 e로 받아 에러를 처리하는 코드를 작성
		console.log("catch error : ",e);
}

finally{
		// try, catch 문 실행 후 실행될 코드
		console.log("finally this code will always be executed");
}
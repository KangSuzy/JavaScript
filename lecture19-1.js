var month = parseInt(prompt("달을 입력하세요"));

switch( month ){
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
    console.log("31일입니다.");
    break;
    case 2:
    console.log("28일 입니다.");
    break;
    case 4:
    case 6:
    case 9:
    case 11:
    console.log("30일입니다");
    break;
    default:
    console.log("다시 입력해주세요");
    break;
    }

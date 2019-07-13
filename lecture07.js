var empty_obj = {};
console.log(typeof(empty_obj));

var man = {name : "홍길동", age:20, height:100};

console.log(man.name);
console.log(man["name"]);

man.name = "이몽룡";
man.age = 15;

console.log(man);

function f(){
	console.log(this); //어떤 객채 파일들의 속성으로 불렸는지
	console.log("f is called");
}

function setName(name){
	this.name = name;

}

var o = {name : "object", method:f, setName:setName};
var o2 = {name: "", setName: setName};

//o.method();
o.setName("object");
o2.setName("object2");

console.log(o, o2);
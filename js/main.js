alert ('It works!');
var studentsFor = ["Singh", "Jenny", "Sean", "Adam", "David"];
var studentsWhile = ["Ilya", "Matt", "Lisa", "Erik", "Evan"];
var studentsDavid = ["Conrad", "Christina", "Ian", "Mari", "Meredith"];

for (var i=0; i<studentsFor.length; i++){
	console.log("A student named " + studentsFor[i] + " is in my class.");
}

var index = 0;
while (index<studentsWhile.length){
	console.log("A student named " + studentsWhile[index] + " is also in my class.");
	index++;
}

for (var i=0; i<studentsDavid.length; i++) {
  console.log("A very cool student named " + studentsDavid[i] + " is also in my class.")
}

//// hackzored by ilya

for (var i=0; i<studentsFor.length; i++){
  console.log("A student named " + studentsFor[i]+ " is in my ass.", "A student named " + studentsFor[i]+ " is in my ass.");
}

//Adam's loop!


var emperors=['Octavian', 'Ceasar', 'Trajan', 'Hadrian', 'Nero'];
var i = 0;
while(i < emperors.length) {
  console.log(emperors[i]);

  i++
}

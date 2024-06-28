var urNm = prompt("Tell your name: ");
var frstLtr = urNm.slice(0, 1);
var frstLtr1 = frstLtr.toUpperCase();

var len = urNm.length;
var body = urNm.slice(1, len); // Updated slice parameters
var body1 = body.toLowerCase();

alert("Hi " + frstLtr1 + body1 + ", how are you?");

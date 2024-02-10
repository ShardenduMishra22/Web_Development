function BellBoy(name, age, permit, lang) {
    this.name = name;
    this.age = age;
    this.permit = permit;
    this.lang = lang;
}

var BellBoy1 = new BellBoy("Tim", 19, true, ["English", "French", "Hindi"]);
var BellBoy2 = new BellBoy("Aryan", 20, true, ["English", "Sanskrit", "Hindi"]);
var BellBoy3 = new BellBoy("Jimmy", 21, false, ["Illiterate"]);

console.log(BellBoy1.name);
console.log(BellBoy2.age);
console.log(BellBoy3.lang);
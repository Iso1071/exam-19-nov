function Text(str) {
  this.str = str;
}

Text.prototype.left = function (number) {
  return this.str.slice(0, number);
};

Text.prototype.right = function (number) {
  return this.str.slice(number * -1);
};

Text.prototype.charCount = function () {
  return this.str.length;
};

Text.prototype.wordCount = function () {
  const arr = this.str.split(" ");
  return arr.filter((word) => word !== "").length;
};

Text.prototype.vowelCount = function () {
  const resultaat = this.str.match(/[qeiou]/gi);
  return resultaat?.length || 0;
};

Text.prototype.capitalsCount = function () {
  const resultaat = this.str.match(/[A-Z]/g);
  return resultaat?.length || 0;
};

Text.prototype.append = function (newtext) {
  this.str = this.str + newtext;
  return this.str;
};

Text.prototype.prepend = function (newtext2) {
  this.str = newtext2 + this.str;
  return this.str;
};

const textObject = new Text("hellooOow dit is een zin");
console.log(textObject.left(3));
console.log(textObject.right(3));
console.log(textObject.charCount());
console.log(textObject.wordCount());
console.log(textObject.vowelCount());
console.log(textObject.capitalsCount());
console.log(textObject.append(" hey"));
console.log(textObject.prepend("hey "));

function Schilderij(naam, canvas, prijs) {
  this.naam = naam;
  this.canvas = canvas;
  this.prijs = prijs;
}

function Schilder(voornaam, achternaam, stijl) {
  this.voornaam = voornaam;
  this.achternaam = achternaam;
  this.stijl = stijl;
  this.lijst = [];
}

Schilder.prototype.addPainting = function (schilderij) {
  this.lijst.push(schilderij);
};
Schilder.prototype.removePainting = function (index) {
  this.lijst.splice(index, 1);
};
Schilder.prototype.getList = function (number) {
  return this.lijst;
};
Schilder.prototype.getTotalWidth = function (number) {
  return this.lijst;
};

const schilder = new Schilder("Vincent", "Van Gogh", "Postimpressionisme");

schilder.addPainting(new Schilderij("Zonnebloemen", "123x72", 3992175));
schilder.addPainting(new Schilderij("De aardappeleters", "84x114", 21152154));
schilder.addPainting(new Schilderij("Slaapkamer te Arles", "61x81", 19127784));

console.log(schilder.getList());

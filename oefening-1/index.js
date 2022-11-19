import readlineSync from "readline-sync";
const vraag = (value) => readlineSync.question(value + "?\n> ");

// vragen stellen
const voornaam = vraag("Voornaam");
const familienaam = vraag("Familienaam");
const straatenhuisnummer = vraag("Straat en huisnummer");
const postcode = vraag("Postcode");
const gemeente = vraag("Gemeente");

// valideren
let ongeldig = "";

if (voornaam === "") {
  ongeldig = "Minstens één van de ingevulde velden is niet geldig!";
} else if (voornaam.length > 44) {
  ongeldig = "Kader is te breed. Gebruik afkortingen in de breedste stukken.";
}

if (familienaam === "") {
  ongeldig = "Minstens één van de ingevulde velden is niet geldig!";
} else if (familienaam.length > 44) {
  ongeldig = "Kader is te breed. Gebruik afkortingen in de breedste stukken.";
}

if (straatenhuisnummer === "") {
  ongeldig = "Minstens één van de ingevulde velden is niet geldig!";
} else if (straatenhuisnummer.length > 44) {
  ongeldig = "Kader is te breed. Gebruik afkortingen in de breedste stukken.";
}

if (isNaN(parseInt(postcode)) || postcode < 999 || postcode > 9990) {
  ongeldig = "Minstens één van de ingevulde velden is niet geldig!";
} else if (postcode.length > 44) {
  ongeldig = "Kader is te breed. Gebruik afkortingen in de breedste stukken.";
}

if (gemeente === "") {
  ongeldig = "Minstens één van de ingevulde velden is niet geldig!";
} else if (gemeente.length > 44) {
  ongeldig = "Kader is te breed. Gebruik afkortingen in de breedste stukken.";
}

if (ongeldig !== "") {
  console.log(ongeldig);
} else {
  let kaderMax = familienaam.length + 3;
  if (kaderMax < straatenhuisnummer) {
    kaderMax = straatenhuisnummer;
  }
  if (kaderMax < gemeente + 5) {
    kaderMax = gemeente + 5;
  }
  kaderMax += 4;
  const lijn = "-".repeat(kaderMax);
  console.log(lijn);
  console.log("| " + voornaam[0].toUpperCase() + ". " + familienaam + " |");
  console.log("| " + straatenhuisnummer + " |");
  console.log("| " + postcode.toString() + " " + gemeente.toUpperCase() + " |");
  console.log(lijn);
}

import readlineSync from "readline-sync";
const vraag = (value) => readlineSync.question(value + "?\n> ");

// vragen stellen
const voornaam = vraag("Voornaam");
const familienaam = vraag("Familienaam");
const straatenhuisnummer = vraag("Straat en huisnummer");
const postcode = vraag("Postcode");
const gemeente = vraag("Gemeente");

// valideren

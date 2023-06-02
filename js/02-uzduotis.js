console.clear();

/* Sukurti du kintamuosius. 
Jiems priskirti savo mylimo aktoriaus vardą ir pavardę, kaip stringus (Jonas Jonaitis). 
Atspausdinti trumpesnį stringą.
*/

const vardas = "Tom";
const pavarde = "Cruise";
const pilnasVardas = `${vardas} ${pavarde}`;
console.log(pilnasVardas)


/* Sukurkite 4 kintamuosius, 
kurie saugotų jūsų vardą, pavardę, 
gimimo metus ir šiuos metus (nebūtinai tikrus). 
Parašykite kodą, kuris pagal gimimo metus paskaičiuotų jūsų amžių 
ir naudodamas vardo ir pavardės kintamuosius bei
atspausdintų tokį sakinį :"Aš esu Vardenis Pavardenis. Man yra XX metai(ų)". 
*/

const name = 'Viktoras';
const surname = 'Tarvydas';
const birthYear = 1984;
const currentYear = 2023;
const age = currentYear - birthYear;

function intro() {
    return `Aš esu ${name}. Man yra ${age} metų.`
}

//const intro = `Aš esu ${name}. Man yra (${currentYear} - ${birthYear}) metų.`
console.log(intro());


/* Sukurti du kintamuosius. 
Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus. 
Sukurti trečią kintamąjį ir jam priskirti stringą, 
sudarytą iš trijų paskutinių vardo ir pavardės kintamųjų raidžių. 
Jį atspausdinti.
*/



/* Sukurti kintamąjį su stringu: “Once upon a time in hollywood”. 
Jame visas “o” (didžiąsias ir mažąsias) pakeisti žvaigždutėm “*”.  
Rezultatą atspausdinti.
*/



/* Sukurkite keturis kintamuosius,
kuriems sugeneruokite atsitiktines reikšmes nuo 0 iki 2. 
Suskaičiuokite kiek yra nulių, vienetų ir dvejetų.
*/


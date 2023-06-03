console.clear();

/* Sukurti du kintamuosius. 
Jiems priskirti savo mylimo aktoriaus vardą ir pavardę, kaip stringus (Jonas Jonaitis). 
Atspausdinti trumpesnį stringą.
*/

const vardas = "Tom";
let pavarde = "Cruise";
const pilnasVardas = `${vardas} ${pavarde}`;
console.log(pilnasVardas)

//...................


/* Sukurkite 4 kintamuosius, 
kurie saugotų jūsų vardą, pavardę, 
gimimo metus ir šiuos metus (nebūtinai tikrus). 
Parašykite kodą, kuris pagal gimimo metus paskaičiuotų jūsų amžių 
ir naudodamas vardo ir pavardės kintamuosius bei
atspausdintų tokį sakinį :"Aš esu Vardenis Pavardenis. Man yra XX metai(ų)". 
*/
console.log();

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

//.................


/* Sukurti du kintamuosius. 
Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus. 
Sukurti trečią kintamąjį ir jam priskirti stringą, 
sudarytą iš trijų paskutinių vardo ir pavardės kintamųjų raidžių. 
Jį atspausdinti.
*/

/*
function trumpinys(vardas, pavarde) {
    return `${vardas[2]} ${vardas[3]} ${vardas[4]} ${pavarde[4]} ${pavarde[5]} ${pavarde[6]}`;
}
const actor = trumpinys('Julia', 'Roberts');
console.log(actor);
*/
console.log();

const actorName = 'Julia';
const actorSurname = 'Roberts';
const actorNewName = `${actorName[2]} ${actorName[3]} ${actorName[4]} ${actorSurname[4]} ${actorSurname[5]} ${actorSurname[6]}`;
console.log(actorNewName);

//......................

/* Sukurti kintamąjį su stringu: “Once upon a time in hollywood”. 
Jame visas “o” (didžiąsias ir mažąsias) pakeisti žvaigždutėm “*”.  
Rezultatą atspausdinti.
*/
console.log('...............');
const storyLine = 'Once upon a time in Holllywood.';
// String.replace(searchString, replaceString)
// String.replace(searchString, replceFunction)

/*
let result = storyLine.replace("o", "*");
console.log(result);
*/

// console.log(storyLine.replace(/(O)(o)/g, '$'));

console.log(storyLine.replaceAll('o', '*').replace('O', '*'));


/*
const phrase = 'Once upon a time in Holllywood.';
const pattern = /'O', 'i'/g;
const replacement = '*';
const replaced = phrase.replace(pattern, replacement)

console.log(replaced);
*/


//.....................


/* Sukurkite keturis kintamuosius,
kuriems sugeneruokite atsitiktines reikšmes nuo 0 iki 2. 
Suskaičiuokite kiek yra nulių, vienetų ir dvejetų.
*/
console.log('...............');

const n1 = 0;
const n2 = 1;
const n3 = 2;
const n4 = 1;


// object:
let arr = [n1, n2, n3, n4];
let obj = {};

for (let i = 0; i < arr.length; i++) {
    obj[arr[i]] = obj[arr[i]] ? obj[arr[i]] + 1 : 1;
}
console.log(obj);

console.log();


// if function:
const skaiciai = [n1, n2, n3, n4];
const res = arr.reduce((x, y)=>{
    if(x[y]){
        x[y] += 1;
    }else{
        x[y] = 1;
    }
    return x;
}, {});

console.log(res);

//.......................



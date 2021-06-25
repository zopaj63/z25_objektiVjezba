/*
VJEŽBA: Objekti
TRAJANJE: 45min
1. Kreiraj objekt koji reprezentira neki specifični auto, sa bar 8 svojstava, od kojih su 3 funkcije (npr. ubrzaj, zakoci itd.), a jedna je također objekt. Probajte referencirati druge vrijednosti objekta u funkcijama. Svaka funkcija mora primati argumente i vracati neku vrijednost.
2. Pozovite funkcije svog objekta sa argumentima i ispisite rezultat.
3. Sa petljom pristupi svim brojivim svojstvima tvog auto objekta i ispiši vrijednosti u konzoli zajedno sa njihovim imenima (kljucevima/property) (npr. ime: Ivan)
(GOOGLE: MDN JS enumerable properties)
4. Ispiši u konzoli razumljivu rečenicu koja uključuje bar 2 svojstva tvog objekta.
5. Pretvori svoj objekt u JSON string.
(GOOGLE: MDN JSON stringify)

BONUS:
Tko hoće može podići na GitHub :)
*/

var ficho = {
    boja: "bijela",
    vrata: "naopačke",
    proizveden: "1950. godine",
    ubrzanje: "5 min",
    snaga: "45 KS",
    potrosnja: {
        grad: "9 L",
        autoput: "7 L"
    },
    brzina: {
        prva: 10,
        druga: 30,
        treca: 50,
        cetvrta: 70,
    },
    potrosnja: {
        grad: "9 L",
        autoput: "7 L"
    },
    printFicho: function printFicho() {
        console.log(this.boja, this.brzina, this.potrosnja, this.proizveden, this.snaga, this.ubrzanje, this.vrata);
    }
};

// ficho.printFicho();

console.log(Object.getOwnPropertyNames(ficho), ficho);

console.log(JSON.stringify(ficho.printFicho()));
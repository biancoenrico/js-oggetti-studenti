// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
// Creare un array di oggetti di studenti.
// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
// Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.


// ------------------------------------------------------
console.log('esercizio 1');
// esercizio 1: creo un'oggetto che descrive uno studente:
var studente = {
    'nome': 'enrico',
    'cognome': 'bianco',
    'eta': 20,
}

for (key in studente)[
    console.log(studente[key])
]

// ------------------------------------------------------
console.log('esercizio 2');
// esercizio 2: creo un array di 'oggetti' studenti e ne stampo nomi e cognomi

var arrayStudenti = [
    {
        'nome': 'enrico',
        'cognome': 'bianco',
        'eta': 20
    },
    {
        'nome': 'pippo',
        'cognome': 'pluto',
        'eta': 25
    },
    {
        'nome': 'caio',
        'cognome': 'sempronio',
        'eta': 22
    },
]

for (var i = 0; i < arrayStudenti.length; i++) {

    var student = arrayStudenti[i]

    for(var key in student){

        if(key == 'nome'){

            console.log('nome studente: ' + student[key]);

        }
        if (key == 'cognome'){

            console.log('cognome studente: ' + student[key]);

        }
    }
    
}

// ------------------------------------------------------
console.log('esercizio 3');
// esercizio 3: creo un oggetto in base alle informazioni fornitemi dall'utente e lo inserisco nell'array dell'esercizio precedente

var nome = prompt('inserisci nome');
var cognome = prompt('inserisci cognome');
var eta = parseInt(prompt('inserisci eta')); 

var newStudente = {
    'nome': nome,
    'cognome': cognome,
    'eta': eta,
}

arrayStudenti.push(newStudente);
console.log(arrayStudenti);
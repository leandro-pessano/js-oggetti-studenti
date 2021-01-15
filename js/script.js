// 1 Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà.
var studente = {
  nome : 'Pinco',
  cognome : 'Panco',
  eta : 30
};

for (var k in studente) {
  console.log(studente[k]);
}
//

// 2 Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
var studenti = [
  {
    nome : 'Aldo',
    cognome : 'Baglio',
    eta : 12
  },
  {
    nome : 'Giovanni',
    cognome : 'Storti',
    eta : 17
  },
  {
    nome : 'Giacomo',
    cognome : 'Poretti',
    eta : 14
  }
];

for (var i = 0; i < studenti.length; i++) {
  console.log(studenti[i].nome + ' ' + studenti[i].cognome);
}
//

// 3 Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
var nome = prompt('Inserisci il nome');
var cognome = prompt('Inserisci il cognome');
var eta = parseInt(prompt('Inserisci l\'età'));

var studenteInserito = {
  nome : nome,
  cognome : cognome,
  eta : eta
};

studenti.push(studenteInserito);
console.log(studenti);

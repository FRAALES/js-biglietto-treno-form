// Dichiaro le mie variabili
let nomeUtente;
let kmUtente;
let etaUtente;
const prezzoKm = 0.21;
let prezzoSenzaSconto;
let prezzoConLoSconto;
let bottoneGenera = document.getElementById("genera");



// Chiedi all'utente Nome e Cognome, quanti km vuole percorrere,la sua età
bottoneGenera.addEventListener('click', 
    
function myFunction() {
nomeUtente = document.getElementById("nome").value;
kmUtente = document.getElementById("km").value;
etaUtente = document.getElementById("eta").value;



// Moltiplica kmUtente per 0,21

prezzoSenzaSconto = parseInt (kmUtente * prezzoKm);
console.log(prezzoSenzaSconto);



// Definisci prezzo:

// Se età utente è < 18 anni, allora il prezzo va diminuito del 20%

if (etaUtente < 18) {
prezzoConLoSconto = prezzoSenzaSconto - ((20 * prezzoSenzaSconto) / 100 );
}



// Se età utente è > 65 anni, allora il prezzo va diminuito del 40%

else if (etaUtente > 65) {
    prezzoConLoSconto = prezzoSenzaSconto - ((40 * prezzoSenzaSconto) / 100 );
}


// Altrimenti età utente è > 18 anni e < 65 anni, il prezzo rimane quello che è (prezzo con lo sconto = prezzo senza sconto)

else {
    prezzoConLoSconto = prezzoSenzaSconto;
};

// Qui gli dico che quando clicco sul pulsante GENERA mi deve far apparire il prezzo del biglietto
document.getElementById("mio_form").innerHTML= `${prezzoConLoSconto}` + ' euro'




console.log(nomeUtente, kmUtente, etaUtente, prezzoSenzaSconto);


      
}
);  
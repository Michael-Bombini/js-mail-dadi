/*
Gioco dei dadi
Generare più  numeri random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/

//recupero elementi dal DOM
const genera = document.getElementById("genera");
const controlla = document.getElementById("controlla");
const container = document.getElementById("container");

//dichiarazione array e rispettivo totale su cui sarà calcolata la media
const estrattiComputer = [];
const estrattiGiocatore = [];
let totaleComputer = 0 ;
let totaleGiocatore = 0 ;
let generatoComputer = 0 ;
let generatoGiocatore = 0 ;


//ascolto l'evento click su genera e genero due numeri rispettivi
genera.addEventListener("click" , function(){


//genero due numeri casuali tra 1 e 6 uno per il computer e uno per l'utente
generatoComputer = (Math.floor(Math.random() * 6 ) + 1 );
generatoGiocatore = (Math.floor(Math.random() * 6 ) + 1 );

//aggiungo quei numeri generati nel vettore
estrattiComputer.push(generatoComputer);
estrattiGiocatore.push(generatoGiocatore);


console.log("genera click");

});


//ascolto l'evento click su controlla e con la funzione faccio i dovuti calcoli
//somma e media
controlla.addEventListener("click" , function(){

    //scorro i due vettori con un indice che arriva fino ad una delle due lunghezze
    //essendo identiche
for(let i = 0 ; i < estrattiComputer.length ; i++){
    totaleComputer += estrattiComputer[i];
    totaleGiocatore += estrattiGiocatore[i];
}

if(totaleComputer > totaleGiocatore)
    console.log("HA VINTO IL COMPUTER con i seguenti numeri" + totaleComputer);
else
    console.log("HA VINTO IL GIOCATORE CON I SEGUENTI NUMERI" + totaleGiocatore);

console.log("controlla click");

});
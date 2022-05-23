/*
Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
(non usare includes() o indexOf)
*/

const container = document.querySelector(".container");
const emailUtente = document.getElementById("email");
const btn = document.querySelector(".btn");
const mailConsentite = ["mario.rossi@gmail.com" , "luigi.verdi@gmail.com" , "gianni.gialli@gmail.com"];
const mailVerificata = document.querySelector(".mailVerificata");

let valoreMail;
let trovato = false ;



btn.addEventListener("click" , function(){

 valoreMail = emailUtente.value;

 for(let i = 0 ; i < mailConsentite.length ; i++){
    if(valoreMail === mailConsentite[i]){
        trovato = true ;
    }
 }

 

 
 if(trovato){
    console.log("la tua email può accedere");
    mailVerificata.innerHTML = `<h2 class="text-success">La tua email può accedere</h2>`
    
 }
 
 else {
    console.log("la tua email non può accedere");
    mailVerificata.innerHTML = `<h2 class="text-danger">La tua email NON può accedere</h2>`
 }


 trovato = false;

})


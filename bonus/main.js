/*

Esercizio Bonus: la coda dell’array
Creare un array con un numero a piacere di elementi.
Stampare a schermo, con un ciclo, gli ultimi 5 elementi dell’array.
Attenzione #1: quanti elementi minimo dovrà contenere l’array?
Attenzione #2: il ciclo deve essere costruito per estrarre gli ultimi elementi da qualsiasi array,
anche se non conosciamo a priori quanti elementi contiene.

Extra Bonus
Creiamo un array chiedendo all’utente quanti elementi dovrà contenere e generando tanti numeri 
interi casuali quanti sono gli elementi da inserire.
Attenzione #3: quali controlli dobbiamo fare sull’input dell’utente?
Super Extra Bonus: chiedere all’utente anche quanti elementi vanno estratti dal fondo dell’array.


*/

const quantiNumeri = parseInt(prompt("inserisci quanti numeri minimo 5"));
const quantiFondo = parseInt(prompt("quanti elementi vuoi estrarre dal fondo?"));
const array = [];

for(let i = 0 ; i < quantiNumeri ; i++){
    array.push(Math.floor(Math.random() * 6 ) + 1 );
}

console.log("Ecco i valori dell'array \n ")
console.log(array)



if(array.length < 5  || isNaN(quantiFondo) || quantiFondo > quantiNumeri )
    console.log(-1);
    else
for(let i = array.length - quantiFondo ; i < array.length ; i++){
    console.log(`il numero nella posizione ${i+1}  è ${array[i]} `);
}


console.log("\n l'indice della posizione è stato stampato con i+1")

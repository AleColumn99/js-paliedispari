/* funzione palondrimia */

//chiedo la parola
var parola = prompt("Inserisci una parola:");

//funzione in cui metto la stringa in un'altra stringa ma invertendola e che le compara per vedere se sono uguali
var isPalindroma = palindroma(parola);

var palindroma_text = "Hai inserito la parola " + parola + ".<br>La parola inserita ";
if (isPalindroma) palindroma_text += "è palindroma.";
else palindroma_text += "NON è palindroma.";

document.getElementById('palindromia').innerHTML = palindroma_text;

function palindroma(word) {

  //nuova variabile per metterci la parola invertita
  var invertita = "";
  //ciclo per invertire la parola
  for (var i=word.length-1; i>=0; i--) {
    invertita += (word[i]);
  }
  console.log(invertita);

  //variabile che rimarrà falsa se la parola non è palindroma e diventerà vera se la parola è palindoma
  var pali = false;

  //if per confrontare le due stringhe per vedere se sono uguali
  if (word == invertita) pali = true;

  //ritorno se la parola è palindroma o meno
  return pali

} 

/* funzione pari e dispari */

//chiedo pari e dispari a utentepari
var pari_dispari_user = prompt("Pari o dispari?");

if (pari_dispari_user != "pari" && pari_dispari_user != "dispari") {
  alert("PARI O DISPARI! RICARICA LA PAGINA");
} else {

  //chiedo un numero da 1 a 5
  var num_user = parseInt(prompt("Inserisci un numero da 1 a 5"));

  if (num_user < 1 || num_user > 5) {
    alert("HO DETTO DA 1 A 5! RICARICA LA PAGINA");
  } else {

    //usando la funzione, assegno un numero random al computer
    num_computer = random();
    console.log(num_computer);

    //sommo i due numeri
    var sum = num_user + num_computer;

    //decido con una funzione se è pari o dispari
    var pari_dispari = odd_or_even(sum);

    //stampo un po' tutto
    var odd_even_text = "Hai scelto " + pari_dispari_user + ". Hai proposto il numero " + num_user + ".<br>Il computer propone il numero " + num_computer + ".<br>La somma dei due numeri è " + sum ;

    //stampo il risultato
    if (pari_dispari == pari_dispari_user) {
      odd_even_text += " ed è " + pari_dispari + ".<br>Complimenti, hai vinto!";
    }
    else {
      odd_even_text += " ed è " + pari_dispari + ".<br>Mi spiace, hai perso..."
    }

    document.getElementById('odd_even').innerHTML = odd_even_text;

  }
    
}

//funzione per assegnare un numero random
function random() {

  var num = Math.floor(Math.random() * 5) + 1;

  return num;

}

//funzione per vedere se un numero è pari o dispari
function odd_or_even(number) {

  var result;

  if (number % 2 == 0) result = "pari";
  else result = "dispari";

  return result;

}
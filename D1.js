/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output collega questo file al tuo HTML e apri la console del browser.
- Dovrai creare una direttiva di output per testare le variabili od i risultati delle espressioni che crei
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.

/* SCRIVI QUI LA TUA RISPOSTA */
//   1 datatype é string che é una semplice linea di testo composta da caratteri
//   2 datatype é number che sono semplicimente numeri sia interi che con virgola
//   3 datatype é boolean che comprende solo due valori vero o falso
//   4 undefined é un datatype affibbiato ad una variabile senza valore
//   5 null é un datatype affibbiato intenzionalmente ad una varibile per non darle un valore
// 6 Bignlt serve per rappresentare numeri molto grandi che non posso essere rappresentanti in 64 bit
// 7 datatype simbol é usato per rappresenatre simboli in input e output senza farli collidere con altro codice si puo definire con un incapsulazione

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let name = "Sebastiano Monello";
console.log("Il mio nome é ", name);

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("La somma di 12+20 é", 12 + 20);
/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let x = 12;
console.log("La variabile x é ", x);

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
name = "Monello";
console.log("Variabile name modificata é ", name);
const nome = "Sebastiano Monello";
console.log("La varibile const non puó essere modificata");
// nome='Monello'impossibile cambiare variabile all attributo const perché essendo un datatype constante generera errore
/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
x = 12;
console.log("4 - variabile x é ", 4 - x);
/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let name1 = "jhon";
let name2 = "Jhon";
console.log(name1 === name2);
console.log(name1 === name2.toLowerCase());

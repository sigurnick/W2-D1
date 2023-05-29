/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* 
-STRINGA: una stringa è un dato di caratteri non numerici. Un insieme di una o più lettere
-NUMERO: semplicemnte è un dato che contiene un numero di qualsiasi tipo
-BOOLEAN: è un dato che contiene "TRUE" oppure "FALSE" 
-UNDEFINED: è una variabili a cui non è ancora stato assegnato un valore
-NULL: è una variabili senza un contenuto
*/

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* let name = "Nicolas" */

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/


// let a = 12
// let b = 20 
// let c = a + b
// console.log("c contiene:", c)


/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/
               
/* let x = 12 */

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* 
name = "Mastropietro"
const numero = 1
numero = 2  //sbagliato 
 */

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/*
let x =  12
let z = 4 - x
console.log("variabile z contiene:", z) 
*/

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

let name1 = "john"
let name2 = "John"
console.log(name1 !== name2)
console.log(name1.toLowerCase === name2.toLowerCase)



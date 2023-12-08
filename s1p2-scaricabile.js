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

/* SCRIVI QUI LA TUA RISPOSTA */
let dataTypeNumber1 = 5;
let dataTypeNumber2 = 4;
let sumTypeNumber = dataTypeNumber1 + dataTypeNumber2;
console.log("1 - Datatype Number ha come valore dei numeri; è anche possibile effettuare operazioni matematiche con esso = " + sumTypeNumber);
let dataTypeString = "Per esempio questa è una stringa!";
console.log("2 - Datatype String ha come valore una sequenza di caratteri tra lettere e/o anche numeri = " + dataTypeString);
let dataTypeBooleanTrue = true;
let dataTypeBooleanFalse = false;
console.log("3 - Datatype Boolean è un'entità logica, nel senso che si usa per dare due opzioni, quindi True e False, per esprimere condizioni in cui un valore può essere Vero o Falso e quindi di conseguenza prendere una decisione in modo automatico in relazione al valore dato = " + dataTypeBooleanTrue);
console.log("3 - I booleans sono gli abitanti del pianeta Booleon... non è vero, ma questo è l'esempio per indicare che questo valore è Falso = " + dataTypeBooleanFalse);
let datatypeArray = [1, "esempio di Array misto", true];
console.log("4 - Datatype Array è una variabile che ha come valore diversi tipi di dati, quindi è possibile mettere insieme Boolean, Number e string = " + datatypeArray);
let dataTypeUndefined
console.log("5 - Datatype Undefined è un valore di default quando in una variabile non viene definito il suo valore = " + undefined);
let dataTypeNull = null;
console.log("6 - Datatype Null diciamo che è simile ma allo stesso tempo diverso da Undefined perchè si indica volotariamente quando non si conosce un valore di una variabile e intenzionalmente si vuole specificare la mancanza di questo dato = " + null);


/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let spiegazioneOggetto = " Un oggetto è un contenitore di un insieme di dati che definiscono ognuno singolarmente una parte dello stesso insieme aggiungendo più valori dello stesso."
let io = {
    nome: "Simone",
    età: 29,
    sesso: "Maschio",
    miPresento: function() {
        console.log("Ciao, sono " + this.nome + " ho " + this.età + " anni, sono un " + this.sesso + " e ti spiego cos'è un oggetto!" );
    }
}
console.log(io);
io.miPresento();
console.log(spiegazioneOggetto);


/* ESERCIZIO 3
 Scriti il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// DIVERSE OPZIONI CHE HO CONSIDERATO:
let number1 = 12;
let number2 = 20;
let sumNumber = number1 + number2;
console.log(number1 + number2);
console.log(sumNumber);
console.log(12 + 20);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let x = 12;


/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let name = "Simone";

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log(x - 4);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let name1 = "john";
let name2 = "John";
console.log(name1 !== name2);
console.log(name1.toLowerCase() === name2.toLowerCase());
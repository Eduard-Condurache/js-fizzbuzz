// FINCHE (I) E' MINORE O UGUALE A 100 AGGIUNGE +1 (i++)
for (let i = 1; i <= 100; i++) {
// SE (I) E' UN MULTIPLO DI 3 (E) SE I E' UN MULTIPLO DI 5 STAMPA FIZZBUZZ.
    if (i % 3 == 0 && i % 5 == 0) {
        console.log('FizzBuzz');
    } 
// ALTRIMENTI SE (I) E' UN MULTIPLO DI 3 STAMPA FIZZ.
    else if (i % 3 == 0) {
        console.log('fizz');
    }
// ALTRIMENTI SE (I) E' UN MULTIPLO DI 5 STAMPA BUZZ.
    else if (i % 5 == 0) {
        console.log('buzz');
    }
// ALTRIMENTI STAMPA IN CONSOLE (I).
    else {
        console.log(i);
    }
}
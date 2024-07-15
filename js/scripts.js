const boxContainer = document.querySelector('div.box-container');

for (let i = 1; i <= 100; i++) {
    let testo;
    let className;

    if (i % 3 == 0 && i % 5 == 0) {
        console.log('FizzBuzz');
        testo = 'FizzBuzz';
        className = 'fizzbuzz';
    } 

    else if (i % 3 == 0) {
        console.log('fizz');
        testo = 'fizz';
        className = 'fizz';
    }

    else if (i % 5 == 0) {
        console.log('buzz');
        testo = 'buzz';
        className = 'buzz';
    }

    else {
        console.log(i);
        testo = i;
    }

    const box = document.createElement('div');
    box.innerHTML = testo;

    box.className = 'box ' + className;

    boxContainer.append(box);

}
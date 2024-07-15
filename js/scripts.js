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

    box.style.width = '100px';
    box.style.height = '100px';
    box.style.margin = '10px';
    box.style.display = 'flex';
    box.style.alignItems = 'center';
    box.style.justifyContent = 'center';

    if (className === 'fizzbuzz') {
        box.style.backgroundColor = '#F0466F';
    }

    else if (className === 'fizz') {
        box.style.backgroundColor = '#0CD6A1';
    }

    else if (className === 'buzz') {
        box.style.backgroundColor = '#FFD166';
    }

    else {
        box.style.backgroundColor = '#1389B2';
    }

    boxContainer.append(box);

}
const myUl = document.querySelector('ul');

for (let i = 1; i <= 100; i++) {
    let testo;

    if (i % 3 == 0 && i % 5 == 0) {
        console.log('FizzBuzz');
        testo = 'FizzBuzz'
    } 

    else if (i % 3 == 0) {
        console.log('fizz');
        testo = "fizz"
    }

    else if (i % 5 == 0) {
        console.log('buzz');
        testo = "buzz"
    }

    else {
        console.log(i);
        testo = i;
    }

    const newLi = document.createElement('li');
    newLi.innerHTML = testo;
    myUl.append(newLi);

}
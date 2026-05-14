function calc() {
    let l = document.querySelector('#left');
    let r = document.querySelector('#right');

    let left = parseInt(l.value);
    let right = parseInt(r.value);

    let kotae = left + right;

    let a = document.querySelector('#answer');

    a.textContent = kotae;
}

let b = document.querySelector('#calc');

b.addEventListener('click', calc);

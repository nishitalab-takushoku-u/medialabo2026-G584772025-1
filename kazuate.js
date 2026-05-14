let kotae = Math.floor(Math.random() * 10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

let kaisu = 0;

let owari = false;

function hantei() {

  let yoso = Number(document.querySelector('#yoso').value);
  let p = document.querySelector('#result');
  let span = document.querySelector('#kaisu');
  if (kaisu >= 3 || owari === true) {
    p.textContent = '答えは ' + kotae + ' でした．すでにゲームは終わっています';
    return;
  }
  kaisu = kaisu + 1;
  span.textContent = kaisu;
  if (yoso === kotae) {
    p.textContent = '正解です．おめでとう!';
    owari = true;
  } else {
    if (kaisu === 3) {
      p.textContent = 'まちがい．残念でした．答えは ' + kotae + ' です．';

    } else if (yoso < kotae) {
      p.textContent = 'まちがい．答えはもっと大きいですよ';

    } else {
      p.textContent = 'まちがい．答えはもっと小さいですよ';
    }
  }
}

let b = document.querySelector('#btn');
b.addEventListener('click', hantei);